"use strict";
const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const loginBtn = document.getElementById("btn-submit");

loginBtn.addEventListener("click", function () {
  console.log("login...");
  //tìm tải khoản
  currentUser = userArr.find((acc) => acc.userName === inputUsername.value);

  //validate dữ liệu login
  if (currentUser) {
    if (currentUser.password === inputPassword.value) {
      console.log(currentUser);
      saveToStorage("currentUser", currentUser);
      window.location.href = "../index.html";
    } else {
      alert("password không chính xác");
    }
  } else {
    alert("Tài khoản không tồn tại");
  }
});

// console.log(getFromStorage("currentUser"));
