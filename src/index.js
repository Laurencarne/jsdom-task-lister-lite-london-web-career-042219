document.addEventListener("DOMContentLoaded", () => {

});

let createTaskButton = document.querySelectorAll("input")[1];

createTaskButton.addEventListener("click", function (event) {
  event.preventDefault()

  let li = document.createElement("li")

  let ul = document.querySelector("#tasks")

  li.innerHTML = `${document.querySelector("#new-task-description").value} <button id="deleteButton">X</button>`

  ul.appendChild(li)

  let deleteTaskButton = li.querySelector("#deleteButton");

  deleteTaskButton.addEventListener("click", function (event) {
    event.preventDefault()
    li.remove()
  });
});
