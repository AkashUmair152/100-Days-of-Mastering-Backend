
---

```markdown
### 🧑‍💼 User Management System

A full-stack CRUD (Create, Read, Update, Delete) web application built with **Node.js, Express, MongoDB, and EJS**. This project allows you to manage user data through a clean, responsive, and modern dark-themed interface.

![Dark Theme Preview](https://via.placeholder.com/800x400/121212/bb86fc?text=User+Management+Dashboard)  
*Preview of the responsive dark-themed UI (placeholder image)*

---

## ✨ Features

- **Create** new users with name, profession, email, and optional profile image
- **Read** all users in a responsive card-based dashboard
- **Update** user details via an edit form
- **Delete** users with a single click
- Fully **responsive design** with mobile support
- Elegant **dark theme** using CSS variables
- Dynamic image fallback using [i.pravatar.cc](https://i.pravatar.cc)
- No frontend framework — pure HTML/CSS with EJS templating

---

## 🛠️ Tech Stack

| Layer        | Technology               |
|------------|--------------------------|
| Backend    | Node.js, Express         |
| Database   | MongoDB (via Mongoose)   |
| Frontend   | EJS (Embedded JavaScript Templates), HTML, CSS |
| Tools      | NPM, Express Middleware  |

---

## 📁 Project Structure

```

user-management/
│
├── models/
│   └── user.js               # Mongoose schema for User
├── views/
│   ├── index.ejs             # Home page (form to create user)
│   ├── read.ejs              # Display all users in cards
│   └── edit.ejs              # Form to edit user
├── public/                   # Static assets (if any)
├── app.js                    # Express server & routes
├── package.json
└── README.md

```

---

## 🚀 Setup & Installation

### 1. Clone the repository (or create project folder)
```bash
git clone https://github.com/your-username/user-management.git
cd user-management
```

### 2. Install dependencies

```bash
npm init -y
npm install express mongoose ejs
```

### 3. Start MongoDB

Make sure MongoDB is running locally:

```bash
# If using MongoDB Community Edition
sudo systemctl start mongod
```

> Or use Docker:
>
> ```bash
> docker run -d -p 27017:27017 --name mongo mongo
> ```

### 4. Start the server

```bash
node app.js
```

### 5. Open in browser

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🔧 How to Use

| Page | Description |
|------|-----------|
| `GET /` | Add a new user via form |
| `POST /create` | Submits form data to create a new user |
| `GET /read` | View all users in a responsive grid |
| `GET /edit/:id` | Edit an existing user |
| `POST /update/:id` | Update user data |
| `GET /delete/:id` | Delete a user by ID |

---

## 💡 Key Design Details

### 🎨 Dark Theme

- Uses CSS `:root` variables for consistent theming
- Smooth hover effects and transitions
- Responsive layout with media queries

### 🖼️ Image Handling

- Users can upload an image URL
- If no image is provided, fallback avatar from `i.pravatar.cc` is used:

  ```html
  <div class="user-avatar" style="background-image: url('<%= user.Image || 'https://i.pravatar.cc/150?u=' + user.userName %>');"></div>
  ```

### 📱 Responsive Design

- Grid adjusts based on screen size:
  - Desktop: 4 cards per row
  - Tablet: 3 or 2 per row
  - Mobile: 1 card full width

---

## 🐞 Future Improvements

- [ ] Add input validation & error handling
- [ ] Use Bootstrap or Tailwind for faster styling
- [ ] Add user authentication (login system)
- [ ] Implement soft delete or trash bin
- [ ] Add search/filter functionality
- [ ] Support image upload (instead of URL only)
- [ ] Add confirmation modal before delete

---

## 📄 License

This project is open-source and available for learning. You can use, modify, or fork it freely.

---

## 🙌 Acknowledgments

- Built with ❤️ using Express & MongoDB
- Icons: [i.pravatar.cc](https://i.pravatar.cc) for placeholder avatars
- Inspired by modern dashboard UIs

---

> **Happy Coding!**  
> Manage your team with elegance and simplicity.

```

---
