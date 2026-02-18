# app-multiplataforma
Aplicación web tipo gestor de tareas desarrollada con **Node.js, Express y JavaScript**, diseñada para funcionar tanto en escritorio como en dispositivos móviles.

---

## 🚀 Descripción del Proyecto

Task Manager es una aplicación que permite:

- ✅ Agregar tareas
- 🟢 Marcar tareas como completadas
- 🕓 Visualizar estado (Pendiente / Terminada)
- ❌ Eliminar tareas
- 📱 Diseño responsive adaptable a teléfono

El proyecto implementa una arquitectura cliente-servidor con API REST y almacenamiento en archivo JSON.

---

## 🛠️ Tecnologías Utilizadas

- Node.js
- Express.js
- JavaScript (Vanilla)
- HTML5
- CSS3
- JSON para persistencia de datos
- Git & GitHub
- Deploy en la nube

---

## 📂 Estructura del Proyecto
APP-MULTIPLATAFORMA
│
├── data/
│ └── tasks.json # Almacenamiento de tareas
│
├── public/
│ ├── index.html # Interfaz principal
│ ├── styles.css # Diseño y responsive
│ └── app.js # Lógica frontend
│
├── routes/
│ └── tasks.js # Rutas API REST
│
├── index.js 
├── package.json 
└── README.md


---


## ⚙️ Instalación Local

1. Clonar el repositorio:

git clone https://github.com/HectorATG/app-multiplataforma

2. Entrar al proyecto:

cd task-manager

3. Instalar dependencias:

npm install

4. Ejecutar el servidor:

node index.js

5. Abrir en el navegador:

http://localhost:3000

🌍 Deploy

El proyecto está desplegado en:

https://app-multiplataforma.onrender.com

🔌 API Endpoints
Método	Ruta	Descripción
GET	/api/tasks	Obtener todas las tareas
POST	/api/tasks	Crear nueva tarea
PUT	/api/tasks/:id	Actualizar estado
DELETE	/api/tasks/:id	Eliminar tarea

📱 Características Responsive

Diseño adaptable a móvil

Layout dinámico

Botones reorganizados en pantalla pequeña

👨‍🎓 Autor

Hector Antonio Terrazas Guevara
