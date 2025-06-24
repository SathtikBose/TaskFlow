# TaskFlow Backend

TaskFlow is a robust, production-ready collaborative project management REST API built with Node.js, Express, and MySQL. It supports real-time updates, secure JWT authentication, role-based access, project/team/task management, comments, file uploads, activity feeds, notifications, API versioning, Swagger documentation, rate limiting, and secure password hashing.

---

## 🚀 Features

- User registration, login (JWT via httpOnly cookie), and role-based access (admin, manager, developer)
- Project creation with hierarchy and milestones
- Team formation and role assignment
- Task management with status, priority, category, and dependencies
- Comment threads on tasks and projects
- File upload and sharing
- Activity feed with timestamps
- Notifications for task updates and mentions
- Real-time updates with socket.io
- API versioning (`/api/v1`)
- **Interactive API documentation** with Swagger/OpenAPI (`/api-docs`)
- Rate limiting, error handling, and input validation
- Secure password hashing (bcrypt)

---

## 📺 Walkthrough Video

> _Click the image above or [this link](https://youtu.be/aHfRM72emRo) to watch a full walkthrough of the TaskFlow API._

---

## 📚 API Documentation

This repository includes full API documentation using Swagger/OpenAPI. You can access the interactive docs after starting the server:

- [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

Use this interface to explore endpoints, see request/response formats, and test the API directly from your browser.

---

## 🛠️ Getting Started

1. **Clone the repository**
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Configure environment variables:**
   - Copy `.env.example` to `.env` and fill in your MySQL and JWT settings.
4. **Create the database and tables:**
   - Use the provided SQL in `create_tables.sql` to create tables and insert demo data.
5. **Run the server:**
   ```sh
   npm run dev
   ```
6. **Access the API docs:**
   - Open [http://localhost:3000/api-docs](http://localhost:3000/api-docs) in your browser.

---

## 🔑 Main Endpoints

- `POST /api/v1/auth/register` — Register a new user
- `POST /api/v1/auth/login` — Login (sets JWT httpOnly cookie)
- `POST /api/v1/projects` — Create a project
- `POST /api/v1/tasks` — Create a task
- `POST /api/v1/comments` — Add a comment to a task

See `api_test_data.txt` for example requests and test data.

---

## 📁 Folder Structure

- `src/routes/` — API route definitions
- `src/controllers/` — Request handlers
- `src/models/` — Database models
- `src/middleware/` — Auth, validation, error handling, etc.
- `src/utils/` — Utility functions
- `src/config/` — Configuration files
- `src/docs/` — Swagger/OpenAPI docs
- `uploads/` — Uploaded files

---

## 🔒 Security & Best Practices

- JWT tokens are stored in httpOnly cookies for secure authentication
- All sensitive routes require authentication and proper roles
- Passwords are hashed with bcrypt
- Input validation and error handling are enforced
- CORS and rate limiting are enabled

---

## 📄 License

MIT
