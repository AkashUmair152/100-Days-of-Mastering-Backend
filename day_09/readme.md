
```markdown
## day_09 of 100 days of mastering Backend development

### User Authentication App with Express.js



A simple Node.js web application built with **Express**, featuring **user registration**, **secure login**, and **session management using JWT and cookies**. This app also includes password hashing with **bcrypt** and uses **EJS** as the templating engine for server-side rendering.

---

## 🚀 Features

- ✅ **User Registration**
  - Secure password hashing using `bcrypt`
  - Data stored in MongoDB via Mongoose model
- 🔐 **Secure Login System**
  - Compares hashed passwords safely
  - JWT-based authentication
- 🍪 **Cookie-Based Session Management**
  - JWT stored in HTTP-only cookies (simulated)
  - Auto-login capability (can be extended)
- 👤 **Profile Display**
  - Renders user data after successful login
- 📤 **Logout Functionality**
  - Clears authentication token
- 🖼️ **Static File Serving & EJS Views**
  - Clean UI using EJS templates
  - Public assets (CSS, images) served statically

---

## 🛠️ Technologies Used

- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – Database (via Mongoose ODM)
- **Bcrypt** – Password hashing
- **JSON Web Tokens (JWT)** – Authentication
- **Cookie Parser** – Cookie handling
- **EJS (Embedded JavaScript)** – Templating engine
- **body-parser** – Middleware for parsing request bodies

---

## 📁 Project Structure

```
project-root/
│
├── public/               # Static assets (CSS, JS, images)
├── views/                # EJS templates (index.ejs, login.ejs, register.ejs, profile.ejs)
├── model/                # Mongoose models (user.js)
├── app.js                # Main server file
└── README.md             # This file
```

---

## 🔧 Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/user-auth-app.git
cd user-auth-app
```

### 2. Install dependencies
```bash
npm install
```

You need to have the following packages installed (already listed in your code):
- `express`
- `mongoose`
- `bcrypt`
- `jsonwebtoken`
- `cookie-parser`
- `ejs`

> 💡 If not already installed:
> ```bash
> npm install express mongoose bcrypt jsonwebtoken cookie-parser ejs
> ```

### 3. Set up MongoDB
Ensure you have MongoDB connected. Update the connection string in your app if needed:
```js
// Example (add this to your app.js)
mongoose.connect('mongodb://localhost:27017/userauth');
```

### 4. Start the server
```bash
node app.js
```

### 5. Open in browser
Visit: [http://localhost:3000](http://localhost:3000)

---

## 📝 Available Routes

| Route         | Method | Description |
|--------------|--------|-------------|
| `/`          | GET    | Home page (renders `index.ejs`) |
| `/register`  | GET    | Show registration form |
| `/register`  | POST   | Register a new user (with password hash) |
| `/login`     | GET    | Show login form |
| `/login`     | POST   | Authenticate user and show profile |
| `/logout`    | POST   | Clear token and redirect to login |
| `/public/*`  | GET    | Serve static files (CSS, JS, etc.) |

---

## 🔐 Security Notes

- Passwords are hashed using **bcrypt** (salt rounds: 10)
- JWT is signed with a secret key (`"akashUmair"` — should be in `.env` in production)
- Tokens are stored in cookies (currently not HTTP-only or secure — consider enhancement)
- No input validation shown — add validation/sanitization for production

> ⚠️ **Recommendation**: Store `JWT_SECRET` in environment variables using `.env` file.

---

## 🧪 Example Usage

1. Go to `/register` and create a new user.
2. Use the same credentials to log in via `/login`.
3. After login, you'll see your profile.
4. Click logout to clear the token.

---

## 🛑 Known Limitations / Future Improvements

- [ ] Use environment variables for secrets
- [ ] Add form validation (e.g., using `express-validator`)
- [ ] Implement flash messages for errors/success
- [ ] Make cookies HTTP-only and secure
- [ ] Add user logout across sessions
- [ ] Prevent access to login/register when already logged in
- [ ] Add password reset functionality

---

## 🙌 Author

👤 **Akash Umair**

- Email: akashumair5@gmail.com

---

## 📎 License

This project is open source and available for learning purposes.

---

> 💬 _"Built with ❤️ using Express and MongoDB"_
```

---