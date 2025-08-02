
1. ✅ **Theory notes** on SQL vs NoSQL, MongoDB basics, Mongoose ODM, etc.
2. 📁 **Project overview** and setup instructions.
3. 🔧 **CRUD operations explanation** using Mongoose.
4. 💻 Your provided code with context.
5. ▶️ How to run the project.

---

```markdown
# User Management System with Node.js, Express & MongoDB (Mongoose)

A simple CRUD-based User Management System built using **Node.js**, **Express**, and **MongoDB** via **Mongoose ODM**. This project demonstrates core database operations (Create, Read, Update, Delete) using Mongoose in a web server environment.

---

## 📘 Theory Notes

### 🔹 SQL vs NoSQL Databases

| Feature              | SQL (Relational) Databases           | NoSQL (Non-Relational) Databases       |
|----------------------|---------------------------------------|----------------------------------------|
| Data Model           | Table-based with rows and columns     | Flexible: Document, Key-Value, Graph, Column-family |
| Schema               | Fixed schema (structured)             | Dynamic schema (schema-less or flexible) |
| Scalability          | Vertical scaling (scale up hardware)  | Horizontal scaling (scale out across servers) |
| Examples             | MySQL, PostgreSQL, Oracle             | MongoDB, Redis, Cassandra, DynamoDB    |
| Use Case             | Complex queries, transactions         | High volume data, rapid development, unstructured data |

> **MongoDB** is a **document-based NoSQL database** that stores data in flexible, JSON-like documents.

---

### 🔹 Introduction to MongoDB

MongoDB is a popular NoSQL database that uses **documents** instead of tables and rows to store data.

#### Key Concepts:
- **Database**: A container for collections (e.g., `Practice`).
- **Collection**: Equivalent to a table in SQL, but schema-less (e.g., `users`).
- **Document**: A record in a collection, stored in **BSON** (Binary JSON) format.
- **BSON**: Binary representation of JSON-like documents. Supports additional data types like Date, ObjectId, etc.

Example Document:
```json
{
  "_id": ObjectId("..."),
  "name": "kashi",
  "email": "kashi@gmail.com",
  "age": 22,
  "password": "12345"
}
```

---

### 🔹 Setting Up MongoDB

You can use MongoDB in two ways:

#### Option 1: Local Installation

- Install **MongoDB Community Server** from [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
- Install **MongoDB Compass** (GUI tool) for visual management.
- Default connection URL: `mongodb://localhost:27017/<your-db-name>`

#### Option 2: Cloud (Recommended for Devs)

- Use **MongoDB Atlas** (free tier available): [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
- Create a cluster, allow IP access, and get a connection string like:

  ```
  mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/Practice
  ```

---

### 🔹 Basic MongoDB CRUD Operations (Shell/Compass)

| Operation         | MongoDB Shell Command                         |
|------------------|-----------------------------------------------|
| Insert One       | `db.users.insertOne({name: "John", age: 30})` |
| Insert Many      | `db.users.insertMany([...])`                  |
| Find All         | `db.users.find()`                             |
| Find One         | `db.users.findOne({name: "John"})`            |
| Update One       | `db.users.updateOne({name: "John"}, {$set: {age: 31}})` |
| Update Many      | `db.users.updateMany(...)`                    |
| Delete One       | `db.users.deleteOne({name: "John"})`          |
| Delete Many      | `db.users.deleteMany({age: {$lt: 18}})`       |

> These operations are abstracted in Mongoose using methods like `.create()`, `.find()`, `.findByIdAndUpdate()`, etc.

---

### 🔹 Object Data Modeling (ODM) with Mongoose

**Mongoose** is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides:

- Schema enforcement
- Validation
- Middleware (hooks)
- Type casting
- Query building

#### Core Components

1. **Schema**: Defines the structure of documents.
2. **Model**: A constructor compiled from the schema, used to interact with the collection.

Example:

```js
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);
```

---

### 🔹 Connecting Node.js + Express to MongoDB via Mongoose

Use `mongoose.connect()` to connect to MongoDB:

```js
mongoose.connect('mongodb://localhost:27017/Practice');
```

Once connected, you can define models and perform CRUD operations.

---

### 🔹 Mongoose CRUD Methods

| Operation               | Mongoose Method Usage                                  |
|------------------------|---------------------------------------------------------|
| Create                 | `Model.create(data)`                                   |
| Read All               | `Model.find()`                                         |
| Read by Filter         | `Model.findOne({ field })`                             |
| Read by ID             | `Model.findById(id)`                                   |
| Update (First Match)   | `Model.findOneAndUpdate(filter, update, { new: true })`|
| Update by ID           | `Model.findByIdAndUpdate(id, update, { new: true })`   |
| Delete (First Match)   | `Model.findOneAndDelete(filter)`                       |
| Delete by ID           | `Model.findByIdAndDelete(id)`                          |

> The `{ new: true }` option returns the updated document instead of the original.

---

## 🛠️ Project Setup & Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- MongoDB (Local or Atlas)
- npm (comes with Node.js)

### Step 1: Clone or Create Project

```bash
mkdir user-management
cd user-management
npm init -y
```

### Step 2: Install Dependencies

```bash
npm install express mongoose ejs
```

### Step 3: Project Structure

```
/user-management
│
├── app.js
├── userModel.js
├── package.json
└── /public
    └── (static files)
```

### Step 4: Start MongoDB

- If using **local MongoDB**, make sure the service is running:

  ```bash
  # On macOS/Linux
  sudo systemctl start mongod

  # Or just run
  mongod
  ```

- If using **Atlas**, replace the connection string accordingly.

---

## 💻 Code Overview

### `app.js` – Main Server File

```js
const express = require('express');
const app = express();
const path = require('path');
const UserModel = require("./userModel");

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the User Management System</h1>');
});

// Create a new user
app.get('/create', async (req, res) => {
    const user = await UserModel.create({
        name: "kashi",
        email: "kashi@gmail.com",
        age: 22,
        password: "12345"
    });
    res.send(user);
});

// Update a user
app.get("/update", async (req, res) => {
    const updatedUser = await UserModel.findOneAndUpdate(
        { name: "Akash" },
        { 
            name: "kasho",
            email: "kasho@gamil.com"
        },
        { new: true }
    );
    res.send(updatedUser);
});

// Delete a user
app.get("/delete", async (req, res) => {
    const deletedUser = await UserModel.findOneAndDelete({ name: "kasho" });
    res.send(deletedUser);
});

// Get all users
app.get("/users", async (req, res) => {
    const users = await UserModel.find();
    res.send(users);
});

// Get one user by name
app.get("/user", async (req, res) => {
    const user = await UserModel.findOne({ name: "kashi" });
    res.send(user);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

---

### `userModel.js` – Mongoose Model Definition

```js
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Practice');

// Define Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    age: Number
});

// Create Model
const User = mongoose.model("User", userSchema);

module.exports = User;
```

> ✅ Note: It's better practice to move the `mongoose.connect()` call into `app.js`. But this works for small apps.

---

## ▶️ How to Run the Application

1. Ensure MongoDB is running (locally or Atlas).
2. Save the files as:
   - `app.js`
   - `userModel.js`
3. Run the server:

   ```bash
   node app.js
   ```

4. Open your browser and go to:
   - `http://localhost:3000/create` → Creates a user
   - `http://localhost:3000/users` → Lists all users
   - `http://localhost:3000/user` → Finds user named "kashi"
   - `http://localhost:3000/update` → Updates user named "Akash" to "kasho"
   - `http://localhost:3000/delete` → Deletes user named "kasho"

---

## 🧪 Exercise: Practice CRUD Operations

Try these challenges:

1. Add validation to the schema (e.g., `email: { type: String, required: true }`)
2. Use `.findById()` with actual IDs from MongoDB.
3. Implement a route to update a user by ID.
4. Add error handling using try-catch blocks.
5. Connect to **MongoDB Atlas** instead of localhost.

---

## 🚀 Next Steps

- Add RESTful API routes (`POST /users`, `GET /users/:id`, etc.)
- Implement Express middleware (logging, authentication)
- Use environment variables for DB connection
- Add frontend views using EJS templates
- Hash passwords using `bcrypt`

---

## 📎 License

This project is open-source and available under the MIT License.

```

---

### ✅ Tips:
- Replace `mongodb://localhost:27017/Practice` with your Atlas connection string if needed.
- Always handle errors with `try-catch` in production.
- Never store plain-text passwords — use `bcrypt` later.

