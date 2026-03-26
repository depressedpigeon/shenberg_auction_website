window.faqData = [
  {
    question: "From which country will you send goods?",
    answer: `Delivery is from Latvia. We work primarily with UPS and can also ship via Latvian Post.
After receiving payment, we prepare your order for shipment (3-5 days).<br><br>
UPS delivery takes about 3-5 days (20 EUR).<br>
Latvian Post (budget option) takes about 10-20 days (10 EUR).<br><br>
You will receive a tracking number once the order is shipped.`,
  },
  {
    question: "I won some lots. How can I pay and pick them up in person?",
    answer: `Customers who prefer to pick up their lots in person at our office can reserve a suitable time via our online scheduling service: https://calendly.com/coinstore_meet/30min <br><br>
Pickup location: PILS LAUKUMS 4 <br><br>
Please make sure to pay for your order in advance. After payment, you will be able to reserve a convenient pickup time.`,
  },
  {
    question: "How much should I pay including shipping to my country?",
    answer: `The price for fast delivery is:<br><br>
- 10 EUR for Latvia, Lithuania, Estonia<br>
- 20 EUR for Europe<br>
- 30 EUR for America, China, Japan<br><br>

We work with UPS. After receiving your payment, we will prepare your order for shipment (3–5 days) and provide a tracking number once shipped. If you choose Latvijas Pasts (budget option), delivery takes about 10–20 days.`,
  },
  {
    question: "The invoice does not seem to show all the items I won",
    answer: `Our specialists verify all accounts and invoices. If your invoice shows all items on our side, it should be correct. If you still believe there is an issue, contact us and we will review it again.`,
  },
  {
    question: "I have paid. Have you received my payment?",
    answer: `Once we receive and confirm your payment, you will get an automatic payment confirmation. We will then collect your order (typically within 3–5 days) before shipping and provide a tracking number once shipped.`,
  },
  {
    question: "I participated in an auction and haven’t received my invoice.",
    answer: `Invoices are typically sent within 5 working days after the auction ends. Once we receive your payment, you’ll get a payment confirmation and a tracking number after the order is collected and shipped.`,
  },
  {
    question:
      "Is it possible to pay in GBP? Also, UPS was slow last time; can I choose an alternative courier?",
    answer: `The bottom of the invoice will show the GBP amount. As for shipping, besides UPS we offer Latvijas Pasts as a budget option (10 EUR, 10-20 days). If UPS was slow previously, you can choose Latvian Post as an alternative.`,
  },
  {
    question: "I made offers through Biddr but haven’t seen the results.",
    answer: `We reconcile bids from all platforms and send invoices within a week after the auction ends. If you won, you will receive an invoice. Please wait for the official invoice email.`,
  },
  {
    question:
      "Can I use the proceeds from items I’ve sold in a previous auction to directly offset the cost of my newly won lots?",
    answer: `Currently our system does not allow directly deducting proceeds from previous sales against newly won lots. Each set of winning bids must be paid in full following our standard payment process. Payments for items you sold are processed separately.`,
  },
  {
    question: "When can I collect unsold coins?",
    answer: `You will receive an email notification with detailed instructions. The waiting period is approximately one month after the auction.`,
  },
  {
    question:
      "Could you please provide the details of the receiving banks in the EU and the UK?",
    answer: `<strong>Bank Details</strong><br>
Company Name: SHENBERG AUCTION LTD (UK)<br>
Company Registration Number: 15959476<br>
Company Legal Address: 14 Anderson Avenue, Chelmsford, England, CM1 2BZ, Essex, UK<br><br>
Currency: EUR<br>
IBAN: CY19 9020 0001 0000 0201 0102 6644<br>
SWIFT Code: CARDCY2L<br><br>
Currency: GBP (£)<br>
Bank Name: Lloyds Bank<br>
IBAN: GB89 LOYD 3054 6623 1432 60<br>
SWIFT Code: LOYDGB2L<br>
Account Number: 23143260<br>
Sort Code: 30-54-66<br><br>
Website: www.shenbergs.com<br>
Email: info@shenbergs.com`,
  },
  {
    question: "Can I pay by PayPal?",
    answer: `We do not accept PayPal. However, we can send a payment link via Stripe for secure and easy payment.`,
  },
  {
    question: "How do I return the coin?",
    answer: `To request a return, please contact us at info@shenbergs.com. Our team will guide you through the return process.`,
  },
  {
    question: "Do I need to provide a reason for returning the coin?",
    answer: `Yes. Before proceeding with the return, we kindly ask that you inform us of the reason for the return to help ensure the process goes smoothly.`,
  },
  {
    question: "Can I return an order if I simply changed my mind?",
    answer: `Please note that we do not accept returns for canceled orders that would result in a refund.`,
  },
  {
    question: "When will I receive my refund?",
    answer: `Once we receive the returned coin and the return is valid according to our policy, we will process the refund promptly.`,
  },
  {
    question: "How do I leave a review for Coinstore?",
    answer: `To leave a review:<br> 1) Visit https://g.page/coinstore-585/review?gm <br>
    2) Click 'Write a Review' <br>
    3) Select your star rating and add comments <br>
    4) Click 'Post' to submit.`,
  },
  {
    question: "How do I sell lots to your auctions?",
    answer: `1) Submit a request with details and photos for quicker evaluation. <br>
    2) If approved, we will send a sales contract to fill out and return. <br>
    3) We can arrange pickup from most countries—provide your address and we’ll organize a courier. <br>
    4) After receiving your items, our team will catalog and prepare them for auction. <br>
Contact: info@shenbergs.com<br>
Phone: +37129787887`,
  },
  {
    question: "Do you accept items from all countries?",
    answer: `Yes. We can arrange pickup from almost any country—just tell us your location and we’ll handle logistics.`,
  },
  {
    question: "How will my items be presented at auction?",
    answer: `Our team will professionally catalog and present your items to ensure they receive maximum visibility and attention.`,
  },
  {
    question: "Do you have partnerships with other auction platforms?",
    answer: `Yes. We work with leading platforms to give your items wide exposure, including Biddr, Numis24, Onebid, Bidspirit, Bidinside, NumisBids, and Sixbid.`,
  },
];

/* Render FAQ into #faqContainer (moved from faq.html) */
(function renderFaq() {
  function createCard(item) {
    const card = document.createElement("div");
    card.className = "faq-card";

    const q = document.createElement("h4");
    q.className = "faq-question";
    q.textContent = item.question;
    q.tabIndex = 0;

    const a = document.createElement("p");
    a.className = "faq-answer";
    a.innerHTML = linkify(item.answer);

    card.appendChild(q);
    card.appendChild(a);

    // Toggle open/close with accordion behavior (close other answers)
    function openCard() {
      // close any other open card
      const other = document.querySelector(".faq-card.open");
      if (other && other !== card) {
        other.classList.remove("open");
        const otherAns = other.querySelector(".faq-answer");
        if (otherAns) otherAns.style.display = "none";
      }

      const isOpen = card.classList.toggle("open");
      if (isOpen) {
        a.style.display = "block";
      } else {
        a.style.display = "none";
      }
    }

    card.addEventListener("click", (e) => {
      // ignore clicks on links inside the answer
      const path = e.composedPath ? e.composedPath() : e.path || [];
      for (const node of path) {
        if (node && node.tagName === "A") return;
      }
      openCard();
    });

    // keyboard accesFsibility: Enter/Space toggles
    q.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openCard();
      }
    });

    return card;
  }

  function render() {
    const container = document.getElementById("faqContainer");
    if (!container) return;
    // Clear any existing children
    container.innerHTML = "";
    window.faqData.forEach((item) => container.appendChild(createCard(item)));
  }

  // Replace plaintext URLs in answers with anchor tags.
  function linkify(text) {
    if (!text) return "";
    // don't double-link if HTML already contains anchors
    // simple heuristic: if there's an <a or href=, assume HTML present
    if (/<a\s|href=/.test(text)) return text;
    const urlRegex = /(https?:\/\/[^\s<]+)/g;
    return text.replace(urlRegex, function (url) {
      return (
        '<a href="' +
        url +
        '" target="_blank" rel="noopener noreferrer">' +
        url +
        "</a>"
      );
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();

/* end of file */
