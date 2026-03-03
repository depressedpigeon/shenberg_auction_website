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

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % total;
    show(index);
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + total) % total;
    show(index);
  });

  // Basic touch support
  let startX = null;
  slidesEl.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });
  slidesEl.addEventListener("touchend", (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (dx < -40) index = (index + 1) % total;
    else if (dx > 40) index = (index - 1 + total) % total;
    show(index);
    startX = null;
  });
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
