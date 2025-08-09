
---

### ✅ `Day_13 of 100 days of Mastering Backend`

```markdown
# 🖼️ Image Gallery – Node.js & Express

A modern, dark-themed image gallery built with **Node.js**, **Express**, **MongoDB (Mongoose)**, **Multer**, and **EJS templating**. Upload, view, and manage images with a sleek user interface.


---

## ✨ Features

- 📤 Upload images (JPG, PNG, GIF)
- 🗑️ Delete images from gallery
- 🌑 Sleek dark theme with smooth animations
- 📱 Fully responsive design (mobile-friendly)
- 🖼️ Modern CSS Grid layout
- 💾 Images stored locally in `public/images/`
- 🛢️ Metadata saved in MongoDB using Mongoose
- 🔐 Built with Express, EJS, and Multer

---

## 🛠️ Tech Stack

| Technology     | Purpose |
|----------------|--------|
| **Node.js**    | JavaScript runtime |
| **Express**    | Web framework |
| **EJS**        | Embedded JavaScript templating |
| **Multer**     | Handle file uploads |
| **Mongoose**   | MongoDB ODM (Object Data Modeling) |
| **MongoDB**    | Database for storing image metadata |
| **Bootstrap 5**| Responsive styling |
| **Font Awesome**| Icons |

---

## 🚀 How to Run Locally

### 1. Clone or navigate to project
```bash
cd day_13
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start MongoDB

Make sure MongoDB is running locally:

```bash
mongod
```

> 💡 On Windows, you may need to run `net start MongoDB` or ensure the service is started.

### 4. Start the server

```bash
node index.js
```

Or with `nodemon` (if installed):

```bash
npx nodemon index.js
```

### 5. Open in browser

Visit: [http://localhost:3000](http://localhost:3000)

---

## 📂 Project Structure

```
day_13/
├── models/
│   └── Image.js           # Mongoose model for image metadata
├── public/
│   ├── images/            # Uploaded images stored here
│   ├── javascript/        # (Optional) Custom JS
│   └── stylesheet/        # (Optional) Custom CSS
├── views/
│   ├── index.ejs          # Gallery homepage
│   └── upload.ejs         # Upload form page
├── index.js               # Main server file
└── readme.md              # This file
```

---

## 🧪 Usage

- **View Gallery**: Go to [http://localhost:3000](http://localhost:3000)
- **Upload Image**: Click "Upload" → choose file → submit
- **Delete Image**: Click "Delete" on any image card

---

## 🧰 Future Improvements (Optional)

- 🌞🌚 Add light/dark mode toggle
- 🔍 Image search or tags
- 🖼️ Image preview modal
- ☁️ Cloud storage (e.g., Cloudinary)
- 🔐 User authentication

---

## 🙌 Credits

Built during 100 Days of Backend Mastery.

Author: Akash  
Date: 2025

```
