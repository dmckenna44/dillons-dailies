const axios = require("axios");
const mongoose = require("mongoose");
const https = require("https");
const CronJob = require("cron").CronJob;


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const getDate = function() {
  const today = new Date()
  const options = {year:'numeric', month:'numeric', day:'numeric', timeZone: 'UTC'};
  return today.toLocaleDateString('en-US', options);
};

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

//
// const newSaying = new CronJob('5 39 2 * * *', function() {
//   https.get("https://api.quotable.io/random", function(response) {
//     response.on("data", function(data) {
//       const quote = JSON.parse(data);
//       const saying = new Saying({
//         name: quote.author,
//         quote: quote.content,
//         date: getDate()
//       });
//       saying.save();
//     });
//   });
// }, null, true, 'UTC');
//
// const newPoem = new CronJob('5 39 2 * * *', function() {
//   const lineCount = getRandomInt(8, 100);
//   axios.get(`https://poetrydb.org/random,linecount/1;${lineCount}`)
//     .then(response => {
//       const poemData = response.data[0];
//       const poem = new Poem({
//         author: poemData.author,
//         title: poemData.title,
//         content: poemData.lines,
//         date: getDate()
//       });
//       poem.save();
//     })
//     .catch(error => {
//       console.log(error);
//     });
// }, null, true, 'UTC');
//
// const newJoke = new CronJob('5 39 2 * * *', function() {
// axios("https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit&type=twopart")
//   .then(response => {
//     const joke = new Joke({
//       setup: response.data.setup,
//       punchline: response.data.delivery,
//       date: getDate()
//     });
//     joke.save();
//   })
// }, null, true, 'UTC');
//
// const newRecipe = new CronJob('5  2 * * *', function() {
// axios.get("https://api.spoonacular.com/recipes/random?apiKey=690ded73385c4b61a0d2217384d64b16&tags=main%20course", {
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })
//   .then(response => {
//     const newData = response.data;
//     const retrievedRecipe = newData.recipes[0];
//     const ingredients = retrievedRecipe.extendedIngredients;
//     const sortedIngredients = [];
//     ingredients.forEach(ingredient => {
//       sortedIngredients.push(ingredient.original);
//     });
//     const recipe = new Recipe({
//       dishName: retrievedRecipe.title,
//       time: retrievedRecipe.readyInMinutes,
//       servings: retrievedRecipe.servings,
//       ingredients: sortedIngredients,
//       instructions: retrievedRecipe.instructions,
//       source: retrievedRecipe.sourceUrl,
//       imageURL: retrievedRecipe.image,
//       date: getDate()
//     })
//     recipe.save();
//     });
// }, null, true, 'UTC');
//
// const newHighlight = new CronJob('5 21 2 * * *', function() {
//   axios.get("https://www.scorebat.com/video-api/v3/feed/?token=MTcxODhfMTY0OTgwMzQ4MF9iYWJiMDQ4ZDQzYWI3ZjcxZjdmZWUxY2NiNjVkMTcwMTAzZjcwYjFl")
//     .then(response => {
//       const newData = response.data;
//       const dataList = newData.response;
//       const newList = [];
//       dataList.forEach(item => {
//         if (item.competition === "ENGLAND: Premier League" ||
//           item.competiton === "ITALY: Serie A" ||
//           item.competition === "GERMANY: Bundesliga") {
//           newList.push(item);
//         }
//       })
//       const randomChoice = newList[Math.floor(Math.random() * newList.length)];
//       const newVideo = String(randomChoice.videos[0].embed);
//       const highlight = new Highlight({
//         video: newVideo,
//         date: getDate()
//       });
//       highlight.save();
//     });
// }, null, true, 'UTC');


const newSaying = () => {
  https.get("https://api.quotable.io/random", function(response) {
    response.on("data", function(data) {
      const quote = JSON.parse(data);
      const saying = new Saying({
        name: quote.author,
        quote: quote.content,
        date: getDate()
      });
      saying.save();
      console.log(saying);
    });
  });
}


const newPoem = () => {
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
      console.log(poem);
    })
    .catch(error => {
      console.log(error);
    });
};

const newJoke = () => {
axios("https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit&type=twopart")
  .then(response => {
    const joke = new Joke({
      setup: response.data.setup,
      punchline: response.data.delivery,
      date: getDate()
    });
    joke.save();
    console.log(joke);
  });
};

const newRecipe = () => {
axios.get("https://api.spoonacular.com/recipes/random?apiKey=690ded73385c4b61a0d2217384d64b16&number=1&tags=main%20course", {
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    const newData = response.data;
    console.log(response.data);
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
    console.log(recipe);
    });
};

const newHighlight = () => {
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
      console.log(highlight);
    });
};

function getDailyData() {
  newPoem();
  newJoke();
  newHighlight();
  newRecipe();
  newSaying();
}

mongoose.connect("mongodb+srv://admin-dillon:dailydose@cluster0.szdh0.mongodb.net/LOTRquotesDB?retryWrites=true&w=majority", function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected");
    getDailyData();
  }
});
