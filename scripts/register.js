"use strict";
const inputFirstname = document.getElementById("input-firstname");
const inputLastname = document.getElementById("input-lastname");
const inputUsername = document.getElementById("input-username");
const inputPassword = document.getElementById("input-password");
const inputPasswordConfirm = document.getElementById("input-password-confirm");

const btnSubmit = document.getElementById("btn-submit");
btnSubmit.addEventListener("click", function () {
  console.log("register...");
  const user = new User(
    inputFirstname.value,
    inputLastname.value,
    inputUsername.value,
    inputPassword.value
  );
  let isValidate = validate(user);
  // thỏa mãn validate => lưu xuông local storage và chuyển tới trang login
  if (isValidate) {
    userArr.push(user);
    saveToStorage(KEY, userArr);
    console.log("save to storage...");
    window.location.href = "../pages/login.html";
  }
});

// validate dữ liệu đăng ký tài khoản
function validate(user) {
  let isValidate = true;
  if (user.firstName.trim().length === 0) {
    alert("first name");
    isValidate = false;
  }
  if (user.lastName.trim().length === 0) {
    alert("lastName");
    isValidate = false;
  }
  if (user.userName.trim().length === 0) {
    alert("userName");
    isValidate = false;
  }
  if (user.password.trim().length === 0) {
    alert("password");
    isValidate = false;
  }
  if (user.password.length < 8) {
    alert("Mật khẩu không hợp lệ");
    isValidate = false;
  }

  if (user.password !== inputPasswordConfirm.value) {
    alert("Mật khẩu không trùng khớp");
    isValidate = false;
  }
  userArr.forEach((ele) => {
    if (user.userName === ele.userName) {
      alert("Tên người dùng đã tồn tại");
      isValidate = false;
    }
  });

  return isValidate;
}
