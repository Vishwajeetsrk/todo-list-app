/* script.js */
function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskList = document.getElementById("taskList");
    if (taskInput.value === "") return;
    let li = document.createElement("li");
    li.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = "";
}
function removeTask(task) {
    task.parentElement.remove();
}
