(function () {
  const slidesEl = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slide");
  const total = slides.length;
  const nextBtn = document.querySelector(".arrow.next");
  const prevBtn = document.querySelector(".arrow.prev");
  let index = 0;

  function show(i) {
    slidesEl.style.transform = `translateX(-${i * 100}%)`;
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % total;
      show(index);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      index = (index - 1 + total) % total;
      show(index);
    });
  }

  // Autoplay: advance every 3 seconds (3000ms)
  const AUTO_PLAY_MS = 3000;
  let autoPlayId = null;

  function startAutoPlay() {
    if (!slidesEl || autoPlayId) return;
    autoPlayId = setInterval(() => {
      index = (index + 1) % Math.max(1, total);
      show(index);
    }, AUTO_PLAY_MS);
  }

  function stopAutoPlay() {
    if (autoPlayId) {
      clearInterval(autoPlayId);
      autoPlayId = null;
    }
  }

  // Pause on mouse hover
  if (slidesEl) {
    slidesEl.addEventListener("mouseenter", stopAutoPlay);
    slidesEl.addEventListener("mouseleave", startAutoPlay);
  }

  // Basic touch support
  let startX = null;
  if (slidesEl) {
    slidesEl.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      stopAutoPlay();
    });
    slidesEl.addEventListener("touchend", (e) => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (dx < -40) index = (index + 1) % total;
      else if (dx > 40) index = (index - 1 + total) % total;
      show(index);
      startX = null;
      // resume autoplay after short delay to avoid immediate change
      setTimeout(startAutoPlay, 500);
    });
  }

  // start autoplay initially
  startAutoPlay();
})();

// bid slider auto scroll
const bidSlider = document.getElementById("bidSlider");
let isAutoScrolling = true;

bidSlider.addEventListener("mouseenter", () => {
  isAutoScrolling = false;
});

bidSlider.addEventListener("mouseleave", () => {
  isAutoScrolling = true;
});

setInterval(() => {
  if (isAutoScrolling) {
    bidSlider.scrollLeft += 1;
    if (bidSlider.scrollLeft >= bidSlider.scrollWidth - bidSlider.clientWidth) {
      bidSlider.scrollLeft = 0;
    }
  }
}, 30);

// ensure banner links show a native tooltip and ARIA label when they have valid hrefs
document.addEventListener("DOMContentLoaded", () => {
  const bannerLinks = document.querySelectorAll(".slides a[href]");
  bannerLinks.forEach((a) => {
    const href = a.getAttribute("href");
    if (href && href.trim() !== "" && href.trim() !== "#") {
      if (!a.getAttribute("title"))
        a.setAttribute("title", "Click to see more");
      if (!a.getAttribute("aria-label"))
        a.setAttribute("aria-label", "Click to see more");
    }
  });
});

// clear window on load (safe guards)
window.onload = function () {
  const contactForm = document.getElementById("form");
  if (contactForm && typeof contactForm.reset === "function") {
    contactForm.reset();
  }
};

const result = document.getElementById("result");

function showFloatingMessage(msg) {
  if (!result) return;
  result.textContent = msg;
  result.classList.add("toast-visible");
  setTimeout(() => {
    result.classList.remove("toast-visible");
    result.textContent = "";
  }, 2000);
}

// Contact form (AJAX) - only attach if the contact form exists
const form = document.getElementById("form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    if (result) result.innerHTML = "Please wait...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          if (result) result.innerHTML = json.message;
          showFloatingMessage("Form submitted successfully! Thank you");
        } else {
          console.log(response);
          if (result) result.innerHTML = json.message;
        }
      })
      .catch((error) => {
        console.log(error);
        if (result) result.innerHTML = "Something went wrong!";
      })
      .then(function () {
        form.reset();
        setTimeout(() => {
          if (result) result.style.display = "none";
        }, 3000);
      });
  });
}

// Footer subscription form: intercept and submit via AJAX so the toast is visible
const footerForm = document.querySelector("form.footer-form");
if (footerForm) {
  footerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(footerForm);
    if (result) result.innerHTML = "Please wait...";

    fetch(footerForm.action || "https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })
      .then(async (response) => {
        const json = await response.json().catch(() => null);
        if (response.status == 200) {
          showFloatingMessage("Form submitted successfully! Thank you");
          if (result && json && json.message) result.innerHTML = json.message;
        } else {
          showFloatingMessage("Something went wrong!");
          if (result && json && json.message) result.innerHTML = json.message;
        }
      })
      .catch((err) => {
        console.log(err);
        showFloatingMessage("Something went wrong!");
      })
      .finally(() => {
        footerForm.reset();
      });
  });
}
