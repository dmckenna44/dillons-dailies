////////////////////////////////////////////////////////////////////////
// ------------------------ DOM Elements ---------------------------- //
////////////////////////////////////////////////////////////////////////

const queryDate = document.querySelector('#archive-search-bar');
const searchBtn = document.querySelector('.search-btn');
const resultsOptions =  document.querySelector('#result-options');
const returnToResults = document.querySelector('#return-to-results');

const poemLink = document.querySelector('#poem');
const recipeLink = document.querySelector('#recipe');
const quoteLink = document.querySelector('#quote');
const highlightLink = document.querySelector('#highlight');
const jokeLink = document.querySelector('#joke');

const selectedDisplay = document.querySelector('#selected-result');

let currentItems = {};



////////////////////////////////////////////////////////////////////////////
// ----------------------- Event Listeners ----------------------------- //
///////////////////////////////////////////////////////////////////////////

returnToResults.addEventListener('click', function(e) {
    selectedDisplay.classList.add('hidden');
    resultsOptions.classList.remove('hidden');
})

searchBtn.addEventListener('click', async function(e) {
    const date =  queryDate.value.replaceAll('/', '-');
    const response = await fetch(`http://localhost:3000/archive/${date}`);
    const data = await response.json();
    currentItems = data;
    console.log(data);
})

poemLink.addEventListener('click', function(e) {
    selectedDisplay.childNodes.forEach(node => node.remove())
    console.log(currentItems);
    const lines = document.createElement('div');
    selectedDisplay.insertAdjacentHTML('beforeend',
    `<div class="container-fluid pb-3"> 
    <div class="card mx-auto mb-5" style="width: 50%;">
    <div class="card-body card-background">
    <div class="container-fluid py-4 poem-container">
    <h2 class="card-title page-text">${currentItems.poem.title}</h2>
    <h4 class="card-subtitle mb-4 page-text">by ${currentItems.poem.author}</h4>
    </div>
    </div>
    </div>
    </div>`
    )
    4/18/2022

    currentItems.poem.content.forEach(el => {
        const line = document.createElement('p');
        line.classList.add('card-text');
        line.classList.add('page-text');
        line.textContent = el;
        document.querySelector('.poem-container').insertAdjacentElement('beforeend', line)
    })

    selectedDisplay.classList.remove('hidden');
    resultsOptions.classList.add('hidden');

})

jokeLink.addEventListener('click', function(e) {

})

recipeLink.addEventListener('click', function(e) {

})

highlightLink.addEventListener('click', function(e) {

})

quoteLink.addEventListener('click', function(e) {

})



