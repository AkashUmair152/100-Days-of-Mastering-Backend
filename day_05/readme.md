
---


### 📝 Note Taking App

A simple, elegant, and functional **Note-Taking Web App** built with **Node.js, Express, and EJS**. This app allows users to create, view, and manage text-based notes (tasks) directly from the browser. Notes are saved as `.txt` files on the server, and displayed dynamically in a clean, responsive dark-themed UI.

---

## 🌟 Features

- ✅ **Create Notes**: Add a title and description via a form.
- ✅ **View Notes**: All saved notes are displayed as cards on the homepage.
- ✅ **Persistent Storage**: Notes are saved as `.txt` files in the `./files` directory.
- ✅ **Dark Theme UI**: Sleek, modern dark mode design with hover effects.
- ✅ **Responsive Layout**: Up to 3 cards per row on desktop, adjusts for mobile.
- ✅ **Auto-Created Directory**: The `./files` folder is created automatically if missing.
- ✅ **Dynamic Rendering**: Titles and descriptions are loaded from saved files.

---

## 🧱 Technology Stack

- **Node.js** – JavaScript runtime
- **Express** – Web framework for routing and middleware
- **EJS (Embedded JavaScript)** – Template engine for dynamic HTML
- **HTML/CSS** – Frontend structure and styling
- **File System (fs)** – For saving and reading note files

---

## 📁 Project Structure

```

note-taking-app/
│
├── index.js              ← Main server file
├── views/
│   └── index.ejs         ← EJS template (frontend)
├── files/                ← Auto-generated folder to store .txt notes
├── public/               ← Static assets (CSS, JS, images - optional)
└── package.json          ← Project dependencies

```

---

## 🔧 How It Works

### 1. **Server (`index.js`)**
- Starts an Express server on `http://localhost:3000`.
- Uses EJS as the view engine to render dynamic content.
- Serves a form to create new notes.
- Saves each note as a `.txt` file in the `./files` directory.
- On page load, reads all `.txt` files, extracts title and content, and passes them to the frontend.

### 2. **Form Submission**
- The form sends a `POST` request to `/create`.
- The title is sanitized (spaces removed), and the description is saved as file content.
- After saving, the user is redirected to the homepage.

### 3. **Dynamic Note Display**
- The homepage (`/`) reads all files from `./files`.
- For each file:
  - Title is derived from the filename (without `.txt`).
  - Description is read from the file content.
- These are passed to `index.ejs` as an array of objects:  
  ```js
  [{ title: "Hello", description: "World" }, ...]
  ```

- EJS renders them as cards.

---

## 🚀 How to Run

### Step 1: Install Dependencies

```bash
npm init -y
npm install express ejs
```

### Step 2: Create Project Files

Create the following files:

- `index.js` – Server code
- `views/index.ejs` – Frontend template
- `files/` – Will be created automatically (no need to create manually)

### Step 3: Start the Server

```bash
node index.js
```

### Step 4: Open in Browser

Go to:  
👉 [http://localhost:3000](http://localhost:3000)

Now you can:

1. Enter a **title** and **description**.
2. Click **Create Post**.
3. See your note appear as a card!

---

## ⚠️ Known Limitations & Future Improvements

| Limitation | Suggestion |
|----------|-----------|
| No delete/edit | Add delete buttons or edit functionality |
| No rich text | Replace input with `<textarea>` for multiline |
| Unsafe filenames | Improve sanitization (e.g., disallow `../`) |
| Sync file reading | Use `fs.readFile` async for better performance |
| No search | Add search/filter bar |

---

## 📸 Screenshot (Optional)
>
> ![Note Taking App Screenshot](./public/images/Screenshot%20(1).png)  
> *(Rename your screenshot to `aa.png` or update the filename above)*

---

## 🙌 Credits

Built with ❤️ using Node.js & Express.

Feel free to fork, improve, or use as a learning project!

```

---
