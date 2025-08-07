
---

```markdown
### Day_12 of 100 Days of Mastering Backend

# 🌐 Full-Stack Social Profile App

A secure, full-stack **user authentication and social posting application** built with **Node.js, Express, MongoDB (Mongoose), EJS, JWT, and pure CSS**. Users can register, log in, create posts with titles and images, and like their content — all within a sleek **dark-themed UI**.

Perfect for mastering backend fundamentals: authentication, middleware, session management, data modeling, and dynamic templating.

---

## 🌟 Features

- ✅ **User Registration & Login** – Create account with username, email, age, and password
- 🔒 **JWT-Based Authentication** – Secure login with tokens stored in `HttpOnly` cookies
- 🛡️ **Password Hashing** – Using `bcrypt` to securely store passwords
- 🔐 **Protected Routes** – Middleware (`isLogedin`) guards profile and post creation
- 🖼️ **Post Creation** – Add a **title**, **content**, and optional **image URL**
- ❤️ **Like System** – Click ❤️ to increment likes on your posts
- 📦 **MongoDB Models** – Clean `User` and `Post` schemas with relationships
- 🎨 **Dark Theme UI** – Responsive, modern design using pure CSS (no frameworks)
- 🧭 **Navigation Flow** – Smooth UX: Home → Register → Login → Profile → Create Post
- 🍪 **Session Management** – Auto-redirect if logged in; logout clears cookie

---

## 🚀 Technologies Used

| Tech | Purpose |
|------|--------|
| **Node.js + Express** | Backend server |
| **MongoDB + Mongoose** | Database & schema modeling |
| **EJS** | Dynamic server-side templates |
| **Bcrypt** | Secure password hashing |
| **JWT** | Token-based authentication |
| **Cookie-Parser** | Parse and manage session cookies |
| **HTML/CSS** | Frontend UI (responsive, dark theme) |

---

## 📁 Project Structure

```
100-Days-of-Mastering-Backend/
├── index.js               # Main server file (routes, auth, logic)
├── model/
│   ├── user.js            # User schema with validation
│   └── post.js            # Post schema (linked to User, supports image & likes)
├── views/
│   ├── index.ejs          # Home page
│   ├── register.ejs       # User registration form
│   ├── login.ejs          # Login form
│   ├── profile.ejs        # User dashboard with posts grid
│   └── create-post.ejs    # Form to create a new post
├── public/                # Static assets (CSS, images – optional)
├── package.json
└── README.md              # This file
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

> ✅ Requirements:
>
> - Node.js & npm
> - MongoDB running locally (`mongod`) or use **MongoDB Atlas**

### 3. Start MongoDB

```bash
# If using local MongoDB
mongod
```

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
| `/` | Home page – navigate to register or login |
| `/register` | Create a new account |
| `/login` | Log in with your email and password |
| `/profile` | View your profile and all your posts |
| `/create-post` | Create a new post with title, content, and optional image |
| ❤️ **Like Button** | Click to like a post (count increases instantly) |
| `/logout` | Clear session and log out |

> 💡 Tip: Paste image URLs from sites like [Unsplash](https://unsplash.com) (ensure they end in `.jpg`, `.png`, etc.)

---

## 🔐 Security & Validation

- ✅ Passwords hashed with `bcrypt`
- ✅ JWT tokens in `HttpOnly` cookies (XSS protection)
- ✅ Email format validation in `User` schema
- ✅ Image URL validation (only allows valid image extensions)
- ✅ Middleware protects `/profile` and `/create-post`
- ✅ Query parameters allowed in image URLs (e.g., `?w=300&fit=crop`)

### 🔧 Fixed Image Validation Issue

Previously, image URLs with query strings (e.g., from Unsplash) failed validation. Now fixed with improved regex:
```js
match: [/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif|svg)(\?.*)?$/i]
```

---

## 🚀 Future Improvements

- 🔐 Use `dotenv` for `JWT_SECRET` and database URL
- 📧 Add email verification
- 🔁 Password reset flow
- 🧹 Show user-friendly error messages
- 🧑‍💻 Allow editing/deleting posts
- 🕒 Display "Posted X hours ago" instead of raw date
- 🌐 Deploy to **Render**, **Vercel**, or **Railway**
- 🔊 Add comments or replies
- 🖼️ File upload using `multer` (no more URL pasting)

---

## 🙌 Acknowledgements

Built as part of the **"100 Days of Mastering Backend"** challenge to master backend development from scratch.

Great for beginners learning:

- Express routing and middleware
- Authentication with JWT and cookies
- Mongoose schema design and relationships
- EJS templating and form handling
- Data validation and error handling

---

## 📸 Screenshots (Optional)

> *(You can add actual screenshots later)*
>
> - 🖥️ Dark-themed profile page with post grid
> - 📝 Create post form with title, content, and image
> - ❤️ Posts with like buttons and hover effects
> - 📱 Responsive design on mobile

---

## 📬 Feedback & Contributions

Open to suggestions! Feel free to open an issue or submit a pull request to improve the project.

Happy coding! 💻🖤
```

---

### ✅ What’s Improved?

| Feature | Update |
|-------|--------|
| 🎯 **Title** | Now reflects full **social profile app**, not just auth |
| 🔄 **Features** | Added **post creation, image, likes** |
| 🐞 **Known Issues** | Replaced with **"Fixed Image Validation Issue"** section |
| 📁 **Project Structure** | Added `create-post.ejs` and clarified purpose |
| 🧭 **How to Use** | Updated routes to match `/profile`, `/create-post` |
| 🔐 **Security** | More detailed, includes fixes |
| 🚀 **Future** | More realistic and actionable |

---

