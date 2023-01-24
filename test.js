////////////////////////////////////////////////////////////////////////////////////////////////
// ----------------------------------- React Notes ------------------------------------------ //
////////////////////////////////////////////////////////////////////////////////////////////////

const { captureRejectionSymbol } = require("nodemailer/lib/xoauth2");

// import { set } from "mongoose";
// import { captureRejectionSymbol } from "nodemailer/lib/xoauth2";
// import React from "react";
// import { ReactDOM } from "react";

// class App extends React.Component {
//   // State is stored in the form of an object within a top-level component
//   constructor() {
//     super();
//     this.state = {
//       cohortNumbers: [1, 2, 3, 4, 5, 6]
//     };
//     this.handleClick = this.handleClick.bind(this);
//     this.handleDelete = this.handleDelete.bind(this);
//   }
  
//   // Data should be passed from top-level components down to child components
//   // render method is required for all react class components
//   render() {
//     // Write JS code inside render method but outside return statement
//     const boxes = [];
//     for (let i = 0; i < this.state.cohortNumbers.length; i++) {
//       boxes.push(<Box 
//                   number={this.state.cohortNumbers[i]} 
//                   handleClick={this.handleClick}
//                   handleDelete={this.handleDelete}
//                   key={i}
//                    />) // JSX attributes get passed to child components via the props object
//     }

//     return(
//       <section>
//         {boxes}
//       </section>
//     )
//   }

//   handleClick(event) {
//     console.log("I've been clicked");
//     const newCohortNumbers = this.state.cohortNumbers.map(num => 54);
//     this.setState({ cohortNumbers: newCohortNumbers });
//   }

//   handleDelete(event) {
//     console.log('deleted');
//     this.setState({cohortNumbers: []})
//   }
// }



// class Box extends React.Component {

//   componentDidMount(){
//     console.log('componentMount fired');
//   }

//   componentDidUpdate() {
//     console.log('componentDidUpdate fired');
//   }

//   componentWillUnmount() {
//     console.log('componentWillUnmount fired');
//   }

//   render() {
//     console.log('this.props', this.props);
//     return (
//       <div>
//       <p>Cohort {this.props.number} IS awesome!</p>
//       <button onClick={this.props.handleClick} >Click Me</button>
//       <button onClick={this.props.handleDelete}>Delete</button>
//     </div>
//     )
//   }
// }


// ReactDom.render(<App />, document.querySelector('#root'));


// // --------------------- Components as Functions -------------------------- //

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name} </h1>
//   }
// }

// function Welcome(props) {
//   return <h1>Hello, {props.name} </h1>
// }

// const Welcome = props => (
//   <h1>Hello, {props.name} </h1>
// )

// // ----- useState
// // returns an array containing a piece of the state and a function that can be used to update it
// const [state, updateState] = React.useState('initial state'); 

// // ----- useEffect
// // Equivalent of lifecycle methods componentDidMount, componentDidUpdate and componentWillUnmount
// // Functions passed into useEffect will run each time the component re-renders (unless otherwise specified)
// React.useEffect(() => {
//   console.log('component updated');
// })

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

// const newRecipe = () => {
//     axios
//       .get(
//         'https://api.spoonacular.com/recipes/random?apiKey=690ded73385c4b61a0d2217384d64b16&number=1&tags=main%20course',
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       )
//       .then(response => {
//         const newData = response.data;
//         const retrievedRecipe = newData.recipes[0];
//         const ingredients = retrievedRecipe.extendedIngredients;
//         const sortedIngredients = [];
//         ingredients.forEach(ingredient => {
//           sortedIngredients.push(ingredient.original);
//         });
//         const recipe = new Recipe({
//           dishName: retrievedRecipe.title,
//           time: retrievedRecipe.readyInMinutes,
//           servings: retrievedRecipe.servings,
//           ingredients: sortedIngredients,
//           instructions: retrievedRecipe.instructions,
//           source: retrievedRecipe.sourceUrl,
//           imageURL: retrievedRecipe.image,
//           date: getDate(),
//         });
//         recipe.save();
//         console.log('New recipe added');
//       });
//   };

//   newRecipe();


// const getDate = function () {
//   const today = new Date();
//   const options = {
//     year: "numeric",
//     month: "numeric",
//     day: "numeric",
//     time: "numeric",
//     timeZone: "UTC",
//   };
//   return today.toLocaleDateString("en-US", options);
// };
// console.log(getDate());
// console.log(new Date());
// require('dotenv').config();
// console.log(process.env.DB_CONN);


//////////////////////////////////////////////////////
// flattenDeep - recursively flatten a nested array //
//////////////////////////////////////////////////////

const flattenDeep = (array) => {
  const flat = [];
  for (let element of array) {
    Array.isArray(element)
      ? flat.push(...flattenDeep(element))
      : flat.push(element);
  }
  return flat;
}




//////////////////////////////////////////////////////////////////////////
// sumNestedArrays - recursively add all the integers in a nested array //
//////////////////////////////////////////////////////////////////////////

const sumNestedarrays1 = (array) => {
  let sum = 0
  for (let element of array) {
    Array.isArray(element)
      ? (sum += sumNestedarrays1(element))
      : (sum += element);
  }
  return sum;
}

// Using reduce
const sumNestedArrays = (array) => {
  return array.reduce((acc, curr) => {
    return Array.isArray(curr)
      ? acc + sumNestedArrays(curr)
      : acc + captureRejectionSymbol;
  }, 0);
};

///////////////////////////////////////////////////////////
// linkedListLength - return the length of a linked list //
///////////////////////////////////////////////////////////

const linkedListLenghRecursive = (head, count = 0) => {
  if (!head) return count;
  return linkedListLenghRecursive(head.next, ++count);
}

////////////////////////////////////////////////////////////
// bstHeight - return the height of a binary search tree //
///////////////////////////////////////////////////////////

const bstHeight = (root) => {
  if (!root) return -1;
  return 1 + Math.max(bstHeight(root.left), bstHeight(root.right));
}

// This is a test, macs are stupid

// users collection
// const user = {
//   id: 'ObjectID etc etc',
//   username: String,
//   password: String
// }

// const game = {
//   id: 'ObjectId etc',
//   user_id: {type: Object.Schema.Type, ref: 'user'},
//   name: String,
//   password: String,
//   categories: [
//     String, String, String, String, String
//   ],
//   questions: [
//     String, String, String, String, String
//   ],
//   answers: [
//     String, String, String, String, String
//   ],
//   players: []

// }

// const array23 = [3, 4, 9, 1, 23, 14, 276, 52, 18, 12]

// const set23 = new Set(...array23);
// console.log(set23);


const apiURL = 'https://api.api-ninjas.com/v1/trivia?category=sportsleisure&limit=5'
const apiKey = '9Rbb1WK7TcmSnqfbod1z+g==X3Oe21LmDSY26HOF'

const getTrivia2 = async (key) => {
  const finalCategories = [];
  const finalClues = [];
  const categoryChoices = {
    'artliterature': 'Art & Literature',
    'language': 'Language',
    'sciencenature': 'Science & Nature',
    'general': 'General Knowledge',
    'fooddrink': 'Food & Drink', 
    'peopleplaces': 'People & Places',
    'geography': 'Geography',
    'historyholidays': 'History',
    'entertainment': 'Entertainment',
    'toysgames': 'Toys & Games',
    'music': 'Music',
    'mathematics': 'Mathematics',
    'religionmythology': 'Religion & Myth',
    'sportsleisure': 'Sports & Leisure'
  }

  function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
      return ele != value;
    });
  }

  const createNameList = function () {
  let cats = Object.keys(categoryChoices);
  const choiceList = [];
  for (i = 0; i < 4; i++) {
    const cat = cats[Math.floor(Math.random() * cats.length)];
    choiceList.push(cat);
    cats = arrayRemove(cats, cat);
  }
  // shuffleArray(choiceList);
  return choiceList;
};

 const catChoices = createNameList();
 console.log('cat choices', catChoices)
//  catChoices.forEach(category => {
//   const clueObj = {};
//   const qArr = [];
//   const aArr = [];
//   clueObj['category'] = categoryChoices[category];
//   fetch(`https://api.api-ninjas.com/v1/trivia?category=${category}&limit=5`, {
//     method: 'GET',
//     headers: {
//       'X-Api-Key': key
//     }
//   }).then(response => {
//       response.json()
//       // data.forEach(clue => {
//       //   qArr.push(clue.question);
//       //   aArr.push(clue.answer)
//       // })
//       // clueObj['questions'] = qArr;
//       // clueObj['answers'] = aArr;
//       // finalClues.push(clueObj);
//     }).then(data => console.log(data))
//  })
 console.log(finalClues)
}
  
getTrivia2(apiKey);

// const apiURL = 'https://api.api-ninjas.com/v1/trivia?category=sportsleisure&limit=5'
// const apiKey = '9Rbb1WK7TcmSnqfbod1z+g==X3Oe21LmDSY26HOF'

const getTrivia = async (url, key) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'X-Api-Key': key
    }
  })
  const data = await response.json()
  console.log(data);
}

getTrivia(apiURL, apiKey);