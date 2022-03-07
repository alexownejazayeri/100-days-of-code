// This is a code sandbox for learning and practicing the strict equality '===' operator

// Most notable difference between strict and equality is that strict doesn't attempt type conversion

// EXPRESSIONS - STRICT EQUALITY
console.log(13 === 13);
// expects: true

console.log('mahalo' === 'mahalo');
// expects: true

console.log('7' === 7);
// expects: false

console.log(0 === false);
// expects: false

// Comparing operands of same type

console.log("mufasa" ===  "mufasa");
// expects: true

console.log("jim" === "dwight");
// expects: false

console.log(22 === 22);
// expects: true

console.log(21 === 22);
// expects: false

console.log(true === true);
// expects: true

console.log(true === false);
// expects: false

console.log(null === null);
// expects: true

// Comparing operands of different types

console.log("26" === 26);
// expects: false

console.log(true === 1);
// expects: false

console.log(null === undefined);
// expects: false

// Comparing objects

const object1 = {
    name: "hello"
}

const object2 = {
    name: "hello"
}

console.log(object1 === object2); // expects: false
console.log(object2 === object2); // expects: true