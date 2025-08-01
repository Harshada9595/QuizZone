# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
# 🧠 Quiz Web Application

A full-featured, responsive **Quiz Web App** built using **React (Frontend)** and **Node.js + Express (Backend)** with **MongoDB** for data storage.

> 📘 Test your knowledge with MCQs on Aptitude, English, Reasoning, and Programming (C, C++, Java)!

---

## 🌟 Features

- ✅ User Authentication (Signup/Login)
- ✅ Dashboard with category-based quizzes
- ✅ Timer, score tracking, and result summary
- ✅ Admin-friendly question management (Add/Edit/Delete)
- ✅ Fully responsive UI with modern design
- ✅ RESTful API integration using Express.js

---

## 🖥️ Tech Stack

| Frontend                | Backend                | Database  |
|------------------------|------------------------|-----------|
| React.js (Vite)        | Node.js + Express.js   | MongoDB   |
| React Router DOM       | CORS, Body-Parser      | Mongoose  |
| Tailwind CSS / Custom  | REST APIs              |           |

---

## 📁 Folder Structure

```bash
QuizApp/
├── QUIZ-UI/              # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/   # Navbar, QuizCard, Timer etc.
│   │   ├── pages/        # Home, Login, Signup, Aptitude, English, etc.
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js

├── QUIZ-API/             # Node.js backend
│   ├── controllers/      # quizController.js, userController.js
│   ├── models/           # quizModel.js, userModel.js
│   ├── routes/           # quizRoutes.js, userRoutes.js
│   ├── server.js
│   ├── .env
│   └── package.json

└── README.md

How to Run the Project in VS Code
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/quiz-app.git
cd quiz-app

2. Run Frontend (React)
bash
Copy
Edit
cd QUIZ-UI
npm install
npm run dev
Frontend will run on: http://localhost:5173

3. Run Backend (Node.js + Express)
bash
Copy
Edit
cd ../QUIZ-API
npm install
npm run dev
Backend will run on: http://localhost:5000




Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Commands to run
