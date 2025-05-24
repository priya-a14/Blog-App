import mysql from "mysql2";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const db = mysql.createConnection({
  host: process.env.DB_HOST,       // Use the environment variable for host
  user: process.env.DB_USER,       // Use the environment variable for user
  password: process.env.DB_PASSWORD, // Use the environment variable for password
  database: process.env.DB_DATABASE  // Use the environment variable for database name
});

db.connect((err) => {
  if (err) {
    console.error("Connection failed: ", err);
  } else {
    console.log("Connected to the MySQL database successfully!");
  }
});
