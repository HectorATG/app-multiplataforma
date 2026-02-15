const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();

const filePath = path.join(__dirname, "../tasks.json");

// Leer tareas
function readTasks() {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

// Guardar tareas
function saveTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

// Obtener todas las tareas
router.get("/", (req, res) => {
  const tasks = readTasks();
  res.json(tasks);
});

// Crear tarea
router.post("/", (req, res) => {
  const tasks = readTasks();

  const newTask = {
    id: Date.now(),
    text: req.body.text,
    status: "pendiente"
  };

  tasks.push(newTask);
  saveTasks(tasks);

  res.status(201).json(newTask);
});

// Eliminar tarea
router.delete("/:id", (req, res) => {
  let tasks = readTasks();
  const id = parseInt(req.params.id);

  tasks = tasks.filter(task => task.id !== id);

  saveTasks(tasks);
  res.json({ message: "Tarea eliminada" });
});

// ACTUALIZAR ESTADO (IMPORTANTE)
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body;

  let tasks = readTasks();

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ message: "Tarea no encontrada" });
  }

  task.status = status;

  saveTasks(tasks);

  res.json({ message: "Estado actualizado correctamente" });
});

module.exports = router;
