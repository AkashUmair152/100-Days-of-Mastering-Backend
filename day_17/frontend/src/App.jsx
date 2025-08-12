import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    // Fetch jokes from the backend
    axios
      .get("http://localhost:3000/jokes")
      .then((response) => {
        setJokes(response.data);
        console.log(response);
      })
      .catch((err) => {
        console.error("Error fetching jokes:", err);
        
      });
  }, []); // Empty dependency array = runs once on mount

  return (
    <>
      <h1>Jokes</h1>
      <p>jokes: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id} className="container">
          <h2 className="title">{joke.title}</h2>
          <p className="content">{joke.content}</p>
        </div>
      ))}
    </>
  );
};

export default App;