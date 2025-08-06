
---

```markdown
### Day_12 of 100 days of mastering Backend

# 🔐 User Authentication System

A secure, full-stack user authentication web application built with **Node.js, Express, MongoDB (Mongoose), EJS, and JWT**. This project includes user registration, login, session management via JWT cookies, and a protected dashboard — all with a sleek **dark theme UI**.

Perfect for learning backend fundamentals: authentication, middleware, sessions, password hashing, and dynamic templating.

---

## 🌟 Features

- ✅ **User Registration** – Create a new account with username, email, age, and password
- ✅ **Secure Login** – Authenticate using email and password
- 🔒 **JWT-Based Authentication** – Token stored in HTTP-only cookie
- 🛡️ **Password Hashing** – Using `bcrypt` to securely store passwords
- 🔐 **Protected Routes** – Middleware checks authentication before allowing access
- 🖼️ **Dark Theme UI** – Clean, modern design with EJS templates
- 🧭 **Navigation Flow** – Smooth user journey from home → register → login → dashboard
- 🍪 **Cookie Management** – Auto-redirect for logged-in users and logout support

---

## 🚀 Technologies Used

| Tech | Purpose |
|------|--------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web framework |
| **MongoDB + Mongoose** | Database & schema modeling |
| **EJS** | Embedded JavaScript templates (dynamic HTML) |
| **Bcrypt** | Password hashing |
| **JWT (JsonWebToken)** | Token-based authentication |
| **Cookie-Parser** | Parse HTTP cookies |
| **HTML/CSS** | Frontend structure and styling |

---

## 📦 Project Structure

```
100-Days-of-Mastering-Backend/
├── index.js               # Main server file
├── model/
│   └── user.js            # Mongoose user schema
├── views/
│   ├── index.ejs          # Home page
│   ├── register.ejs       # Registration form
│   ├── login.ejs          # Login form
│   └── user.ejs           # User dashboard
├── public/
│   └── (static assets)    # CSS, images (optional)
├── package.json
└── README.md
```

---

## 🛠️ Setup & Installation

### 1. Clone the repo
```bash
git clone https://github.com/your-username/100-Days-of-Mastering-Backend.git
cd 100-Days-of-Mastering-Backend/day_12
```

### 2. Install dependencies

```bash
npm install
```

> Requires: `node`, `npm`, and `MongoDB` running locally or Atlas.

### 3. Start MongoDB

Make sure MongoDB is running:
```bash
# If using local MongoDB
mongod
```

Or update to use **MongoDB Atlas** in the future.

### 4. Start the server

```bash
node index.js
```

### 5. Open in browser

👉 Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧭 How to Use

| Page | Action |
|------|-------|
| `http://localhost:3000` | Home page – navigate to register or login |
| `http://localhost:3000/register` | Create a new account |
| `http://localhost:3000/login` | Log in with registered email & password |
| `http://localhost:3000/user` | Protected dashboard (only accessible when logged in) |
| `/logout` | Clear session and log out |

> 🔐 After login, you're redirected to `/user` with your profile info.

---

## 🔐 Security Features

- ✅ **Passwords are hashed** using `bcrypt`
- ✅ **JWT tokens** stored in `HttpOnly` cookies (XSS protection)
- ✅ **Token verification** on every protected route
- ✅ **Input validation** on server side
- ✅ **Session redirect logic** to prevent unauthorized access

---

## 🚧 Known Limitations (For Learning)

This is a beginner-to-intermediate project. Future improvements:

- 🔐 Use environment variables for JWT secret
- 📧 Email verification
- 🔁 Password reset flow
- 🧼 Input validation (e.g., email format, strong password)
- 🌐 Deploy to cloud (e.g., Render, Vercel, AWS)
- 🧑‍💻 User profile editing

---

## 🙌 Acknowledgements

Built as part of **"100 Days of Mastering Backend"** challenge to learn backend development from scratch.

Great for beginners learning:

- Express routing
- Middleware
- Authentication
- Templating with EJS
- Data persistence with MongoDB

---

## 📸 Screenshots (Optional)

> *(You can add actual screenshots later)*
>
> - Home Page  
> - Register Form  
> - Login Page  
> - User Dashboard

---

## 📬 Feedback & Contributions

Open to suggestions! Feel free to open an issue or pull request to improve the project.

Happy coding! 💻🖤
```

---

