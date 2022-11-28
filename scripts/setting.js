"use strict";

const inputPageSize = document.getElementById("input-page-size");
const inputCategory = document.getElementById("input-category");
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", () => {
  console.log("submit start...");
  currentUser.pagesize = inputPageSize.value;
  currentUser.category = inputCategory.value;
  if (validate(currentUser)) saveToStorage("currentUser", currentUser);
});

function validate(user) {
  if (!user.pagesize) {
    alert("Hãy nhập page size");
    return false;
  }
  if (user.pagesize > 100) {
    alert("Page size maximum 100");
    return false;
  }
  return true;
}
