"use strict";

const btnAdd = document.getElementById("btn-add");
const conTent = document.querySelector("#content h2");
const inputTask = document.getElementById("input-task");
const todoList = document.getElementById("todo-list");
const closeBtn = document.getElementsByClassName("close");
// Todo list title
conTent.textContent = `${currentUser.firstName} Todo List`;

renderTask(todoArr);

//add event
btnAdd.addEventListener("click", function () {
  // action();

  //nếu có tk đang login thì thêm task, nếu không chuyển tới trang login
  if (currentUser.length !== 0) {
    const todo = new Task(inputTask.value, currentUser.userName, false);

    let isValidateTodo = validateTodo(todo);
    //lưu todo vào storage
    if (isValidateTodo) {
      todoArr.push(todo);
      saveToStorage(todoKey, todoArr);
      renderTask(todoArr);
      inputTask.value = "";
    }
  } else {
    window.location.href = "../pages/login.html";
  }
});

//kiểm tra todo có tồn tại trong todoArr hay chưa
function validateTodo(todo) {
  let check = true;
  todoArr.forEach((tdItem) => {
    if (todo.task === tdItem.task && todo.owner === tdItem.owner) {
      alert("todo đã tồn tại");
      check = !check;
    }
    if (!todo.task) {
      check = !check;
    }
  });
  return check;
}

//render các task ra bảng
function renderTask(todoArr) {
  todoList.innerHTML = "";
  todoArr.forEach((tdItem) => {
    if (currentUser.userName === tdItem.owner)
      todoList.innerHTML += `<li class=${tdItem.isDone ? "checked" : ""} >${
        tdItem.task
      }<span class="close">×</span></li>`;
  });
  //check and delete event
  checkTask();
  delecteTask();
}

//thêm class "checked"
function checkTask() {
  // todoList.addEventListener("click", (event) => {
  //   event.target.classList.toggle("checked");
  //   const todoName = event.target.firstChild.nodeValue;
  //   todoArr.forEach((tdItem) => {
  //     if (currentUser.userName === tdItem.owner && tdItem.task === todoName)
  //       tdItem.isDone = !tdItem.isDone;
  //   });
  //   saveToStorage(todoKey, todoArr);
  //   console.log(event.target);
  // });
  todoList.querySelectorAll("li").forEach((item, index) => {
    item.addEventListener("click", () => {
      const todoName = todoList.children[index].firstChild.textContent;
      // const todoName = todoList.children[index].textContent.slice(0, -1);

      todoArr.forEach((tdItem) => {
        if (currentUser.userName === tdItem.owner && tdItem.task === todoName)
          tdItem.isDone = !tdItem.isDone;
      });
      saveToStorage(todoKey, todoArr);
      renderTask(todoArr);
    });
  });
}

//xóa task
function delecteTask() {
  todoList.querySelectorAll(".close").forEach((close, index) => {
    close.addEventListener("click", (e) => {
      e.stopPropagation();
      //tìm vị trí close => tên todo cần xóa
      const todoName = todoList.children[index].firstChild.textContent;
      // const todoName = todoList.children[index].textContent.slice(0, -1);

      // tìm vị trí todo cần xóa trong todoArr
      const i = todoArr.findIndex(
        (tdItem) =>
          currentUser.userName === tdItem.owner && tdItem.task === todoName
      );
      todoArr.splice(i, 1);
      saveToStorage(todoKey, todoArr);
      renderTask(todoArr);
    });
  });
}

console.log(todoList);
console.log(todoList.children[0]);
