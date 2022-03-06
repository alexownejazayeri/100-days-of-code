// This is a playground for understanding the 'let' keyword

// Declaration, no assignment
let grooveMachine; 

// Declaration & assignment
let bandName = 'Parcels';

console.log(grooveMachine); // Logs 'undefined' to console since no assignment
console.log(bandName); // Logs 'Parcels' to console (typeof -> string)

// Example of scope with 'let'

for (let countDownVar = 5; countDownVar > 0; countDownVar--) {
    // countDownVar is visible; locally scoped
    console.log(countDownVar); // Will log 5, 4, 3, 2, 1 to the console
}

/* console.log(countDownVar); 

* Attempting to log here would throw a ReferenceError 
* since countDownVar not visible globally
*/

let countDownVar = 12; // declares countDownVar out here
console.log(countDownVar); // no more error, but this may be bad practice

let z = 1.618;

if (z === 1.618) {
    let z = 6.022;

    console.log(z); // expect: 6.022 
}

console.log(z); // expect: 1.618

z = "Strum that string! I'm bored of numbers..."; // Reassigns z to this string

console.log(z); // expect: Strum that...

// Destructuring assignment syntax

const arr = ['i', 'am', 'an', 'array'];

let [a, b] = arr;
console.log("i think therfore " + a + " " + b); // expects: i think therefore i am

const dwight = {
    firstName: "Dwight",
    lastName: "Schrute",
    employer: "Dunder Mifflin",
    title: "Assitant to The Regional Manager",
    skills: ['sales', 'beet farming', 'recorder']
}

let { firstName, skills } = dwight;
console.log(firstName, skills); // expects: Dwight ['sales', 'beet farming', 'recorder'] 