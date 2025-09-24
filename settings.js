document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".create-account-btn");
  const closeBtn = document.getElementById("closeSettings");
  const frame = document.getElementById("settingsFrame");

  if (openBtn && frame) {
    openBtn.addEventListener("click", () => {
      frame.style.display = "block"; // Show the frame
    });
  }

  if (closeBtn && frame) {
    closeBtn.addEventListener("click", () => {
      frame.style.display = "none"; // Hide the frame
    });
  }
});
