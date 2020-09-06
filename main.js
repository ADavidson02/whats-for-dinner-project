var side = [
  'Miso Glazed Carrots',
  'Coleslaw',
  'Garden Salad',
  'Crispy Potatoes',
  'Sweet Potato Tots',
  'Coconut Rice',
  'Caeser Salad',
  'Shrimp Summer Rolls',
  'Garlic Butter Mushrooms',
  'Hush Puppies'
];

var main = [
  'Lasagna',
  'Pineapple Chicken',
  'Shakshuka',
  'Thai Yellow Curry',
  'Bibimbap',
  'Chicken Parmesean',
  'Butternut Squash Soup',
  'BBQ Chicken Burgers',
  'Ramen',
  'Empanadas',
  'Chicken Fried Rice',
  'Sheet Pan Fajitas',
  'Margarita Pizza'
];

var dessert = [
  'Apple Pie',
  'Lemon Meringue Pie',
  'Black Forest Cake',
  'Banana Bread',
  'Peach Cobbler',
  'Cheesecake',
  'Funfetti Cake',
  'Baklava',
  'Flan',
  'Macarons',
  'Macaroons',
  'Chocolate Cupcakes',
  'Pavlova',
  'Pumpkin Pie',
  'Key Lime Pie',
  'Tart Tatin',
  'Croissants',
  'Eclairs'
];

//querySelector
var letsCook = document.querySelector(".lets-cook"); 
var homeView = document.querySelector(".homeView");
var results = document.querySelector(".results");
var clear = document.querySelector(".clear");
var resultsText = document.querySelector(".resultsText");
var resultsView = document.querySelector("#resultsView");

//eventListener
letsCook.addEventListener("click", getOption);


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getOption() {
  var foodChoice = document.querySelectorAll(".food");
  for(var i = 0; i < foodChoice.length; i++) {
    if (foodChoice[0].checked == true) {
        getSide();
    } else if (foodChoice[1].checked == true) {
      getMain();
    }else if (foodChoice[2].checked == true) {
      console.log("howdy")
      getDessert();
    } else if (foodChoice[3].checked == true) {
      var main = getMain();
      var side = getSide();
      var dessert = getDessert();
        randomChoice = `${main} with a side of ${side} and ${dessert} for dessert!` 
    }
    displayResults(randomChoice);
  }
} 

function getSide() {
  randomChoice = side[getRandomIndex(side)];
  return randomChoice;
}

function getMain() {
  randomChoice = main[getRandomIndex(main)];
  return randomChoice;
}

function getDessert() {
  randomChoice = dessert[getRandomIndex(dessert)];
  return randomChoice;
  }


function displayResults(randomChoice) {
  homeView.classList.toggle("hidden");
  resultsView.classList.toggle("hidden");
  resultsText.innerText = `${randomChoice}`;
}
