const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = [`All will go well with your new project.`, `Many will travel to hear you speak.`, 
`The harder you work, the luckier you get.`, `Go take a rest; you deserve it.`, 
`You have an unusual equipment for success, use it properly.`];

let randomArticle = Math.floor(Math.random() * fortunes.length);
let randomFortune = fortunes[randomArticle];

res.status(200).send(randomFortune);

})


const {getAnime, deleteAnime, createAnime, updateAnime} = require(`./controller.js`)

app.get(`/api/anime`, getAnime);
app.delete(`/api/anime/:id`, deleteAnime);
app.post(`/api/anime`, createAnime);
app.put(`/api/anime/:id`, updateAnime)


app.listen(4000, () => console.log("Server running on 4000"));
