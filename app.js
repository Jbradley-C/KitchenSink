//defining variables
let firstName = "Jason";

const ourStates = 50;

// const addingNumbers = 5 + 4;

//computing, storing and logging variables
let compute = firstName + ourStates;

console.log(compute);

//create 1st function
function sayHello() {
	alert("Hello World");
}
sayHello();


//define function
function checkAge(name, age) {
		if (age < 21) {
			alert('Sorry, ' + name + ', you are not old enough to view this page!');
		}else { 
            alert ("Welcome!");
        }
	}


//calling checkAge funtion
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

//create array
let myVeggies = [ 'onions', 'broccoli', 'zucchini', 'squash', 'corn' ];

//loop to list veggies
for (var i = 0; i < myVeggies.length; i++) {
	console.log(myVeggies[i]);
}

//create object
let pet = {
	name: 'Dakota',
	breed: 'terrier mix'
};

//log pet object
console.log(pet.name, pet.breed);

//declare array for checkAge array
let people = [
	{ name: 'Charles', age: 21 },
	{ name: 'Abby', age: 27 },
	{ name: 'James', age: 18 },
    { name: 'John', age: 17 },
    { name: 'Jack', age: 19}
];

//loop to call function
for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

function getLength (word) {
    return word.length;
}
let words = getLength ("Hello World");

if (words % 2==0) {
    console.log("The world is nice and even!");
} else {
    console.log("The world is an odd place");
}
