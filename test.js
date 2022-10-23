// const dillon = {
//   firstName: "Dillon",
//   lastName: "McKenna",
//   birthYear: 1989,
//   job: "student",
//   friends: ["Tom", "Dick", "Harry"],
//   hasDriversLicense: true,
//   // calcAge: function(birthYear) {
//   //   return 2037 - birthYear;
//   // }
//
//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYear;
//   // }
//
//   calcAge: function() {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//
//   summary: function () {
//       return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and
//       he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
// }
// };
//
//
// // console.log(dillon);
//
// // console.log(dillon.lastName);
// // console.log(dillon["lastName"]);
// // console.log(dillon.calcAge());
// // console.log(dillon['calcAge'](1989));
// // console.log(dillon.calcAge(dillon.birthYear));
// dillon.calcAge();
// console.log(dillon.age);
//
// console.log(dillon.summary());


// for (let rep = 1; rep <= 10; rep++) {
//   console.log("Lifting weights repetition " + rep);
// }
//
// const dillonArray = [
//   "Dillon",
//   "McKenna",
//   2037-1989,
//   "student",
//   ["Tom", "Dick", "Harry"],
//   "hello"
// ];
//
// const newArray = [];

// for(let i = 0; i < dillonArray.length; i++){
//   if (typeof dillonArray[i] !== 'string') continue;
//   console.log(dillonArray[i], typeof dillonArray[i]);
//   newArray[i] = typeof dillonArray[i];
// }
//
// for(let i = 0; i < dillonArray.length; i++){
//   if (typeof dillonArray[i] === 'number') break;
//   console.log(dillonArray[i], typeof dillonArray[i]);
//   newArray[i] = typeof dillonArray[i];
// }

// for (let i = dillonArray.length - 1; i >= 0; i--) {
//   console.log(dillonArray[i]);
// }
//
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`------ Starting Exercise ${exercise}`);
//
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weights repetition ${rep} 💪`);
//   }
// }
//
// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weights repetition ${rep} 💪`);
//   rep++;
// }
//
// let dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);
//
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.floor(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end...');
// }

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

  newRecipe();
