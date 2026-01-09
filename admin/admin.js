const ADMIN_PASSWORD = "1234";

// Login
function login() {
  const pass = document.getElementById("password").value;
  const error = document.getElementById("loginError");

  if (pass === ADMIN_PASSWORD) {
    localStorage.setItem("adminLogged", "true");
    localStorage.setItem("lastLogin", new Date().toLocaleString());
    showDashboard();
  } else {
    error.textContent = "Wrong password";
  }
}

function showDashboard() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");

  document.getElementById("lastLogin").textContent =
    localStorage.getItem("lastLogin") || "-";
}

function logout() {
  localStorage.removeItem("adminLogged");
  location.reload();
}

function showSection(id) {
  document
    .querySelectorAll(".section")
    .forEach((s) => s.classList.add("hidden"));

  document.getElementById(id).classList.remove("hidden");

  if (id === "content") loadContentEditor();
}

// ===== Content Editor =====
function saveContent() {
  // ===== HERO =====
  const heroTitle = document.getElementById("heroTitleInput").value;
  const heroDesc = document.getElementById("heroDescInput").value;

  localStorage.setItem("heroTitle", heroTitle);
  localStorage.setItem("heroDesc", heroDesc);

  // ===== METRICS =====
  localStorage.setItem(
    "metricPartnersNum",
    document.getElementById("metricPartnersNumInput").value
  );
  localStorage.setItem(
    "metricPartnersLabel",
    document.getElementById("metricPartnersLabelInput").value
  );

  localStorage.setItem(
    "metricProjectsNum",
    document.getElementById("metricProjectsNumInput").value
  );
  localStorage.setItem(
    "metricProjectsLabel",
    document.getElementById("metricProjectsLabelInput").value
  );

  localStorage.setItem(
    "metricHoursNum",
    document.getElementById("metricHoursNumInput").value
  );
  localStorage.setItem(
    "metricHoursLabel",
    document.getElementById("metricHoursLabelInput").value
  );

  localStorage.setItem(
    "metricFocusNum",
    document.getElementById("metricFocusNumInput").value
  );
  localStorage.setItem(
    "metricFocusLabel",
    document.getElementById("metricFocusLabelInput").value
  );

  // ===== MINI CARDS =====

  // Card 1
  localStorage.setItem(
    "mini1Title",
    document.getElementById("mini1TitleInput").value
  );
  localStorage.setItem(
    "mini1Text",
    document.getElementById("mini1TextInput").value
  );

  // Card 2
  localStorage.setItem(
    "mini2Title",
    document.getElementById("mini2TitleInput").value
  );
  localStorage.setItem(
    "mini2Text",
    document.getElementById("mini2TextInput").value
  );

  // Card 3
  localStorage.setItem(
    "mini3Title",
    document.getElementById("mini3TitleInput").value
  );
  localStorage.setItem(
    "mini3Text",
    document.getElementById("mini3TextInput").value
  );

  // Card 4
  localStorage.setItem(
    "mini4Title",
    document.getElementById("mini4TitleInput").value
  );
  localStorage.setItem(
    "mini4Text",
    document.getElementById("mini4TextInput").value
  );

  // ===== PARTNERS =====
  localStorage.setItem(
    "partnersKicker",
    document.getElementById("partnersKickerInput").value
  );

  for (let i = 1; i <= 8; i++) {
    localStorage.setItem(
      `partner${i}`,
      document.getElementById(`partner${i}Input`).value
    );
  }

  alert("✅ Content saved successfully");
}

function loadContentEditor() {
  // ===== HERO =====
  document.getElementById("heroTitleInput").value =
    localStorage.getItem("heroTitle") || "";

  document.getElementById("heroDescInput").value =
    localStorage.getItem("heroDesc") || "";

  // ===== METRICS =====
  document.getElementById("metricPartnersNumInput").value =
    localStorage.getItem("metricPartnersNum") || "";

  document.getElementById("metricPartnersLabelInput").value =
    localStorage.getItem("metricPartnersLabel") || "";

  document.getElementById("metricProjectsNumInput").value =
    localStorage.getItem("metricProjectsNum") || "";

  document.getElementById("metricProjectsLabelInput").value =
    localStorage.getItem("metricProjectsLabel") || "";

  document.getElementById("metricHoursNumInput").value =
    localStorage.getItem("metricHoursNum") || "";

  document.getElementById("metricHoursLabelInput").value =
    localStorage.getItem("metricHoursLabel") || "";

  document.getElementById("metricFocusNumInput").value =
    localStorage.getItem("metricFocusNum") || "";

  document.getElementById("metricFocusLabelInput").value =
    localStorage.getItem("metricFocusLabel") || "";

  // ===== MINI CARDS =====
  document.getElementById("mini1TitleInput").value =
    localStorage.getItem("mini1Title") || "";
  document.getElementById("mini1TextInput").value =
    localStorage.getItem("mini1Text") || "";

  document.getElementById("mini2TitleInput").value =
    localStorage.getItem("mini2Title") || "";
  document.getElementById("mini2TextInput").value =
    localStorage.getItem("mini2Text") || "";

  document.getElementById("mini3TitleInput").value =
    localStorage.getItem("mini3Title") || "";
  document.getElementById("mini3TextInput").value =
    localStorage.getItem("mini3Text") || "";

  document.getElementById("mini4TitleInput").value =
    localStorage.getItem("mini4Title") || "";
  document.getElementById("mini4TextInput").value =
    localStorage.getItem("mini4Text") || "";
}

// ===== PARTNERS =====
document.getElementById("partnersKickerInput").value =
  localStorage.getItem("partnersKicker") || "";

for (let i = 1; i <= 8; i++) {
  document.getElementById(`partner${i}Input`).value =
    localStorage.getItem(`partner${i}`) || "";
}

// Auto login
if (localStorage.getItem("adminLogged") === "true") {
  showDashboard();
}
