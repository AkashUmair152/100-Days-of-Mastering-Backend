

```markdown
### day_17 Mastering Backend in 100 days
# 😄 Jokes App

A clean, modern full-stack web application that displays a list of jokes fetched from a backend API. Built with:

- **Frontend**: React + Vite + **Tailwind CSS**
- **Backend**: Node.js + Express
- **Communication**: REST API with **CORS** enabled

Live demo of concepts: [Frontend on port 5173](http://localhost:5173) ↔️ [Backend on port 3000](http://localhost:3000)



## 🚀 Features

- Fetch jokes from a local Express API
- Display jokes with title and content using **Tailwind CSS** for styling
- Uses `axios` for HTTP requests
- **CORS properly configured** to allow cross-origin communication
- Responsive, utility-first design with Tailwind
- Clean separation between frontend and backend

---

## 📦 Technologies Used

| Layer       | Technology        |
|-----------|-------------------|
| Frontend  | React + Vite      |
| Styling   | **Tailwind CSS**  |
| HTTP Client | Axios           |
| Backend   | Node.js + Express |
| Middleware | **CORS**         |

---

## 🔧 Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/jokes-app.git
cd jokes-app
```

> 💡 This project assumes two folders: `frontend` and `backend`. Adjust paths if needed.

---

### 2. Run the Backend

Navigate to the backend folder:

```bash
cd backend
npm install
node server.js
```

✅ Backend runs on `http://localhost:3000`  
Available endpoints: `GET /`, `GET /api/jokes`

---

### 3. Run the Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

✅ Frontend runs on `http://localhost:5173` with live reload

---

## 🎨 Tailwind CSS Setup

Tailwind CSS is fully configured in the frontend for utility-first styling.

### Configuration Files

- `tailwind.config.js`
- `postcss.config.js`
- `index.css` (with `@tailwind` directives)

### Example Usage

```jsx
<div className="container p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md my-4">
  <h2 className="title text-xl font-bold text-gray-800">{joke.title}</h2>
  <p className="content text-gray-600 mt-2">{joke.content}</p>
</div>
```

✅ Responsive, fast, and maintainable styling without writing custom CSS.

---

## 🌐 API Reference

### `GET /jokes`

Returns a JSON array of jokes.

**Sample Response:**

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

## 🔒 CORS Configuration

To allow the frontend (`http://localhost:5173`) to securely communicate with the backend (`http://localhost:3000`), **CORS middleware** is enabled:

```js
import cors from 'cors';

app.use(
  cors({
    origin: 'http://localhost:5173', // Only allow Vite dev server
    methods: ['GET'],
    credentials: false
  })
);
```

This prevents the browser from blocking cross-origin requests while maintaining security.

> ⚠️ Never disable CORS in production without proper origin control.

---

## 🖼️ UI Preview (Styling with Tailwind)

The app uses **Tailwind CSS** to render beautifully styled joke cards:

```
+--------------------------------------------------+
| 🎭 Jokes                                         |
|                                                  |
| Total: 5 jokes                                   |
|                                                  |
| [ Programmer's Breakfast ]                       |
| I'm a JavaScript developer — I don't need        |
| breakfast, I just need coffee and donuts.        |
|                                                  |
| [ Why Don't Scientists Trust Atoms? ]            |
| Because they make up everything!                 |
+--------------------------------------------------+
```

Each joke is wrapped in a responsive card with padding, rounded corners, shadow, and consistent typography.

---

## 📂 Project Structure

```
jokes-app/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── index.html
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
└── README.md
```

---

## 🚨 Troubleshooting

| Issue | Solution |
|------|---------|
| `CORS blocked` | Ensure `cors()` is used and origin matches `http://localhost:5173` |
| `Tailwind not styling` | Check `tailwind.config.js` content paths and that `@tailwind` is in `index.css` |
| `Connection refused` | Confirm backend is running on port 3000 |
| `Module not found` | Run `npm install` in both `frontend` and `backend` |

---

## 🚀 Future Enhancements

- ✅ Add form to create new jokes (`POST /jokes`)
- ✅ Delete or edit jokes
- ✅ Search bar to filter jokes
- ✅ Add loading spinner with Tailwind
- ✅ Deploy frontend to Vercel, backend to Render
- ✅ Add dark mode using Tailwind

---

## 🙌 Credits

Developed as a learning project to demonstrate:

- Full-stack communication
- REST APIs
- **CORS handling**
- **Tailwind CSS integration**
- React + Express + Axios workflow

Made with ❤️ using modern web technologies.
