# 📝 NotesApp

A full-stack note-taking web application where different users can sign in and manage their own notes. Each user can **create**, **update**, and **delete** notes. Every note includes a **title**, **content**, and **tags**. There's also a **search bar** for easy filtering and a user icon at the top right for quick profile access.

The app is built as a **single-page application (SPA)** using **React + Vite**, and it demonstrates the core principle of **client-server communication**, where the frontend and backend operate on different servers and communicate via **API requests/responses** using **Axios** and **CORS**.

---

## 🎯 Key Features

- 🔐 User-specific notes
- 🆕 Create, update, and delete notes
- 🔍 Real-time search through notes
- 🏷️ Tag-based note categorization
- 🖼️ User icon (future feature scope)
- ⚡ Built as a fast, responsive SPA

---

## 🧠 Purpose of the Project

This project helped me understand:
- How frontend and backend communicate on different servers (**Cross-Origin Resource Sharing (CORS)**)
- How **Axios** is used to send and receive **HTTP requests and responses**
- The architecture behind **React components**, **routing**, and **state management**
- How **MongoDB** stores user data and notes
- Building secure and scalable backend logic using **Express.js** and **Mongoose**

---

## 🚀 Tech Stack

### Frontend
- `vite@react`
- `react-router-dom`
- `axios`
- `moment`
- `react-icons`

### Backend
- `express`
- `mongoose`
- `cors`
- `dotenv`

### Future Improvements
- 🔐 Add `bcrypt` for password hashing
- 🔄 Implement JWT **refresh tokens**
- ⚙️ Add user profile page

---

## 🗂️ Folder Structure

```
project-root/
├── frontend/notes-app/         # React + Vite SPA
│   ├── src/
│   └── public/
├── backend/          # Node.js + Express server
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── index.js / server.js
```

---

## 📦 Getting Started

### Clone the Repository

```bash
git clone https://github.com/ThrigunChandra/NotesApp.git
cd NotesApp
```

### Install Frontend Dependencies

```bash
cd frontend/notes-app
npm install
npm run dev
```

### Install Backend Dependencies

```bash
cd backend
npm install
npm run dev
```

---

## ✍️ Author

**ThrigunChandra**  
📌 GitHub: [@ThrigunChandra](https://github.com/ThrigunChandra)

---
