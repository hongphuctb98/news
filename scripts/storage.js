"use strict";

const KEY = "USER_ARRAY";
const loginKey = "currentUser";
const todoKey = "todoList";
// danh sahcs tài khoản đã đăng ký
let userArr = getFromStorage(KEY).map((user) => pagesUser(user));

//tài khoản người dùng đang đang nhập
let currentUser = getFromStorage("currentUser");

// todo list array
let todoArr = getFromStorage(todoKey).map((todo) => pagesTask(todo));

// lưu vào Storage
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
// xuất ra Storage->js
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function pagesUser(userData) {
  const user = new User(
    userData.firstName,
    userData.lastName,
    userData.userName,
    userData.password,
    userData.pagesize,
    userData.category
  );
  return user;
}

function pagesTask(taskData) {
  const task = new Task(taskData.task, taskData.owner, taskData.isDone);
  return task;
}

// console.log(userArr);
