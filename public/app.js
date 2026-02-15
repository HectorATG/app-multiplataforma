document.addEventListener("DOMContentLoaded", () => {

  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  async function loadTasks() {
    const response = await fetch("/api/tasks");
    const tasks = await response.json();

    taskList.innerHTML = "";

    tasks.forEach(task => {
      const li = document.createElement("li");

      li.innerHTML = `
        <div class="task-content">
          <span>${task.text}</span>
          <span class="task-status ${task.status}">
            ${task.status === "completada" ? "Terminada" : "Pendiente"}
          </span>
        </div>

        <div class="task-buttons">
          <button class="complete" onclick="updateStatus(${task.id})">✔</button>
          <button class="delete" onclick="deleteTask(${task.id})">X</button>
        </div>
      `;

      taskList.appendChild(li);
    });
  }

  window.addTask = async function() {
    const text = taskInput.value.trim();
    if (!text) return;

    await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    });

    taskInput.value = "";
    loadTasks();
  };

  window.deleteTask = async function(id) {
    await fetch(`/api/tasks/${id}`, { method: "DELETE" });
    showNotification("Tarea eliminada");
    loadTasks();
  };

  window.updateStatus = async function(id) {
    await fetch(`/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "completada" })
    });

    loadTasks();
  };

  function showNotification(message) {
    const notification = document.createElement("div");
    notification.classList.add("notification");
    notification.innerText = message;

    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add("show"), 100);

    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }

  loadTasks();
});
