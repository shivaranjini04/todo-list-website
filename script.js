let points = 0;

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") return;

  let li = document.createElement("li");
  li.textContent = taskText;

  // Add a checkbox to mark as completed
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.onclick = function () {
    if (checkBox.checked) {
      li.classList.add("completed");
      points += 10; // Award points for completing a task
      updatePoints();
      moveTaskToCompleted(li);
    } else {
      li.classList.remove("completed");
      points -= 5; // Deduct points if task is unchecked
      updatePoints();
      moveTaskToPending(li);
    }
  };

  // Create delete button
  let span = document.createElement("span");
  span.textContent = "❌";
  span.onclick = function () {
    li.remove();
    if (li.classList.contains("completed")) {
      points -= 10; // Deduct points if a completed task is deleted
    }
    updatePoints();
  };

  li.prepend(checkBox);
  li.appendChild(span);
  document.getElementById("pendingTasks").appendChild(li);
  taskInput.value = "";
}

function moveTaskToCompleted(task) {
  document.getElementById("completedTasks").appendChild(task);
}

function moveTaskToPending(task) {
  document.getElementById("pendingTasks").appendChild(task);
}

function updatePoints() {
  document.getElementById("points").textContent = "Points: " + points;
}