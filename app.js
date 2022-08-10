let form = document.querySelector("#newTaskForm");
let input = document.querySelector("#newTaskInput");
let tasks = document.querySelector(".tasks");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let userInput = input.value;
    if (!userInput) {
        alert("Please add a Task");
        return;
    }

    let task = document.createElement("div");
    task.classList.add("task");
    task.classList.add("mb-4");

    let content = document.createElement("div");
    content.classList.add("content");

    let taskInput = document.createElement("input");
    taskInput.classList.add("form-control");
    taskInput.value = userInput;
    taskInput.setAttribute("readonly", "readonly");
    taskInput.type = "text";

    content.appendChild(taskInput);
    task.appendChild(content);
    tasks.appendChild(task);

    let actions = document.createElement("div");
    actions.classList.add("actions");
    actions.classList.add("mt-2");

    let editBtn = document.createElement("button");
    editBtn.classList.add("btn");
    editBtn.classList.add("btn-warning");
    editBtn.classList.add("edit");
    editBtn.innerHTML = "Edit";

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-danger");
    deleteBtn.classList.add("delete");
    deleteBtn.classList.add("mx-2");
    deleteBtn.innerHTML = "Delete";

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    task.appendChild(actions);

    editBtn.addEventListener("click", () => {
        if (editBtn.innerHTML == "Edit") {
            taskInput.removeAttribute("readonly");
            editBtn.innerHTML = "Save";
            taskInput.focus();
        }
        else {
            taskInput.setAttribute("readonly", "readonly");
            editBtn.innerHTML = "Edit";
        }
    })

    deleteBtn.addEventListener("click", () => {
        tasks.removeChild(task);
    })


    input.value = "";
})