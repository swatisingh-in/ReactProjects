//arguments are not accessible inside a function in es6 arrow functions

const add = function (a, b){
  console.log(arguments);
  return a + b;
}

console.log(add(5, 10));

const addArrow = (a, b) => {
  //console.log(arguments);
  return a + b;
}

console.log(addArrow(10, 20));

// this can be used inside a function defined in object method. Basically this exists in its last scope.
const user  = {
  name : "Swati Singh",
  places : ["China", "Delhi", "Amsterdam"],
  //New way of defining methods in ES6
  printPlaces() {
    this.places.forEach( (city) => {
      console.log(this.name + ' has lived in ' + city);
    });
  }
};

user.printPlaces();

// If we use map we can create a new array in loop itself.

const user2  = {
  name : "Vishu Singh",
  places : ["USA", "Delhi", "Amsterdam"],
  //New way of defining methods in ES6
  printPlaces() {
    return this.places.map((city) => this.name + ' has lived in ' + city );
  }
};

console.log(user2.printPlaces());

//Challenge

const multiplier = {
  numbers : [1, 2, 3, 4, 5],
  multiplyBy : 10,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
