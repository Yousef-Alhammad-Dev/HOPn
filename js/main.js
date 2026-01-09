const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

// ====== Create overlay (for mobile menu close on outside click)
const overlay = document.createElement("div");
overlay.className = "nav-overlay";
document.body.appendChild(overlay);

function openMenu() {
  navLinks.classList.add("active");
  overlay.classList.add("active");
  menuToggle.setAttribute("aria-expanded", "true");
}

function closeMenu() {
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.contains("active");
  isOpen ? closeMenu() : openMenu();
});

overlay.addEventListener("click", closeMenu);

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// ====== Scroll reveal animations
const revealTargets = [
  ".hero-left",
  ".hero-right",
  ".section-title",
  ".section-subtitle",
  ".metrics-strip",
  ".partners-head",
  ".logo-marquee",
  ".feature-card",
  ".step-card",
  ".trust-card",
  ".service-card",
  ".case-card",
  ".testimonial-card",
  ".about-card",
  ".faq-item",
  ".cta .container",
  ".footer .container",
];

const elements = [];
revealTargets.forEach((sel) => {
  document.querySelectorAll(sel).forEach((el) => elements.push(el));
});

elements.forEach((el, i) => {
  el.classList.add("reveal");
  const mod = (i % 4) + 1;
  el.classList.add(`delay-${mod}`);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

elements.forEach((el) => observer.observe(el));

// ====== FAQ toggle
document.querySelectorAll(".faq-q").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".faq-item");
    item.classList.toggle("active");
  });
});

// ====== Contact form -> mailto with content
const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const ok =
      name.length >= 2 &&
      email.includes("@") &&
      email.includes(".") &&
      message.length >= 10;

    if (!ok) {
      formNote.textContent =
        "Please fill all fields correctly (message at least 10 characters).";
      return;
    }

    const subject = encodeURIComponent(`HOPn Inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
    );

    const to = "yousefalhammad2@gmail.com";
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    form.reset();
    formNote.textContent = "Opening your email client…";
  });
}

function loadContent() {
  const heroTitle = localStorage.getItem("heroTitle");
  const heroDesc = localStorage.getItem("heroDesc");

  if (heroTitle) {
    document.getElementById("heroTitle").innerHTML = heroTitle;
  }

  if (heroDesc) {
    document.getElementById("heroDesc").textContent = heroDesc;
  }

  // Panel
  if (localStorage.getItem("panelTitle"))
    document.getElementById("panelTitle").textContent =
      localStorage.getItem("panelTitle");

  if (localStorage.getItem("panelSubtitle"))
    document.getElementById("panelSubtitle").textContent =
      localStorage.getItem("panelSubtitle");

  // Metrics

  function setMetric(key, id, suffix = "") {
    const value = localStorage.getItem(key);
    const el = document.getElementById(id);
    if (value && el) {
      el.textContent = value + suffix;
    }
  }

  // Metrics
  setMetric("metricPartnersNum", "metricPartnersNum", "+");
  setMetric("metricPartnersLabel", "metricPartnersLabel");

  setMetric("metricProjectsNum", "metricProjectsNum", "+");
  setMetric("metricProjectsLabel", "metricProjectsLabel");

  setMetric("metricHoursNum", "metricHoursNum", "+");
  setMetric("metricHoursLabel", "metricHoursLabel");

  setMetric("metricFocusNum", "metricFocusNum", "+");
  setMetric("metricFocusLabel", "metricFocusLabel");

  // ================= MINI CARDS =================
  function setMiniCard(titleKey, textKey, titleId, textId) {
    const title = localStorage.getItem(titleKey);
    const text = localStorage.getItem(textKey);

    if (title && document.getElementById(titleId)) {
      document.getElementById(titleId).textContent = title;
    }

    if (text && document.getElementById(textId)) {
      document.getElementById(textId).textContent = text;
    }
  }

  // Card 1
  setMiniCard("mini1Title", "mini1Text", "mini1Title", "mini1Text");

  // Card 2
  setMiniCard("mini2Title", "mini2Text", "mini2Title", "mini2Text");

  // Card 3
  setMiniCard("mini3Title", "mini3Text", "mini3Title", "mini3Text");

  // Card 4
  setMiniCard("mini4Title", "mini4Text", "mini4Title", "mini4Text");

  // ===== PARTNERS =====
  if (localStorage.getItem("partnersKicker")) {
    document.getElementById("partnersKicker").textContent =
      localStorage.getItem("partnersKicker");
  }

  for (let i = 1; i <= 8; i++) {
    const value = localStorage.getItem(`partner${i}`);
    if (value) {
      const el = document.getElementById(`partner${i}`);
      const clone = document.getElementById(`partner${i}_clone`);
      if (el) el.textContent = value;
      if (clone) clone.textContent = value;
    }
  }

  // ================= WHAT WE DO =================

  // Section title & subtitle
  if (localStorage.getItem("whatTitle")) {
    document.getElementById("whatTitle").textContent =
      localStorage.getItem("whatTitle");
  }

  if (localStorage.getItem("whatSubtitle")) {
    document.getElementById("whatSubtitle").textContent =
      localStorage.getItem("whatSubtitle");
  }

  // Helper for feature cards
  function setFeature(titleKey, textKey, titleId, textId) {
    const title = localStorage.getItem(titleKey);
    const text = localStorage.getItem(textKey);

    if (title && document.getElementById(titleId)) {
      document.getElementById(titleId).textContent = title;
    }

    if (text && document.getElementById(textId)) {
      document.getElementById(textId).textContent = text;
    }
  }

  // Feature cards
  setFeature("feature1Title", "feature1Text", "feature1Title", "feature1Text");
  setFeature("feature2Title", "feature2Text", "feature2Title", "feature2Text");
  setFeature("feature3Title", "feature3Text", "feature3Title", "feature3Text");
  setFeature("feature4Title", "feature4Text", "feature4Title", "feature4Text");

  // ================= APPROACH =================
  function setApproach(key, elementId) {
    const value = localStorage.getItem(key);
    const el = document.getElementById(elementId);
    if (value && el) {
      el.textContent = value;
    }
  }

  // Section title & subtitle
  setApproach("approachTitle", "approachTitle");
  setApproach("approachSubtitle", "approachSubtitle");

  // Step 1
  setApproach("step1Title", "step1Title");
  setApproach("step1Text", "step1Text");

  // Step 2
  setApproach("step2Title", "step2Title");
  setApproach("step2Text", "step2Text");

  // Step 3
  setApproach("step3Title", "step3Title");
  setApproach("step3Text", "step3Text");

  // Step 4
  setApproach("step4Title", "step4Title");
  setApproach("step4Text", "step4Text");

  // ================== TRUST ==================

  // Section title
  if (localStorage.getItem("trustTitle")) {
    const el = document.getElementById("trustTitle");
    if (el) el.textContent = localStorage.getItem("trustTitle");
  }

  // -------- Card 1 --------
  if (localStorage.getItem("trustCard1Title")) {
    const el = document.getElementById("trustCard1Title");
    if (el) el.textContent = localStorage.getItem("trustCard1Title");
  }

  for (let i = 1; i <= 5; i++) {
    const value = localStorage.getItem(`trustCard1Item${i}`);
    const el = document.getElementById(`trustCard1Item${i}`);
    if (value && el) el.textContent = value;
  }

  // -------- Card 2 --------
  if (localStorage.getItem("trustCard2Title")) {
    const el = document.getElementById("trustCard2Title");
    if (el) el.textContent = localStorage.getItem("trustCard2Title");
  }

  for (let i = 1; i <= 4; i++) {
    const value = localStorage.getItem(`trustCard2Item${i}`);
    const el = document.getElementById(`trustCard2Item${i}`);
    if (value && el) el.textContent = value;
  }

  // -------- Card 3 --------
  if (localStorage.getItem("trustCard3Title")) {
    const el = document.getElementById("trustCard3Title");
    if (el) el.textContent = localStorage.getItem("trustCard3Title");
  }

  for (let i = 1; i <= 4; i++) {
    const value = localStorage.getItem(`trustCard3Item${i}`);
    const el = document.getElementById(`trustCard3Item${i}`);
    if (value && el) el.textContent = value;
  }

  // ===== SERVICES =====

  // Section title & subtitle
  const servicesTitle = localStorage.getItem("servicesTitle");
  const servicesSubtitle = localStorage.getItem("servicesSubtitle");

  if (servicesTitle && document.getElementById("servicesTitle")) {
    document.getElementById("servicesTitle").textContent = servicesTitle;
  }

  if (servicesSubtitle && document.getElementById("servicesSubtitle")) {
    document.getElementById("servicesSubtitle").textContent = servicesSubtitle;
  }

  // Service cards
  for (let i = 1; i <= 5; i++) {
    const title = localStorage.getItem(`service${i}Title`);
    const text = localStorage.getItem(`service${i}Text`);

    const titleEl = document.getElementById(`service${i}Title`);
    const textEl = document.getElementById(`service${i}Text`);

    if (title && titleEl) {
      titleEl.textContent = title;
    }

    if (text && textEl) {
      textEl.textContent = text;
    }
  }

  // ===== CASE STUDIES =====
  if (localStorage.getItem("casesTitle")) {
    document.getElementById("casesTitle").textContent =
      localStorage.getItem("casesTitle");
  }

  if (localStorage.getItem("casesSubtitle")) {
    document.getElementById("casesSubtitle").textContent =
      localStorage.getItem("casesSubtitle");
  }

  // Case 1
  if (localStorage.getItem("case1Tag"))
    document.getElementById("case1Tag").textContent =
      localStorage.getItem("case1Tag");

  if (localStorage.getItem("case1Title"))
    document.getElementById("case1Title").textContent =
      localStorage.getItem("case1Title");

  if (localStorage.getItem("case1Text"))
    document.getElementById("case1Text").textContent =
      localStorage.getItem("case1Text");

  // Case 2
  if (localStorage.getItem("case2Tag"))
    document.getElementById("cases2Tag").textContent =
      localStorage.getItem("case2Tag");

  if (localStorage.getItem("case2Title"))
    document.getElementById("case2Title").textContent =
      localStorage.getItem("case2Title");

  if (localStorage.getItem("case2Text"))
    document.getElementById("case2Text").textContent =
      localStorage.getItem("case2Text");

  // Case 3
  if (localStorage.getItem("case3Tag"))
    document.getElementById("case3Tag").textContent =
      localStorage.getItem("case3Tag");

  if (localStorage.getItem("case3Title"))
    document.getElementById("case3Title").textContent =
      localStorage.getItem("case3Title");

  if (localStorage.getItem("case3Text"))
    document.getElementById("case3Text").textContent =
      localStorage.getItem("case3Text");

  // ===== TESTIMONIALS =====

  // Section title
  if (localStorage.getItem("testimonialsTitle")) {
    document.getElementById("testimonialsTitle").textContent =
      localStorage.getItem("testimonialsTitle");
  }

  // Testimonials content
  for (let i = 1; i <= 3; i++) {
    const quote = localStorage.getItem(`testimonial${i}Quote`);
    const name = localStorage.getItem(`testimonial${i}Name`);
    const meta = localStorage.getItem(`testimonial${i}Meta`);

    if (quote) {
      document.getElementById(
        `testimonial${i}Quote`
      ).textContent = `“${quote}”`;
    }

    if (name) {
      document.getElementById(`testimonial${i}Name`).textContent = name;
    }

    if (meta) {
      document.getElementById(`testimonial${i}Meta`).textContent = meta;
    }
  }

  // ===== ABOUT =====
  if (localStorage.getItem("aboutTitle")) {
    document.getElementById("aboutTitle").textContent =
      localStorage.getItem("aboutTitle");
  }

  if (localStorage.getItem("aboutSubtitle")) {
    document.getElementById("aboutSubtitle").textContent =
      localStorage.getItem("aboutSubtitle");
  }

  for (let i = 1; i <= 3; i++) {
    const title = localStorage.getItem(`aboutCard${i}Title`);
    const text = localStorage.getItem(`aboutCard${i}Text`);

    if (title) {
      document.getElementById(`aboutCard${i}Title`).textContent = title;
    }

    if (text) {
      document.getElementById(`aboutCard${i}Text`).textContent = text;
    }
  }

  // ===== FAQ =====
  if (localStorage.getItem("faqTitle")) {
    document.getElementById("faqTitle").textContent =
      localStorage.getItem("faqTitle");
  }

  for (let i = 1; i <= 3; i++) {
    const q = localStorage.getItem(`faq${i}Question`);
    const a = localStorage.getItem(`faq${i}Answer`);

    if (q) {
      document.getElementById(`faq${i}Question`).childNodes[0].nodeValue =
        q + " ";
    }

    if (a) {
      document.getElementById(`faq${i}Answer`).textContent = a;
    }
  }
}

document.addEventListener("DOMContentLoaded", loadContent);
