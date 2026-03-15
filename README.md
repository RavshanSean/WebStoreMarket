![App Preview](./Untitled%20design.png)

# 🛒 WebStoreMarket

A modern **full-stack marketplace web application** where users can post, browse, and manage products.

Built using **React, Node.js, Express, PostgreSQL, and TypeScript** with modern UI and authentication.

---

# 🚀 Features

- 🛒 Create and browse product listings
- 🔐 Secure authentication with Clerk
- 🗄️ PostgreSQL database
- 🧬 Drizzle ORM for type-safe database queries
- ⚛️ Modern React frontend
- 🎨 Tailwind CSS + DaisyUI UI system
- ⚡ Fast development with Vite
- 🧠 Clean full-stack architecture
- 📦 REST API with Express

---

# 🛠️ Tech Stack

## Frontend
- React
- Vite
- TailwindCSS
- DaisyUI
- TanStack Query
- Clerk Authentication

## Backend
- Node.js
- Express
- TypeScript
- Drizzle ORM

## Database
- PostgreSQL (Neon)

---

# 📂 Project Structure
project-root
│
├── frontend → React + Vite UI
├── backend → Express API + database
│
└── README.md


---

# 🔐 Environment Variables

Backend `.env`


PORT=3000
DATABASE_URL=your_database_url

CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret

FRONTEND_URL=http://localhost:5173


Frontend `.env`


VITE_CLERK_PUBLISHABLE_KEY=your_key
VITE_API_URL=http://localhost:3000/api


---

# ⚙️ Run The Project

### Backend


cd backend
npm install
npm run dev


Runs on


http://localhost:3000


---

### Frontend


cd frontend
npm install
npm run dev


Runs on


http://localhost:5173


---

# 🧠 Learning Goals

This project demonstrates:

- Full-stack development
- Authentication systems
- REST API architecture
- Database integration
- Modern frontend UI frameworks

---
