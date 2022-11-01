
// ---------------------- Modules & packages ------------------------- //

const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
const path = require("path");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require('dotenv').config();
const cors =  require('cors');
const app = express();


// ------------------------ Helper Functions ----------------------------- //

const getDate = function () {
  const today = new Date();
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    timeZone: "America/Los_Angeles",
  };
  return today.toLocaleDateString("en-US", options);
};
// console.log(getDate());

// ---------------- server & database set-up ------------------------------ //

app.set("view engine", "ejs");
app.set("views", path.join(__dirname + "/views"));

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.static("public"));

mongoose.connect(
  process.env.DB_CONN,
  function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log('Connected to DB');
    }
  }
);

// ------------------ mongoose schemas ------------------------ //

const sayingSchema = new mongoose.Schema({
  name: String,
  quote: String,
  date: String,
});
const Saying = mongoose.model("saying", sayingSchema);

const poemSchema = new mongoose.Schema({
  author: String,
  title: String,
  content: Array,
  date: String,
});

const Poem = mongoose.model("poem", poemSchema);

const jokeSchema = new mongoose.Schema({
  setup: String,
  punchline: String,
  date: String,
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
  date: String,
});

const Recipe = mongoose.model("recipe", recipeSchema);

const highlightSchema = new mongoose.Schema({
  video: String,
  date: String,
});

const Highlight = mongoose.model("highlight", highlightSchema);

// ----------------------server routes -----------------------//

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/quote", async function (req, res) {
  Saying.find(
    {
      date: getDate(),
    },
    (err, quote) => {
      if (!err) {
        res.render("quote", {
          dailyTitle: "Notable Quotable",
          dailySubTitle: "A little wisdom never hurts.",
          content: quote[0].quote,
          author: quote[0].name,
        });
      }
    }
  );
});

app.get("/poem", function (req, res) {
  Poem.find(
    {
      date: getDate(),
    },
    (err, poem) => {
      if (err) {
        console.log(err);
      } else {
        res.render("poem", {
          dailyTitle: "Daily Poem",
          dailySubTitle: "A poem a day keeps the apples away.",
          title: poem[0].title,
          author: poem[0].author,
          content: poem[0].content,
        });
      }
    }
  );
});

app.get("/joke", function (req, res) {
  Joke.find(
    {
      date: getDate(),
    },
    (err, joke) => {
      if (!err) {
        res.render("joke", {
          dailyTitle: "Your daily joke",
          dailySubTitle: "Laugh, damn you, laugh!",
          setup: joke[0].setup,
          punchline: joke[0].punchline,
        });
      }
    }
  );
});

app.get("/recipe", function (req, res) {
  Recipe.find({ date: getDate() }, (err, recipe) => {
    const newRecipe = recipe[0];
    res.render("recipe", {
      dailyTitle: "Your Daily Recipe",
      dailySubTitle: "Get off your lazy ass and cook!",
      dishName: newRecipe.dishName,
      time: newRecipe.time,
      servings: newRecipe.servings,
      ingredients: newRecipe.ingredients,
      instructions: newRecipe.instructions,
      source: newRecipe.source,
      imageURL: newRecipe.imageURL,
    });
  });
});

app.get("/fact", function (req, res) {
  axios
    .get("https://uselessfacts.jsph.pl/today.json?language=en")
    .then((response) => {
      const newFact = response.data.text;
      res.render("fact", {
        dailyTitle: "Your Daily Random Fact",
        dailySubTitle: "For the pursuit of trivia.",
        fact: newFact,
      });
    });
});

app.get("/soccer", function (req, res) {
  Highlight.find({ date: getDate() }, (err, video) => {
    if (!err) {
      res.render("soccer", {
        dailyTitle: "Your Daily Soccer Match",
        dailySubTitle:
          "In a far away place, not too long ago, this happened...",
        video: video[0].video,
      });
    }
  });
});

app.get("/contact", function (req, res) {
  res.render("contact");
});

app.post("/contact", function (req, res) {
  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.CONTA,
    },
  });
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  let form = new multiparty.Form();
  let data = {};
  form.parse(req, function (err, fields) {
    Object.keys(fields).forEach((property) => {
      data[property] = fields[property].toString();
    });
    const mail = {
      from: "dillonsdailies@outlook.com",
      to: "dmckenna05@gmail.com",
      subject: data.subject,
      text: `From: \n${data.name}\n ${data.email} \n\nMessage: \n${data.message}`,
    };
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        res.redirect("failure");
      } else {
        res.redirect("success");
      }
    });
  });
});

// app.get("/soccer", function (req, res) {
//   Highlight.find({ date: getDate() }, (err, video) => {
//     if (!err) {
//       res.render("soccer", {
//         dailyTitle: "Your Daily Soccer Match",
//         dailySubTitle:
//           "In a far away place, not too long ago, this happened...",
//         video: video[0].video,
//       });
//     }
//   });
// });

app.get("/archive/:date", cors(), function(req, res) {
  const date = req.params.date;
  const queryDate = date.replaceAll('-', '/');
  console.log(queryDate);
  const fullResponse = {};

  Joke.findOne({date: queryDate}, (err, joke) => {
    err ? console.log(err) : fullResponse.joke = joke;
  })
  Highlight.findOne({date: queryDate}, (err, highlight) => {
    err ? console.log(err) : fullResponse.highlight = highlight;
  })
  Saying.findOne({date: queryDate}, (err, quote) => {
    err ? console.log(err) : fullResponse.quote = quote;
  })
  Recipe.findOne({date: queryDate}, (err, recipe) => {
    err ? console.log(err) : fullResponse.recipe = recipe;
  })
  Poem.findOne({date: queryDate}, (err, poem) => {
    err ? console.log(err) : fullResponse.poem = poem;
  })

  setTimeout(() => {
    console.log(fullResponse);
    res.send(fullResponse);
  }, 1000)

})

app.get("/archive", function(req, res) {
  res.render("archive");
  function findEntries() {
    return;
  }
})

app.get("/extras", function (req, res) {
  res.render("extras");
});

app.get("/forge", function (req, res) {
  res.render("forge");
});

app.get("/lotr", function (req, res) {
  res.render("lotr");
});

app.get("/about", function (req, res) {
  res.render("about");
});

app.get("/success", function (req, res) {
  res.render("success");
});

app.get("/failure", function (req, res) {
  res.render("failure");
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("Server has started successfully.");
});
