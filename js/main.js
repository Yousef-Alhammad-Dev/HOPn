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
