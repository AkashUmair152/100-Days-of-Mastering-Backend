
---

````markdown
# 📝 Task Manager - Node.js + Express + EJS

This is a simple Task Manager web application built with **Node.js**, **Express**, and **EJS** templating. It allows users to **create**, **view**, **edit**, and **delete** tasks stored as `.txt` files on the local file system.

---

## 🚀 Features

- ✅ Create a new task with a title and description.
- 📄 Store each task as a `.txt` file inside the `files` directory.
- 📋 List all tasks dynamically on the home page.
- 👀 View individual task content.
- ✏️ Edit a task (rename + update content).
- ❌ Delete a task with one click.
- 🎨 Clean and simple UI using EJS templates.

---

## 🧠 What I Learned

Through this project, I gained hands-on experience with several core concepts of **backend web development**:

### 🔧 Node.js & Express
- Setting up a Node.js server using Express.
- Creating RESTful routes for GET and POST requests.
- Handling form data using `express.urlencoded()` and `express.json()`.

### 📂 File System (fs module)
- Reading files from a directory using `fs.readdir()`.
- Creating files with `fs.writeFile()`.
- Reading individual files with `fs.readFile()`.
- Renaming files using `fs.rename()`.
- Deleting files using `fs.unlink()`.

### 🧩 Templating with EJS
- Dynamically rendering HTML using EJS (`res.render()`).
- Passing variables from Express to EJS views.
- Looping through arrays to generate dynamic lists in the UI.

### 🧠 Extra Concepts
- URL parameters and dynamic routing (`req.params`).
- Handling form submissions (`req.body`).
- Using `path.join()` for cross-platform file paths.
- Basic client-side confirmation using `confirm()` in HTML.

---

## 🛠️ How to Run the Project

1. **Clone this repository:**
   ```bash
   git clone https://github.com/your-username/task-manager
   cd task-manager
````

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Create folders:**

   * Ensure you have a folder named `files` in your root directory.
   * You can also place your static files (CSS/images) in a `public` folder.

4. **Run the server:**

   ```bash
   node app.js
   ```

5. **Open in browser:**

   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
project/
├── app.js
├── files/               # Folder where task files are stored
├── views/               # EJS templates (index.ejs, edit.ejs, task.ejs)
├── public/              # Static files like CSS or JS
└── README.md
```

---

## ✨ Future Improvements

* Add a database like MongoDB or SQLite for better data storage.
* Use flash messages for success/error notifications.
* Add client-side validations.
* Use Bootstrap or Tailwind for a better UI.
* Implement search functionality for tasks.

---

## 📃 License

This project is for educational purposes and free to use. You can modify it as needed.

---

## 🙌 Acknowledgements

Thanks to the open-source community and Node.js documentation for making learning backend development easy and fun.

```

---

