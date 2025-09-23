document.addEventListener("DOMContentLoaded", function () {
  const createAccountBtn = document.querySelector(".create-account-btn");
  const signupSection = document.getElementById("signupSection");
  const signupForm = document.getElementById("signupForm");
  const signupMessage = document.getElementById("signupMessage");
  const welcomeSection = document.getElementById("welcomeSection");
  const backToWelcome = document.getElementById("backToWelcome");

  // Show signup section and hide welcome section
  createAccountBtn.addEventListener("click", function () {
    signupSection.style.display = "flex";
    if (welcomeSection) welcomeSection.style.display = "none";
  });

  // Handle signup form submission
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!username || !email || !password) {
      signupMessage.textContent = "Please fill in all fields.";
      signupMessage.style.color = "#FFA500";
      return;
    }

    const account = { username, email, password };
    localStorage.setItem("userAccount", JSON.stringify(account));
    signupMessage.textContent = `Account created for user: ${username}`;
    signupMessage.style.color = "#00FF99";
    signupForm.reset();
  });

  // Back button logic
  backToWelcome.addEventListener("click", function () {
    signupSection.style.display = "none";
    signupMessage.textContent = "";
    if (welcomeSection) welcomeSection.style.display = "flex";
  });
});
