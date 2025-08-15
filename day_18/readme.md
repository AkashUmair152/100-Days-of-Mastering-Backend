
---

### ✅ `README.md`

```markdown
# Backend Server with Node.js & MongoDB

A simple backend server setup using **Node.js**, **Express (implied)**, and **MongoDB** with Mongoose ODM. This project demonstrates a clean structure for connecting to a MongoDB database using environment variables and ES modules.

---

## 📦 Features

- ✅ **MongoDB Connection** using `mongoose`
- 🔐 Secure environment variable management with `dotenv`
- 🧩 Modular code structure (`/db`, `/constants`, etc.)
- 🚀 ES6+ `import/export` syntax (ES Modules)
- 🛡 Error handling for DB connection failures

---

## 🛠️ Tech Stack

- **Node.js** – Runtime environment
- **MongoDB Atlas** – Cloud database
- **Mongoose** – MongoDB ODM
- **Dotenv** – Environment variable loading
- **ES Modules** – Modern JavaScript modules

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of your project:

```env
MONGODB_URI=mongodb+srv://akashumair5:Akash%40922@akash.4gzrmzd.mongodb.net
DB_NAME=your_database_name
```

> 🔒 **Important**:  
>
> - The `@` in the password must be URL-encoded as `%40` to avoid parsing errors.
> - Never commit `.env` to version control.

### 4. Run the Server

```bash
npm run dev
```

> This assumes you have a script in `package.json` like:
>
> ```json
> "scripts": {
>   "dev": "nodemon src/index.js"
> }
> ```

You should see:

```
Mongo DB is connected Successfully cluster0.abc123.mongodb.net
```

---

## 🗂 Project Structure

```
project-root/
│
├── src/
│   ├── db/
│   │   └── index.js        # DB connection logic
│   └── index.js            # Entry point
│
├── constants.js            # Shared constants (e.g., DB_NAME)
├── .env                    # Environment variables (ignored in Git)
├── package.json
└── README.md
```

---

## ⚠️ Troubleshooting

### `querySrv ENOTFOUND _mongodb._tcp.922`

- This means the MongoDB URI is malformed.
- ✅ Fix: Ensure special characters (like `@`) in the password are URL-encoded (`%40`).
- ✅ Verify your MongoDB Atlas cluster URL is correct.

### `SyntaxError: Cannot use import statement outside a module`

- Add `"type": "module"` to your `package.json`:

  ```json
  {
    "type": "module"
  }
  ```

---

## 🌐 Environment Management (Optional)

This project uses `dotenv` for environment variables.  
For advanced observability, versioning, and syncing of envs, consider [**DotenvX Radar**](https://dotenvx.com/radar):

> 🔍 **Radar** provides:
>
> - **Observability**: See exactly which env vars are loaded at runtime.
> - **Versioning**: Track changes and roll back safely.
> - **Backups**: Automatically encrypt and store every environment.
> - **Sync**: Keep envs in sync across team, CI, and production.

> Radar is an optional commercial extension for Dotenv/x.

---

## 📝 License

MIT © ### Akash Umair

```

---
