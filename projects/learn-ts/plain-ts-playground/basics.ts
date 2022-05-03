// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

// age = '12'; Expects: error

let userName: string;

userName = 'Yelena';

let isVeryCool: boolean;

isVeryCool = true;

// let hobbies: null;
// hobbies = ['surfing', 'cooking', 'playing music']; <-- throws an error for anything

//======= Working w/ Arrays & Object Types =====

// More complex types

// let hobbies: string; <- this doesn't work, because we want an array
// To tell TS we want an array of strings...

let hobbies: string[]; // with an array, just include square brackets after the type annotation

hobbies = ['beat farming', 'karate', 'selling paper']; // <- adding a number throws an error

// Setting types for objects

let person: {
    name: string;
    age: number;
}; //this is a type assignment

person = {
    name: 'Ellie',
    age: 25,
};

/* 
This will throw an error
person = {
    isEmployee: true
} 
*/

let people: {
    name: string;
    age: number;
}[];

//======= Type Aliases ================

// Type alias - helps reduce repetition in code
// Define your own base type in which a more complex type definition is stored and repeat it

// Define a type alias with the 'type' keyword followed by your new type name
// `=` isn't a js assignment operator, it's a TS type defintion assignment 
type DunderMifflenite = {
    name: string;
    age: number;
}

// Instead of repeating the object type, use the alias now!

let dwight: DunderMifflenite;

dwight = {
    name: 'dwight schrute',
    age: 34,
}

let michael: DunderMifflenite;

michael = {
    name: 'michael scott',
    age: 40,
}

let otherTeamMembers: DunderMifflenite[];

otherTeamMembers = [
    {
        name: 'pam beasley',
        age: 27,
    },
    {
        name: 'creed ???',
        age: 54,
    }
]

// ====== Functions & Types =========

// TS infers the return type; can see by hovering over 'add()'
function add(a: number, b: number) { 
    return a + b;
}

// Can explicitly set the return type of a function 
// By adding a colon after the function param list
// If you don't have a reason for this, stick to inferred type

// !! REMEMBER: in TS, function params && return values are typed !!

// This function is unique in that it has not return value or statement
// Has a **special** return type: void, comparable to 'null' and 'undefined'
// Means that the function never returns
function printOutput(value: any) {
    console.log(value);
}

// ====== Generics =========

function insertAtBeginning(array: any[], value: any) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

// TS doesn't pick up that this is an array full of numbers
// Because we'v assigned array a type any[]
const updatedArray = insertAtBeginning(demoArray, -1); // Expects: [-1, 1, 2, 3]

// The problem is that, beacause of the type any[]
// TS will let us do wacky stuff like this now
// That slip through to runtime
// updatedArray[0].split(''); <-- can't run split on a number

// Enter...GENERICS, we can define a generic type 'T' (convention)
// In angle brackets after the function definition

function insertAtEnd<T>(array: T[], value: T) {
    const newArray = [...array, value];
    return newArray;
}

// Now TS will look at the concrete values of the arguments
// (see: below) and ~know~ the type of the contents of the array
// We're telling TS that the type 'T' isn't 'any', but the type of
// The array is dependent on the types of values we pass in 

const newDemoArray = [4, 5, 6];

const newUpdatedArray = insertAtEnd(newDemoArray, 3);

// newUpdatedArray[0].split('') <-- now this throws an error

// Generics help us write type safe functions that are also flexible
// Once a type is used for a function execution, that type is locked in and known