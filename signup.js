document.addEventListener("DOMContentLoaded", function () {
  const createAccountBtn = document.querySelector(".create-account-btn");
  const signupSection = document.getElementById("signupSection");
  const signupForm = document.getElementById("signupForm");
  const signupMessage = document.getElementById("signupMessage");
  const welcomeSection = document.getElementById("welcomeSection");
  const backToWelcome = document.getElementById("backToWelcome");

  // Show the signup section as a full-page overlay and hide welcome
  createAccountBtn.addEventListener("click", function () {
    signupSection.style.display = "flex";
    signupSection.style.position = "fixed";
    signupSection.style.top = "0";
    signupSection.style.left = "0";
    signupSection.style.width = "100vw";
    signupSection.style.height = "100vh";
    signupSection.style.background = "rgba(34,34,34,0.98)";
    signupSection.style.zIndex = "9999";
    signupSection.style.justifyContent = "center";
    signupSection.style.alignItems = "center";
    signupSection.style.marginTop = "0";
    document.body.style.overflow = "hidden";
    if (welcomeSection) welcomeSection.style.display = "none";
  });

  // Handle signup form submission
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
      signupMessage.textContent = "Please fill in all fields.";
      signupMessage.style.color = "#FFD700";
      return;
    }

    signupMessage.textContent = "Account created successfully!";
    signupMessage.style.color = "#FFD700";
    signupForm.reset();

    setTimeout(() => {
      signupSection.style.display = "none";
      signupMessage.textContent = "";
      document.body.style.overflow = "";
      signupSection.removeAttribute("style");
    }, 1800);
  });

  // Back button logic
  backToWelcome.addEventListener("click", function () {
    signupSection.style.display = "none";
    signupMessage.textContent = "";
    document.body.style.overflow = "";
    signupSection.removeAttribute("style");
    if (welcomeSection) welcomeSection.style.display = "flex";
  });

  // Optional: Close overlay when clicking outside the form
  signupSection.addEventListener("click", function (e) {
    if (e.target === signupSection) {
      signupSection.style.display = "none";
      signupMessage.textContent = "";
      document.body.style.overflow = "";
      signupSection.removeAttribute("style");
      if (welcomeSection) welcomeSection.style.display = "flex";
    }
  });
});