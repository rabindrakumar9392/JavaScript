const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const priorityInput = document.getElementById("priorityInput");
const dateInput = document.getElementById("dateInput");

const searchInput = document.getElementById("searchInput");
const filterInput = document.getElementById("filterInput");

const taskList = document.getElementById("taskList");
const clearCompleted = document.getElementById("clearCompleted");

const totalCount = document.getElementById("totalCount");
const activeCount = document.getElementById("activeCount");
const completedCount = document.getElementById("completedCount");

let tasks = JSON.parse(localStorage.getItem("smartTasks")) || [];

function saveTasks() {
    localStorage.setItem("smartTasks", JSON.stringify(tasks));
}

function updateStats() {
    const completed = tasks.filter(function (task) {
        return task.completed;
    }).length;

    const active = tasks.length - completed;

    totalCount.textContent = tasks.length;
    activeCount.textContent = active;
    completedCount.textContent = completed;
}

function renderTasks() {

    taskList.innerHTML = "";

    const searchText = searchInput.value.toLowerCase();
    const filter = filterInput.value;

    const filteredTasks = tasks.filter(function (task) {

        const matchesSearch =
            task.text.toLowerCase().includes(searchText);

        const matchesFilter =
            filter === "all" ||
            (filter === "active" && !task.completed) ||
            (filter === "completed" && task.completed);

        return matchesSearch && matchesFilter;
    });

    filteredTasks.forEach(function (task) {

        const taskElement = document.createElement("div");

        taskElement.className = "task";

        if (task.completed) {
            taskElement.classList.add("completed");
        }

        taskElement.innerHTML = `
            <div class="task-info">
                <h3>${task.text}</h3>
                <p><strong>Priority:</strong> ${task.priority}</p>
                <p><strong>Due Date:</strong> ${task.date || "No date"}</p>
            </div>

            <div class="task-actions">
                <button class="complete-btn">
                    ${task.completed ? "Undo" : "Complete"}
                </button>

                <button class="delete-btn">
                    Delete
                </button>
            </div>
        `;

        taskElement
            .querySelector(".complete-btn")
            .addEventListener("click", function () {

                task.completed = !task.completed;

                saveTasks();
                renderTasks();
            });

        taskElement
            .querySelector(".delete-btn")
            .addEventListener("click", function () {

                tasks = tasks.filter(function (item) {
                    return item.id !== task.id;
                });

                saveTasks();
                renderTasks();
            });

        taskList.appendChild(taskElement);
    });

    updateStats();
}

taskForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const text = taskInput.value.trim();

    if (text === "") {
        alert("Please enter a task.");
        return;
    }

    const task = {
        id: Date.now(),
        text: text,
        priority: priorityInput.value,
        date: dateInput.value,
        completed: false
    };

    tasks.push(task);

    saveTasks();
    renderTasks();

    taskForm.reset();
});

searchInput.addEventListener("input", renderTasks);

filterInput.addEventListener("change", renderTasks);

clearCompleted.addEventListener("click", function () {

    tasks = tasks.filter(function (task) {
        return !task.completed;
    });

    saveTasks();
    renderTasks();
});

renderTasks();