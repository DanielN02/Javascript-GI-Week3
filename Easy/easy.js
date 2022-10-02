// //Write a function that would allow you to do this:

// var run = exercise('running');

// console.log(run()); // prints "Today's exercise: running"

// function run

// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"

// function excercise("running"){}

function exercise(x) {
  return function () {
    return `Today's excercise: ${x}`;
  };
}

var run = exercise("running");
var swim = exercise("Swimming");
console.log(run());
console.log(swim());
