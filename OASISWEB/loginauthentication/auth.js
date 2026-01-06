async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

async function register() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (!username || !password) {
    alert("Fill all fields");
    return;
  }

  const hashedPassword = await hashPassword(password);

  localStorage.setItem("user", username);
  localStorage.setItem("pass", hashedPassword);

  alert("Registered successfully ✅");
}

async function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const storedUser = localStorage.getItem("user");
  const storedPass = localStorage.getItem("pass");

  const hashedPassword = await hashPassword(password);

  if (username === storedUser && hashedPassword === storedPass) {
    sessionStorage.setItem("authenticated", true);
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials ❌");
  }
}
