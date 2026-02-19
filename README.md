# Clean Architecture Auth API

A simple authentication API built using Node.js and Express following Clean Architecture principles.

##  Features

- User Registration
- User Login
- JWT Authentication
- Password Hashing (bcrypt)
- MySQL Database (Sequelize ORM)
- Clean Architecture Structure
- Dependency Injection

---

##  Architecture

This project follows Clean Architecture:

Presentation → Application → Domain  
Infrastructure remains external and replaceable.

### Folder Structure

src/
 ├── domain/
 ├── application/
 ├── infrastructure/
 ├── presentation/
 └── server.js

---

##  Tech Stack

- Node.js
- Express
- MySQL
- Sequelize
- JWT
- bcrypt

---

##  Setup

### 1. Clone the repo

git clone https://github.com/yourusername/auth-clean-architecture.git

### 2. Install dependencies

npm install

### 3. Create .env file

DB_HOST=localhost  
DB_USER=root  
DB_PASSWORD=yourpassword  
DB_NAME=clean_auth_db  
DB_PORT=3306  
JWT_SECRET=your_secret_key  

### 4. Run server

npm run dev

---

##  API Endpoints

POST /register  
POST /login  


---

##  Purpose

This project demonstrates how to structure a backend using Clean Architecture to ensure scalability, maintainability, and separation of concerns.


---

## 👨‍💻 Author

Doli Dua
