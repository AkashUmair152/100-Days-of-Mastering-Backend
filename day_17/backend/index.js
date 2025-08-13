
import express from "express";
import cors from "cors";
const app = express();
const port = process.env.PORT || 3000; 
app.use(cors());

// Optional: More secure - only allow specific origin

app.use(cors({
  origin: "http://localhost:5173" // Vite default
}));

app.use(express.json());

const jokes = [
  {
    id: 1,
    title: "Programmer's Breakfast",
    content: "I'm a JavaScript developer — I don't need breakfast, I just need coffee and donuts."
  },
  {
    id: 2,
    title: "Why Don't Scientists Trust Atoms?",
    content: "Because they make up everything!"
  },
  {
    id: 3,
    title: "The Invisible Man",
    content: "I saw a sign that said 'Invisible Paint on Sale' — I thought, 'That's remarkable!' But I couldn't see the price."
  },
  {
    id: 4,
    title: "Mathematician's Nightmare",
    content: "Why was the equal sign so humble? Because it knew it wasn't less than or greater than anyone else."
  },
  {
    id: 5,
    title: "Puns for the Win",
    content: "I used to be a baker, but I couldn't make enough dough."
  }
];


app.get("/", (req, res)=>{
    res.send("Hello World ");
})

app.get("/api/jokes",(req,res)=>{

    res.send(jokes);

});

app.listen(port, ()=>{
    console.log("Server is Running at http://localhost:3000/");
})