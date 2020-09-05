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

//eventListener
letsCook.addEventListener("click", getOption);


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getOption() {
  var foodChoice = document.querySelectorAll(".food");

  for(var i = 0; i < foodChoice.length; i++) {
    if (foodChoice[0].checked == true) {
      console.log("hiiiii");
        getSide();
    } else if (foodChoice[1].checked == true) {
      console.log("hello")
      getMain();
    }else if (foodChoice[2].checked == true) {
      console.log("howdy")
      getDessert();
    }
    displayResults(randomChoice);
  }
} 

function getSide() {
  randomChoice = side[getRandomIndex(side)];
  console.log("hi");
  return randomChoice;
}

function getMain() {
  randomChoice = main[getRandomIndex(main)];
  console.log("ho");
  return randomChoice;
}

function getDessert() {
  randomChoice = dessert[getRandomIndex(dessert)];
  console.log("he");
  return randomChoice;
  }


function displayResults(randomChoice) {
  homeView.classList.add("hidden");
  results.classList.remove("hidden");
  clear.classList.remove("hidden");
  resultsText.innerText = randomChoice;
}
