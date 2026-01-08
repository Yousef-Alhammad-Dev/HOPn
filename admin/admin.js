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
}

// Auto login
if (localStorage.getItem("adminLogged") === "true") {
  showDashboard();
}
