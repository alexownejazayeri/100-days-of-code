// This is a playground for understanding the 'const' keyword

// Variables declared with const (constants) need to be initialized
// const grooveMachine; <-- this will throw a SyntaxError

const BANDNAME = "Mildlife"; // It's common practice use all caps to identify constants

console.log(BANDNAME); // expects: Mildlife

// This block throws a TypeError: Assignment to constant variable
/* for (const COUNTDOWN = 5; COUNTDOWN > 0; COUNTDOWN--) {
    console.log(COUNTDOWN);
} */

/* For reference, declaring an object in a function block
for every function call is probably bad practice. */
function daftQuery(prop) {
  const DAFTPUNK = {
    // The constant DAFTPUNK is scoped to this function
    genre: "EDM",
    topHits: ["Get Lucky", "Robot Rock", "Aerodynamic", "One More Time"],
  };

  if (DAFTPUNK[prop]) { // It's visible to this if check
    console.log(DAFTPUNK[prop]);
  } else {
    console.log("What are you daft?");
  }
}

daftQuery("topHits");

// console.log(DAFTPUNK.genre); <-- this will throw a ReferenceError: DAFTPUNK is not defined

// BANDNAME = "M83"; <-- this throws a TypeError: Assignment to constant variable

// Objects and arrays
const MY_OBJ = {'whomst': 've'};

// MY_OBJ = {'SOME_OTHER_KEY': 'shpoopy'}; <-- Uncaught TypeError: Assignment to constant variable

// Object keys aren't protected, so this works
MY_OBJ.whomst = 'SOME_OTHER_VALUE';
console.log(MY_OBJ); // expects: { whomst: 'SOME_OTHER_VALUE' }

// Can push items into the array
const MY_ARR = [];
MY_ARR.push('push it real good');
console.log(MY_ARR); // expects ['push it real good']

// MY_ARR = ['gonna break yo']; <-- Uncaught TypeError: Assignment to constant variable


// Desctructuring with const 

