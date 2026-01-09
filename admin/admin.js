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

  // ===== WHAT WE DO =====
  localStorage.setItem(
    "whatTitle",
    document.getElementById("whatTitleInput").value
  );

  localStorage.setItem(
    "whatSubtitle",
    document.getElementById("whatSubtitleInput").value
  );

  // Feature 1
  localStorage.setItem(
    "feature1Title",
    document.getElementById("feature1TitleInput").value
  );
  localStorage.setItem(
    "feature1Text",
    document.getElementById("feature1TextInput").value
  );

  // Feature 2
  localStorage.setItem(
    "feature2Title",
    document.getElementById("feature2TitleInput").value
  );
  localStorage.setItem(
    "feature2Text",
    document.getElementById("feature2TextInput").value
  );

  // Feature 3
  localStorage.setItem(
    "feature3Title",
    document.getElementById("feature3TitleInput").value
  );
  localStorage.setItem(
    "feature3Text",
    document.getElementById("feature3TextInput").value
  );

  // ================= APPROACH =================
  localStorage.setItem(
    "approachTitle",
    document.getElementById("approachTitleInput").value
  );

  localStorage.setItem(
    "approachSubtitle",
    document.getElementById("approachSubtitleInput").value
  );

  // Step 1
  localStorage.setItem(
    "step1Title",
    document.getElementById("step1TitleInput").value
  );
  localStorage.setItem(
    "step1Text",
    document.getElementById("step1TextInput").value
  );

  // Step 2
  localStorage.setItem(
    "step2Title",
    document.getElementById("step2TitleInput").value
  );
  localStorage.setItem(
    "step2Text",
    document.getElementById("step2TextInput").value
  );

  // Step 3
  localStorage.setItem(
    "step3Title",
    document.getElementById("step3TitleInput").value
  );
  localStorage.setItem(
    "step3Text",
    document.getElementById("step3TextInput").value
  );

  // Step 4
  localStorage.setItem(
    "step4Title",
    document.getElementById("step4TitleInput").value
  );
  localStorage.setItem(
    "step4Text",
    document.getElementById("step4TextInput").value
  );

  // ===== TRUST =====

  // Card 1
  localStorage.setItem(
    "trustCard1Title",
    document.getElementById("trustCard1TitleInput").value
  );
  for (let i = 1; i <= 5; i++) {
    localStorage.setItem(
      `trustCard1Item${i}`,
      document.getElementById(`trustCard1Item${i}Input`).value
    );
  }

  // Card 2
  localStorage.setItem(
    "trustCard2Title",
    document.getElementById("trustCard2TitleInput").value
  );
  for (let i = 1; i <= 4; i++) {
    localStorage.setItem(
      `trustCard2Item${i}`,
      document.getElementById(`trustCard2Item${i}Input`).value
    );
  }

  // Card 3
  localStorage.setItem(
    "trustCard3Title",
    document.getElementById("trustCard3TitleInput").value
  );
  for (let i = 1; i <= 4; i++) {
    localStorage.setItem(
      `trustCard3Item${i}`,
      document.getElementById(`trustCard3Item${i}Input`).value
    );
  }

  // ===== SERVICES =====

  // Section title & subtitle
  localStorage.setItem(
    "servicesTitle",
    document.getElementById("servicesTitleInput").value
  );

  localStorage.setItem(
    "servicesSubtitle",
    document.getElementById("servicesSubtitleInput").value
  );

  // Service cards
  for (let i = 1; i <= 5; i++) {
    localStorage.setItem(
      `service${i}Title`,
      document.getElementById(`service${i}TitleInput`).value
    );

    localStorage.setItem(
      `service${i}Text`,
      document.getElementById(`service${i}TextInput`).value
    );
  }

  // ===== CASE STUDIES =====
  localStorage.setItem(
    "casesTitle",
    document.getElementById("casesTitleInput").value
  );
  localStorage.setItem(
    "casesSubtitle",
    document.getElementById("casesSubtitleInput").value
  );

  // Case 1
  localStorage.setItem(
    "case1Tag",
    document.getElementById("case1TagInput").value
  );
  localStorage.setItem(
    "case1Title",
    document.getElementById("case1TitleInput").value
  );
  localStorage.setItem(
    "case1Text",
    document.getElementById("case1TextInput").value
  );

  // Case 2
  localStorage.setItem(
    "case2Tag",
    document.getElementById("case2TagInput").value
  );
  localStorage.setItem(
    "case2Title",
    document.getElementById("case2TitleInput").value
  );
  localStorage.setItem(
    "case2Text",
    document.getElementById("case2TextInput").value
  );

  // Case 3
  localStorage.setItem(
    "case3Tag",
    document.getElementById("case3TagInput").value
  );
  localStorage.setItem(
    "case3Title",
    document.getElementById("case3TitleInput").value
  );
  localStorage.setItem(
    "case3Text",
    document.getElementById("case3TextInput").value
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

// ===== WHAT WE DO =====
document.getElementById("whatTitleInput").value =
  localStorage.getItem("whatTitle") || "";

document.getElementById("whatSubtitleInput").value =
  localStorage.getItem("whatSubtitle") || "";

// Feature 1
document.getElementById("feature1TitleInput").value =
  localStorage.getItem("feature1Title") || "";
document.getElementById("feature1TextInput").value =
  localStorage.getItem("feature1Text") || "";

// Feature 2
document.getElementById("feature2TitleInput").value =
  localStorage.getItem("feature2Title") || "";
document.getElementById("feature2TextInput").value =
  localStorage.getItem("feature2Text") || "";

// Feature 3
document.getElementById("feature3TitleInput").value =
  localStorage.getItem("feature3Title") || "";
document.getElementById("feature3TextInput").value =
  localStorage.getItem("feature3Text") || "";

// ================= APPROACH =================
document.getElementById("approachTitleInput").value =
  localStorage.getItem("approachTitle") || "";

document.getElementById("approachSubtitleInput").value =
  localStorage.getItem("approachSubtitle") || "";

// Step 1
document.getElementById("step1TitleInput").value =
  localStorage.getItem("step1Title") || "";
document.getElementById("step1TextInput").value =
  localStorage.getItem("step1Text") || "";

// Step 2
document.getElementById("step2TitleInput").value =
  localStorage.getItem("step2Title") || "";
document.getElementById("step2TextInput").value =
  localStorage.getItem("step2Text") || "";

// Step 3
document.getElementById("step3TitleInput").value =
  localStorage.getItem("step3Title") || "";
document.getElementById("step3TextInput").value =
  localStorage.getItem("step3Text") || "";

// Step 4
document.getElementById("step4TitleInput").value =
  localStorage.getItem("step4Title") || "";
document.getElementById("step4TextInput").value =
  localStorage.getItem("step4Text") || "";

// ===== TRUST =====

// Card 1
document.getElementById("trustCard1TitleInput").value =
  localStorage.getItem("trustCard1Title") || "";
for (let i = 1; i <= 5; i++) {
  document.getElementById(`trustCard1Item${i}Input`).value =
    localStorage.getItem(`trustCard1Item${i}`) || "";
}

// Card 2
document.getElementById("trustCard2TitleInput").value =
  localStorage.getItem("trustCard2Title") || "";
for (let i = 1; i <= 4; i++) {
  document.getElementById(`trustCard2Item${i}Input`).value =
    localStorage.getItem(`trustCard2Item${i}`) || "";
}

// Card 3
document.getElementById("trustCard3TitleInput").value =
  localStorage.getItem("trustCard3Title") || "";
for (let i = 1; i <= 4; i++) {
  document.getElementById(`trustCard3Item${i}Input`).value =
    localStorage.getItem(`trustCard3Item${i}`) || "";

  // ===== SERVICES =====

  // Section title & subtitle
  document.getElementById("servicesTitleInput").value =
    localStorage.getItem("servicesTitle") || "";

  document.getElementById("servicesSubtitleInput").value =
    localStorage.getItem("servicesSubtitle") || "";

  // Service cards
  for (let i = 1; i <= 5; i++) {
    document.getElementById(`service${i}TitleInput`).value =
      localStorage.getItem(`service${i}Title`) || "";

    document.getElementById(`service${i}TextInput`).value =
      localStorage.getItem(`service${i}Text`) || "";
  }

  // ===== CASE STUDIES =====
  document.getElementById("casesTitleInput").value =
    localStorage.getItem("casesTitle") || "";

  document.getElementById("casesSubtitleInput").value =
    localStorage.getItem("casesSubtitle") || "";

  // Case 1
  document.getElementById("case1TagInput").value =
    localStorage.getItem("case1Tag") || "";
  document.getElementById("case1TitleInput").value =
    localStorage.getItem("case1Title") || "";
  document.getElementById("case1TextInput").value =
    localStorage.getItem("case1Text") || "";

  // Case 2
  document.getElementById("case2TagInput").value =
    localStorage.getItem("case2Tag") || "";
  document.getElementById("case2TitleInput").value =
    localStorage.getItem("case2Title") || "";
  document.getElementById("case2TextInput").value =
    localStorage.getItem("case2Text") || "";

  // Case 3
  document.getElementById("case3TagInput").value =
    localStorage.getItem("case3Tag") || "";
  document.getElementById("case3TitleInput").value =
    localStorage.getItem("case3Title") || "";
  document.getElementById("case3TextInput").value =
    localStorage.getItem("case3Text") || "";
}

// Auto login
if (localStorage.getItem("adminLogged") === "true") {
  showDashboard();
}
