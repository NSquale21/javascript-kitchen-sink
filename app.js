// create variable w/name 
let myName = 'Nicole';

// create const w/number of states
const NUM_STATES = 50;

// compute 5 + 4 & store in variable
let sum = 5 + 4;

// write sayHello function that displays alert
function sayHello() {
	alert('Hello World!');
}

// call sayHello function
sayHello();

// write checkAge function that takes two arguments (name, age)
function checkAge(name, age) {
	if(age < 21) {
		alert(`Sorry ${name}, you aren't old enough to view this page!`);
	}
}

// call function 4 times
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

// create array of your favorite vegetable
let favVeggies = ['Asparagus', 'Brussel Sprouts', 'Sweet Potatos', 'Artichokes'];

// loop through favVeggies array & display to console
for (let i = 0; i < favVeggies.length; i++) {
	console.log(favVeggies[i]);
}

// create an array of 5 objects that contain name & age properties
let newArr = [{name: 'Ryan', age: 29}, {name: 'Kylie', age: 18}, {name: 'Rachael', age: 32}, {name: 'Kim', age: 28}, {name: 'Andy', age: 15}];

// use loop to call the checkAge function for each object in the array
for (let i = 0; i < newArr.length; i++) {
	console.log(checkAge(newArr[i].name, newArr[i].age));
}

// create a function called getLength that takes any word as an argument
function getLength (word) {
	return word.length;
}

// call the getLength function
let result = getLength('Hello World');

// if number is even display 'The world is nice and even!
// if number is odd display 'The world is an odd place'
if (result.length % 2 === 0) {
	console.log('The world is nice and even!');
} else {
	console.log('The world is an odd place.');
}