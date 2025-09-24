// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBxe2zBAOSa0FBbCJk1mozdbfZGqApHc8s",
  authDomain: "linkup-3027c.firebaseapp.com",
  projectId: "linkup-3027c",
  storageBucket: "linkup-3027c.appspot.com",
  messagingSenderId: "274311381623",
  appId: "1:274311381623:web:8b15fd5f5a2b2e6bc9bc72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOM elements
window.addEventListener("DOMContentLoaded", () => {
  const createAccountBtn = document.querySelector(".create-account-btn");
  const signupSection = document.getElementById("signupSection");
  const signupForm = document.getElementById("signupForm");
  const signupMessage = document.getElementById("signupMessage");
  const welcomeSection = document.getElementById("welcomeSection");
  const backToWelcome = document.getElementById("backToWelcome");

  // Show signup section
  if (createAccountBtn && signupSection && welcomeSection) {
    createAccountBtn.addEventListener("click", () => {
      signupSection.style.display = "flex";
      welcomeSection.style.display = "none";
    });
  }

  // Handle signup
  if (signupForm && signupMessage) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      if (!username || !email || !password) {
        signupMessage.textContent = "Please fill in all fields.";
        signupMessage.style.color = "#FFA500";
        return;
      }

      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          signupMessage.textContent = `Account created for user: ${username}`;
          signupMessage.style.color = "#00FF99";
          signupForm.reset();
          window.location.href = "builder.html";
        })
        .catch((error) => {
          signupMessage.textContent = error.message;
          signupMessage.style.color = "#FFA500";
        });
    });
  }

  // Back button logic
  if (backToWelcome && signupSection && welcomeSection && signupMessage) {
    backToWelcome.addEventListener("click", () => {
      signupSection.style.display = "none";
      signupMessage.textContent = "";
      welcomeSection.style.display = "flex";
    });
  }

  // Redirect logged-in users only if on homepage
  onAuthStateChanged(auth, (user) => {
    const isOnHomePage = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";
    if (user && isOnHomePage) {
      window.location.href = "builder.html";
    }
  });
});
