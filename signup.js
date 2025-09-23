document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".create-account-btn");
  const signupSection = document.getElementById("signupSection");

  if (openBtn && signupSection) {
    openBtn.addEventListener("click", () => {
      signupSection.style.display = "flex";
    });
  } else {
    console.error("Element not found:", {
      openBtn,
      signupSection
    });
  }

  const form = document.getElementById("signupForm");
  const message = document.getElementById("signupMessage");

  if (form && message) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      if (!email || !password) {
        message.textContent = "Please fill in both fields.";
        message.style.color = "#FFA500";
        return;
      }

      message.textContent = `Account created for ${email}!`;
      message.style.color = "#00FF99";
      form.reset();
    });
  }
});
