
// function pizzaOven(crustType, sauceType, cheeses, toppings){
//     var pizza = {};
//     pizza.crustType = crustType;
//     pizza.sauceType = sauceType;
//     pizza.cheeses = cheeses;
//     pizza.toppings = toppings;
// return pizza
// }

// pizza1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
// console.log(pizza1)

// pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
// console.log(pizza2)

var crustType = [
    "Deep Dish",
    "Hand Tossed",
    "Thin Crust",
    "Pan Pizza"
];

var sauceType = [
    "Traditional",
    "Marinara",
    "Spicy",
    "Alfredo Sauce"
];

var cheeses = [
    "Mozzarella",
    "Feta",
    "3 Cheese Blend",
    "Cheddar",
    "Spicy Cheddar"
];

var toppings = [
    "Pepperoni",
    "Sausage",
    "Mushrooms",
    "Olives",
    "Onions",
    "Green Peppers",
    "Red Peppers",
    "Bacon",
    "Chicken",
    "Banana Peppers",
    "Jalapenos"
];

//picks a random string from an array
function selector(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

//creates a random number between a minimum and maximum value and takes that number of values from an array
function randomRange(max, min) {
    return Math.ceil(Math.random() * max - min) + min;
}

function randomPizzaMaker() {
    var pizza = {};
    pizza.crustType = selector(crustType);
    pizza.sauceType = selector(sauceType);
    pizza.cheeses = [];
    pizza.toppings = [];
    //replaces pizza.cheeses with a random number of cheeses from 1-3
    for(var i = 0; i<randomRange(3, 1); i++) {
        pizza.cheeses.push(selector(cheeses));
    }
    //replaces pizza.toppings with a random number of toppings from 1-5
    for(var i = 0; i<randomRange(5, 1); i++) {
        pizza.toppings.push(selector(toppings));
    }
    return pizza;
}
//calls and console logs the function
console.log(randomPizzaMaker());