////////////////////////////////////////////////////////////////////////////////////////////////
// ----------------------------------- React Notes ------------------------------------------ //
////////////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
import { ReactDOM } from "react";

class App extends React.Component {
  // State is stored in the form of an object within a top-level component
  constructor() {
    super();
    this.state = {
      cohortNumbers: [1, 2, 3, 4, 5, 6]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  // Data should be passed from top-level components down to child components
  // render method is required for all react class components
  render() {
    // Write JS code inside render method but outside return statement
    const boxes = [];
    for (let i = 0; i < this.state.cohortNumbers.length; i++) {
      boxes.push(<Box 
                  number={this.state.cohortNumbers[i]} 
                  handleClick={this.handleClick}
                  handleDelete={this.handleDelete}
                  key={i}
                   />) // JSX attributes get passed to child components via the props object
    }

    return(
      <section>
        {boxes}
      </section>
    )
  }

  handleClick(event) {
    console.log("I've been clicked");
    const newCohortNumbers = this.state.cohortNumbers.map(num => 54);
    this.setState({ cohortNumbers: newCohortNumbers });
  }

  handleDelete(event) {
    console.log('deleted');
    this.setState({cohortNumbers: []})
  }
}



class Box extends React.Component {

  componentDidMount(){
    console.log('componentMount fired');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate fired');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount fired');
  }

  render() {
    console.log('this.props', this.props);
    return (
      <div>
      <p>Cohort {this.props.number} IS awesome!</p>
      <button onClick={this.props.handleClick} >Click Me</button>
      <button onClick={this.props.handleDelete}>Delete</button>
    </div>
    )
  }
}


ReactDom.render(<App />, document.querySelector('#root'));


// --------------------- Components as Functions -------------------------- //

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name} </h1>
  }
}

function Welcome(props) {
  return <h1>Hello, {props.name} </h1>
}

const Welcome = props => (
  <h1>Hello, {props.name} </h1>
)

// ----- useState
// returns an array containing a piece of the state and a function that can be used to update it
const [state, updateState] = React.useState('initial state'); 

// ----- useEffect
// Equivalent of lifecycle methods componentDidMount, componentDidUpdate and componentWillUnmount
// Functions passed into useEffect will run each time the component re-renders (unless otherwise specified)
React.useEffect(() => {
  console.log('component updated');
})

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