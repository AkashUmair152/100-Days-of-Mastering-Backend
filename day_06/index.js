const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  fs.readdir(`./files`, (err, files)=>{

    res.render('index', {files: files});
  })
  
});

app.post("/create", (req, res) => {
  const title = req.body.title;
  const dec = req.body.description;

  // Remove spaces from title and create filename
  const filename = title.split(" ").join("-") + ".txt";

  fs.writeFile(`./files/${filename}`, dec, (err) => {
    res.redirect("/");
  });
});

app.get("/task/:taskname", (req, res) => {
  const taskname = req.params.taskname;
  fs.readFile(`./files/${taskname}`, 'utf8', (err, data) => {
    res.render('task', { taskname: taskname, content: data });
  })
});

app.get("/edit/:taskname", (req, res) => {
 
  const taskname = req.params.taskname;
  res.render("edit", { taskname: taskname});

});

app.post("/edit", (req, res) => {
  const prevName = req.body.PreviceName;
  let newName = req.body.NewName;
  newName = newName.split(" ").join("-") + ".txt"; // Ensure new name is formatted correctly
  const description = req.body.description;
   fs.rename(`./files/${prevName}`, `./files/${newName}`, (err) => {
})
  fs.writeFile(`./files/${newName}`, description, (err) => {
    res.redirect("/");
  });
});

app.get("/delete/:taskname", (req, res) => {
  const taskname = req.params.taskname;

  fs.unlink(`./files/${taskname}`, (err) => {
    res.redirect("/");
  });
});


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});