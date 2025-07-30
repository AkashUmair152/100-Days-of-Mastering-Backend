const express = require('express');
const path = require('path');
const app = express();
const fs = require('fs');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set("view engine", "ejs");


app.get('/', (req, res) => {
    const dir = './files';

    // Ensure directory exists
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    fs.readdir(dir, (err, filenames) => {
        if (err) {
            console.error('Error reading directory:', err);
            return res.status(500).send('Unable to read tasks');
        }

        // Convert filenames to { title, description } objects
        const files = filenames
            .filter(filename => filename.endsWith('.txt')) // Only .txt files
            .map(filename => {
                const title = filename.replace('.txt', ''); // Remove extension
                const filepath = `${dir}/${filename}`;
                const description = fs.readFileSync(filepath, 'utf-8'); // Read content
                return { title, description };
            });

        res.render('index', { files });
    });
});

app.post('/create', (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.description, () => {
        res.redirect('/');
    });
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
