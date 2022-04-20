const express = require("express");
const https = require("https");
const axios = require("axios");
const app = express();
const CronJob = require("cron").CronJob;
const mongoose = require("mongoose");
const path = require("path");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");

const getDate = function() {
  const today = new Date()
  return today.toLocaleDateString();
};

// ---------------- server & database set-up ------------------------------ //

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));


app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-dillon:dailydose@cluster0.szdh0.mongodb.net/LOTRquotesDB?retryWrites=true&w=majority");

// ------------------ mongoose schemas ------------------------ //

const sayingSchema = new mongoose.Schema({
  name: String,
  quote: String,
  date: String
});
const Saying = mongoose.model("saying", sayingSchema);

const poemSchema = new mongoose.Schema({
  author: String,
  title: String,
  content: Array,
  date: String
})

const Poem = mongoose.model("poem", poemSchema);

const jokeSchema = new mongoose.Schema({
  setup: String,
  punchline: String,
  date: String
});

const Joke = mongoose.model("joke", jokeSchema);

const recipeSchema = new mongoose.Schema({
  dishName: String,
  time: Number,
  servings: Number,
  ingredients: Array,
  instructions: String,
  source: String,
  imageURL: String,
  date: String
});

const Recipe = mongoose.model("recipe", recipeSchema);

const highlightSchema = new mongoose.Schema({
  video: String,
  date: String
});

const Highlight = mongoose.model("highlight", highlightSchema);


// ------------------- cron jobs -----------------------------//

const newSaying = new CronJob('5 56 6 * * *', function() {
  https.get("https://api.quotable.io/random", function(response) {
    response.on("data", function(data) {
      const quote = JSON.parse(data);
      const saying = new Saying({
        name: quote.author,
        quote: quote.content,
        date: getDate()
      });
      saying.save();
    });
  });
}, null, true, 'UTC');

const newPoem = new CronJob('5 56 6 * * *', function() {
  const lineCount = getRandomInt(8, 100);
  axios.get(`https://poetrydb.org/random,linecount/1;${lineCount}`)
    .then(response => {
      const poemData = response.data[0];
      const poem = new Poem({
        author: poemData.author,
        title: poemData.title,
        content: poemData.lines,
        date: getDate()
      });
      poem.save();
    })
    .catch(error => {
      console.log(error);
    });
}, null, true, 'UTC');

const newJoke = new CronJob('5 56 6 * * *', function() {
axios("https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit&type=twopart")
  .then(response => {
    const joke = new Joke({
      setup: response.data.setup,
      punchline: response.data.delivery,
      date: getDate()
    });
    joke.save();
  })
}, null, true, 'UTC');

const newRecipe = new CronJob('5 56 6 * * *', function() {
axios.get("https://api.spoonacular.com/recipes/random?apiKey=690ded73385c4b61a0d2217384d64b16&tags=maincourse,appetizer", {
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    const newData = response.data;
    const retrievedRecipe = newData.recipes[0];
    const ingredients = retrievedRecipe.extendedIngredients;
    const sortedIngredients = [];
    ingredients.forEach(ingredient => {
      sortedIngredients.push(ingredient.original);
    });
    const recipe = new Recipe({
      dishName: retrievedRecipe.title,
      time: retrievedRecipe.readyInMinutes,
      servings: retrievedRecipe.servings,
      ingredients: sortedIngredients,
      instructions: retrievedRecipe.instructions,
      source: retrievedRecipe.sourceUrl,
      imageURL: retrievedRecipe.image,
      date: getDate()
    })
    recipe.save();
    });
}, null, true, 'UTC');

const newHighlight = new CronJob('5 56 6 * * *', function() {
  axios.get("https://www.scorebat.com/video-api/v3/feed/?token=MTcxODhfMTY0OTgwMzQ4MF9iYWJiMDQ4ZDQzYWI3ZjcxZjdmZWUxY2NiNjVkMTcwMTAzZjcwYjFl")
    .then(response => {
      const newData = response.data;
      const dataList = newData.response;
      const newList = [];
      dataList.forEach(item => {
        if (item.competition === "ENGLAND: Premier League" ||
          item.competiton === "ITALY: Serie A" ||
          item.competition === "GERMANY: Bundesliga") {
          newList.push(item);
        }
      })
      const randomChoice = newList[Math.floor(Math.random() * newList.length)];
      const newVideo = String(randomChoice.videos[0].embed);
      const highlight = new Highlight({
        video: newVideo,
        date: getDate()
      });
      highlight.save();
    });
}, null, true, 'UTC');


// ----------------------server routes -----------------------//

app.get("/", function(req, res) {
  console.log(getDate());
  res.render("home");
});



app.get("/quote", async function(req, res) {
  Saying.find({
    date: getDate()
  }, (err, quote) => {
    if (!err) {
      res.render("quote", {
        dailyTitle: "Notable Quotable",
        dailySubTitle: "A lil wisdom fo' yo ass.",
        content: quote[0].quote,
        author: quote[0].name
      });
    }
  })
});


app.get("/poem", function(req, res) {
  Poem.find({
    date: getDate()
  }, (err, poem) => {
    if (err) {
      console.log(err);
    } else {
      res.render("poem", {
        dailyTitle: "Daily Poem",
        dailySubTitle: "A poem a day keeps the apples away.",
        title: poem[0].title,
        author: poem[0].author,
        content: poem[0].content
      });
    }
  })
});

app.get("/joke", function(req, res) {
  Joke.find({
    date: getDate()
  }, (err, joke) => {
    if (!err) {
      res.render("joke", {
        dailyTitle: "Your daily joke",
        dailySubTitle: "Laugh, damn you!",
        setup: joke[0].setup,
        punchline: joke[0].punchline
      })
    }
  })
})


app.get("/recipe", function(req, res) {
  Recipe.find({date: getDate()}, (err, recipe) => {
    const newRecipe = recipe[0]
    res.render("recipe", {
      dailyTitle: "Your Daily Recipe",
      dailySubTitle: "Get off your lazy ass and cook!",
      dishName: newRecipe.dishName,
      time: newRecipe.time,
      servings: newRecipe.servings,
      ingredients: newRecipe.ingredients,
      instructions: newRecipe.instructions,
      source: newRecipe.source,
      imageURL: newRecipe.imageURL
    });
  })
    });

app.get("/fact", function(req, res) {
  axios.get("https://uselessfacts.jsph.pl/today.json?language=en")
    .then(response => {
      const newFact = response.data.text;
      res.render("fact", {
        dailyTitle: "Your Daily Random Fact",
        dailySubTitle: "For the pursuit of trivia.",
        fact: newFact
      });
    });
});

app.get("/soccer", function(req, res) {
  Highlight.find({date: getDate()}, (err, video) => {
    if (!err) {
      res.render("soccer", {
        dailyTitle: "Your Daily Soccer Match",
        dailySubTitle: "In a far away place, not too long ago, this happened...",
        video: video[0].video
      });
    }
  })
    });


app.get("/contact", function(req, res) {
  res.render("contact");
})

app.post("/contact", function(req, res) {
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: "dillonsdailies@outlook.com",
      pass: "Cheese06!"
    }
  });
  transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  let form = new multiparty.Form();
  let data = {};
  form.parse(req, function(err, fields) {
    console.log(fields);
    Object.keys(fields).forEach((property) => {
      data[property] = fields[property].toString();
    });
    const mail = {
      from: "dillonsdailies@outlook.com",
      to: "dmckenna05@gmail.com",
      subject: data.subject,
      text: `From: \n${data.name}\n ${data.email} \n\nMessage: \n${data.message}`
    };
    console.log(mail);
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send("Something went wrong.");
      } else {
        res.status(200).send("Email successfully sent!")
      }
    });
  });

  res.redirect("contact");
})

app.get("/about", function(req, res) {
  res.render("about");
})





let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started successfully.");
})
