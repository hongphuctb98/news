"use strict";

const loginModal = document.getElementById("login-modal");
const mainContent = document.getElementById("main-content");
const btnLogout = document.getElementById("btn-logout");

if (currentUser.length !== 0) {
  loginModal.querySelector(".row").style.display = "none";
  loginModal.querySelector(
    "p"
  ).textContent = `Welcome ${currentUser.firstName}`;
} else {
  mainContent.style.display = "none";
}

btnLogout.addEventListener("click", () => {
  console.log("logout...");
  localStorage.removeItem("currentUser");
  // window.location.href = "../pages/login.html";

  loginModal.querySelector(".row").style.display = "flex";
  mainContent.style.display = "none";
  loginModal.querySelector("p").textContent = `Please Login or Register`;
});
