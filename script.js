// Setup Event Listener for Page Load:
document.addEventListener("DOMContentLoaded", function () {
  // Select DOM Elements:
  const addButton = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");
  const taskInput = document.getElementById("task-input");
  // Create the addTask Function
  function addTask() {
    const taskText = taskInput.value.trim();

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
    };

    // Append the remove button to the task <li>
    listItem.appendChild(removeButton);

    // Add the new task <li> to the task list
    taskList.appendChild(listItem);

    // Clear the task input field
    taskInput.value = "";
  }
  // Add click event listener to the "Add Task" button
  addButton.addEventListener("click", addTask);

  // Add keypress event listener to allow adding tasks with the "Enter" key
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
