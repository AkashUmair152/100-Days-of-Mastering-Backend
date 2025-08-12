
---

```markdown
### 📚 Day-17 how to connect frontend and backend

# 😄 Jokes App

A simple full-stack web application that displays a list of jokes fetched from a backend API. Built with:

- **Frontend**: React (Vite) + Axios
- **Backend**: Node.js + Express
- **Communication**: REST API with CORS enabled

Live demo of concepts: [Frontend on port 5173](http://localhost:5173) ↔️ [Backend on port 3000](http://localhost:3000)

---

## 🚀 Features

- Fetch jokes from a local Express API
- Display jokes with title and content
- Uses `axios` for HTTP requests
- CORS properly configured for cross-origin communication
- Clean separation between frontend and backend

---

## 📦 Technologies Used

| Layer      | Technology        |
|----------|-------------------|
| Frontend | React + Vite      |
| HTTP Client | Axios          |
| Backend  | Node.js + Express |
| Middleware | CORS           |

---

## 🔧 Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/jokes-app.git
cd jokes-app
```

> ⚠️ Note: This project assumes two separate folders — `frontend` and `backend`. If not separated, organize accordingly.

---

### 2. Run the Backend

Navigate to your backend folder and start the server:

```bash
cd backend
npm install
node server.js
```

✅ The backend will run on `http://localhost:3000`

> API Endpoint: `GET /jokes` → returns list of jokes

---

### 3. Run the Frontend

Open a new terminal and start the React app:

```bash
cd frontend
npm install
npm run dev
```

✅ The frontend will run on `http://localhost:5173`

---

## 🌐 API Reference

### `GET /jokes`

Returns a JSON array of jokes.

**Response Example:**
```json
[
  {
    "id": 1,
    "title": "Programmer's Breakfast",
    "content": "I'm a JavaScript developer — I don't need breakfast, I just need coffee and donuts."
  }
]
```

### `GET /`

Health check — returns plain text: `Hello World`

---

## 🛠️ CORS Configuration

To allow the frontend (on `http://localhost:5173`) to access the backend (on `http://localhost:3000`), the backend uses the `cors` middleware:

```js
app.use(
  cors({
    origin: "http://localhost:5173"
  })
);
```

This prevents the browser from blocking cross-origin requests.

---

## 🖼️ UI Preview

```
Jokes
jokes: 5

[ Programmer's Breakfast ]
I'm a JavaScript developer — I don't need breakfast, I just need coffee and donuts.

[ Why Don't Scientists Trust Atoms? ]
Because they make up everything.

...
```

Each joke is rendered in a container with title and content.

---

## 📂 Project Structure

```
jokes-app/
│
├── backend/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## 🚨 Troubleshooting

| Issue | Solution |
|------|---------|
| `CORS error` | Make sure `cors()` is enabled in backend and server restarted |
| `Connection refused` | Ensure backend is running on port 3000 |
| `axios not found` | Run `npm install axios` in frontend |
| `import not working` | Ensure both projects use ESM (`"type": "module"` in `package.json`) |

---

## 🚀 Future Enhancements

- Add ability to add new jokes (`POST /jokes`)
- Implement joke deletion
- Search/filter jokes by title
- Add loading spinner
- Deploy to platforms like Vercel + Render

---

## 🙌 Credits

Developed as a learning project to demonstrate:

- Full-stack communication
- REST APIs
- CORS handling
- React + Express integration

Made with ❤️ using modern web technologies.

---
```

---

