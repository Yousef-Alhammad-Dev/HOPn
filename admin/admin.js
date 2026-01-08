const ADMIN_PASSWORD = "1234"; // password

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

  loadMessages();
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
}

function loadMessages() {
  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  document.getElementById("msgCount").textContent = messages.length;

  const list = document.getElementById("messagesList");
  list.innerHTML = "";

  messages.forEach((m) => {
    const div = document.createElement("div");
    div.className = "message";
    div.innerHTML = `
      <strong>${m.name}</strong> <small>${m.email}</small>
      <p>${m.message}</p>
    `;
    list.appendChild(div);
  });
}

/* Auto login */
if (localStorage.getItem("adminLogged") === "true") {
  showDashboard();
}
