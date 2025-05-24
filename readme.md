# 📝 Blog App

This is a **CRUD Blog Application** built with full-stack technologies. It features:

- 🧑‍💻 **User Authentication** using **JWT tokens**
- 📝 Ability to **Create, Read, Update, Delete (CRUD)** blog posts
- 📦 RESTful APIs with **Node.js & Express**
- 💅 Frontend built using **React** and **SCSS**
- 🗄️ Data stored in **MySQL**

---

## ⚙️ Technologies Used

- Frontend: React, SCSS  
- Backend: Node.js, Express.js  
- Database: MySQL  
- Authentication: JWT  

---

## 🚀 Features

- Login & Register (JWT secured)  
- Create, edit, delete, and view blog posts  
- Posts tied to authenticated users  
- Category-based filtering  

---

## 📋 Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v16 or above)  
- **npm** (v8 or above)  
- **MySQL** installed and running locally  

---

## 🛠️ Setup Instructions

### 1. 📂 Clone the Repository

```bash
git clone https://github.com/ShrutiKishore15/BlogApp.git
cd BlogApp
```

This guide will help you set up a MySQL-backed blog application with a Node.js + React stack.

---

### 2. ⚙️ Database Setup

#### Create the Database and Tables

1. Open the MySQL shell or a GUI like **phpMyAdmin** or **MySQL Workbench**.  
2. Run the following SQL commands:

```sql
-- Create the database
CREATE DATABASE blog;

-- Create the users table
CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

-- Create the posts table
CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  `desc` TEXT,
  img VARCHAR(255),
  cat VARCHAR(100),
  date DATETIME,
  uid INT,
  FOREIGN KEY (uid) REFERENCES user(id)
);
```

---

### 3. 🔌 Configure Database Connection

Create a `.env` file inside the `api` folder with the following content:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=<your password>
DB_DATABASE=blog
```

Update the `api/db.js` file to use these environment variables:

```js
import mysql from "mysql2";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

db.connect((err) => {
  if (err) {
    console.error("Connection failed: ", err);
  } else {
    console.log("Connected to the MySQL database successfully!");
  }
});
```

---

### 4. 🖥️ Running the App

#### Start the Backend

```bash
cd api
npm install
npm start
```

#### Start the Frontend

Open a new terminal window and run:

```bash
cd client/blog-app
npm install
npm start
```

---

### 📍 Access the App

Once both servers are running, visit:  
👉 **http://localhost:3000**

---

### 📌 Notes

- Make sure your MySQL server is **running** before starting the backend.  
- Store sensitive values like JWT secrets in environment variables for **production** use.