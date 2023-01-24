// ------------------ Modules ----------------------- //

const axios = require('axios');
const mongoose = require('mongoose');
const https = require('https');
require('dotenv').config();

// --------------------- Helper Functions ---------------------- //

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const getDate = function () {
  const today = new Date();
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timeZone: 'America/Los_Angeles',
  };
  return today.toLocaleDateString('en-US', options);
};

// ------------------------ Mongoose Schemas -------------------- //

const sayingSchema = new mongoose.Schema({
  name: String,
  quote: String,
  date: String,
});
const Saying = mongoose.model('saying', sayingSchema);

const poemSchema = new mongoose.Schema({
  author: String,
  title: String,
  content: Array,
  date: String,
});

const Poem = mongoose.model('poem', poemSchema);

const jokeSchema = new mongoose.Schema({
  setup: String,
  punchline: String,
  date: String,
});

const Joke = mongoose.model('joke', jokeSchema);

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

const Recipe = mongoose.model('recipe', recipeSchema);

const highlightSchema = new mongoose.Schema({
  video: String,
  date: String,
});

const Highlight = mongoose.model('highlight', highlightSchema);


// -------------------------- GET requests ----------------------- //


const newSaying = () => {
  https.get('https://api.quotable.io/random', function (response) {
    response.on('data', function (data) {
      const quote = JSON.parse(data);
      const saying = new Saying({
        name: quote.author,
        quote: quote.content,
        date: getDate(),
      });
      saying.save();
      console.log('New quotation added');
    });
  });
};

const newPoem = () => {
  const lineCount = getRandomInt(8, 100);
  axios
    .get(`https://poetrydb.org/random,linecount/1;${lineCount}`)
    .then(response => {
      const poemData = response.data[0];
      const poem = new Poem({
        author: poemData.author,
        title: poemData.title,
        content: poemData.lines,
        date: getDate(),
      });
      poem.save();
      console.log('New poem added');
    })
    .catch(error => {
      console.log(error);
    });
};

const newJoke = () => {
  axios(
    'https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit&type=twopart'
  ).then(response => {
    const joke = new Joke({
      setup: response.data.setup,
      punchline: response.data.delivery,
      date: getDate(),
    });
    joke.save();
    console.log('New joke added');
  });
};

const newRecipe = () => {
  axios
    .get(
      'https://api.spoonacular.com/recipes/random?apiKey=690ded73385c4b61a0d2217384d64b16&number=1&tags=main%20course',
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
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
        date: getDate(),
      });
      recipe.save();
      console.log('New recipe added');
    });
};

const newHighlight = () => {
  axios
    .get(
      'https://www.scorebat.com/video-api/v3/feed/?token=MTcxODhfMTY0OTgwMzQ4MF9iYWJiMDQ4ZDQzYWI3ZjcxZjdmZWUxY2NiNjVkMTcwMTAzZjcwYjFl'
    )
    .then(response => {
      const newData = response.data;
      const dataList = newData.response;
      const newList = [];
      dataList.forEach(item => {
        if (
          item.competition === 'ENGLAND: Premier League' ||
          item.competition === 'ITALY: Serie A' ||
          item.competition === 'GERMANY: Bundesliga' ||
          (item.competition.includes('CHAMPIONS LEAGUE') &&
            !item.competition.includes('ASIAN'))
          // item.competition === 'INTERNATIONAL: Club Friendlies'
        ) {
          newList.push(item);
        }
      });
      console.log(newList);
      if(newList.length) {
        const randomChoice = newList[Math.floor(Math.random() * newList.length) - 1];
        console.log(randomChoice);
        const newVideo = String(randomChoice.videos[0].embed);
        const highlight = new Highlight({
          video: newVideo,
          date: getDate(),
        });
        console.log(highlight);
        highlight.save();
        console.log('New highlight added');
      }
    })
    .catch(err => console.log(err, err.message))
};


function getDailyData() {
  newPoem();
  newRecipe();
  newSaying();
  newJoke();
  newHighlight();
}

// --------------------- Add all entries to database ----------------------- //

mongoose.connect(
  process.env.DB_CONN,
  function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log('Connected');
      getDailyData();
    }
  }
);

