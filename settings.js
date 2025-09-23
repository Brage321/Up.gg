document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".create-account-btn");
  const closeBtn = document.getElementById("closeSettings");
  const frame = document.getElementById("settingsFrame");

  openBtn.addEventListener("click", () => {
    frame.style.display = "block";
  });

  closeBtn.addEventListener("click", () => {
    frame.style.display = "none";
  });
});
