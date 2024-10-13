// Setup Event Listener for Page Load:
document.addEventListener("DOMContentLoaded", function () {
  // Select DOM Elements:
  const addButton = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");
  const taskInput = document.getElementById("task-input");

  function loadTask() {
    const storedTask = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTask.forEach((taskText) => addTask(taskText, false));
  }

  // Create the addTask Function
  function addTask(taskText, save = true) {
    // Check if the input is not empty
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // creat remove btn
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    removeButton.onclick = function () {
      taskList.removeChild(listItem);
      removeTask(taskText);
    };

    // Append the remove button to the task <li>
    listItem.appendChild(removeButton);

    // Add the new task <li> to the task list
    taskList.appendChild(listItem);

    if (save) {
      saveTaskToLocalStorage(taskText);
    }

    // Clear the task input field
    taskInput.value = "";
  }

  // Function to save tasks to Local Storage
  function saveTaskToLocalStorage(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.push(taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }

  // Function to remove tasks from Local Storage
  function removeTask(taskText) {
    let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks = storedTasks.filter((task) => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }

  // Add click event listener to the "Add Task" button
  addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    addTask(taskText);
  });

  // Add keypress event listener to allow adding tasks with the "Enter" key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Load tasks from Local Storage on page load
  loadTask();
});
