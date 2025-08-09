// index.js
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/galleryDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.log('❌ DB Error:', err));

// View engine (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Required for EJS

// Static files
app.use(express.static('public'));

// Body parser
app.use(express.urlencoded({ extended: true }));

// Session for messages
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false
}));

app.use((req, res, next) => {
  res.locals.message = req.session.message || '';
  req.session.message = '';
  next();
});

// Image model
const Image = require('./models/images');

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Images only!'), false);
    }
  },
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB
});

// Routes

// Home - Show gallery
app.get('/', async (req, res) => {
  try {
    const images = await Image.find().sort({ uploadDate: -1 });
    res.render('index', { images, title: '🖼️ Image Gallery' });
  } catch (err) {
    req.session.message = 'Failed to load images.';
    res.redirect('/');
  }
});

// Upload form
app.get('/upload', (req, res) => {
  res.render('upload', { title: '📤 Upload Image' });
});

// Handle upload
app.post('/upload', upload.single('image'), async (req, res) => {
  if (!req.file) {
    req.session.message = 'Please upload a valid image.';
    return res.redirect('/upload');
  }

  try {
    const image = new Image({
      filename: req.file.filename,
      originalName: req.file.originalname,
      path: `/images/${req.file.filename}`,
      contentType: req.file.mimetype
    });

    await image.save();
    req.session.message = '✅ Image uploaded!';
    res.redirect('/');
  } catch (err) {
    req.session.message = '❌ Upload failed.';
    res.redirect('/upload');
  }
});

// Delete image
app.post('/delete/:id', async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) return res.redirect('/');

    // Delete file from disk
    const fs = require('fs');
    const filePath = path.join(__dirname, 'public', image.path);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    await Image.findByIdAndDelete(req.params.id);
    req.session.message = '🗑️ Image deleted!';
    res.redirect('/');
  } catch (err) {
    req.session.message = 'Delete failed.';
    res.redirect('/');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});