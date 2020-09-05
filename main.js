var side = [
  'Miso Glazed Carrots'
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

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function getOption() {
  if(document.getElementById('food_side').checked) {
     getRandomIndex(side) = randomValue;
  }else if(document.getElementById('food_maindish').checked) {
     getRandomIndex(main) = randomValue;
  }else if(document.getElementById('food_dessert').checked) {
    getRandomIndex(dessert) = randomValue;


function displayResults() {
  pot.classList.add("hidden");
  results.classList.remove("hidden");
  clear.classList.remove("hidden");
  
}

//buttons
var letsCook = document.querySelector("lets-cook"); 

//eventListener

letsCook.addEventListener("click", getOption);