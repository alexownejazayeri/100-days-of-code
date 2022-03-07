# Under The Hood w/ JavaScript

## Understanding Memory Management

### What is Memory Management?
- The process of controlling and coordinating the way an app accesses ***computer memory***
- COME BACK TO THIS

## Value Type & Reference Type

### Types Of Values
- Primitive types
  - string
  - number
  - BigInt
  - boolean
  - symbol
  - undefined
  - null
- Objects
  - arrays
  - functions
  - objects
  - etc.
  
### Value Types & Reference Types
- variables can store ***value*** or the ***memory address*** (reference)
- depending on the type of value being stored
- Value Type
  - variable stores a value assigned to it
  - called as a value type
  - all primitive types
  - stored and executed in ***call stack***
- Reference type
  - variable stores memory address of the value assigned to it
  - calles as reference type
  - objects, functions, arrays, etc.
  - stored and executed in ***heap***

### Value Types & The Call Stack
Code Example
```javascript
let x = 30;
let y = x;
x = 50;
console.log(x); // expects: 50
console.log(y); // expects: 30
```
- First we declare `x` with `let` and assign `30` to it.
  - a memory address is created in the call stack
  - that address stores the value in the call stack
- Next we assign the value of `x` to `y`
  - `y` will copy the value of the value `x` since a number is a value type
  - this points `y` at the value address that contains `30`
- Lastly, we reassign `x` to the value `50`
  - This creates a new address containing the value `50` and points `x` at it
  - The original address remains


### Reference Types & The Call Stack
Code Example
```javascript
let obj1 = {
    name: 'John'
    age: 30
};

let obj2 = obj1;
obj2.age = 25;

console.log(obj1.age); // expects: 25
console.log(obj2.age); // expects: 25
```

- First we declare `obj1` and assign it to an object with the props `name` and `age`
  - the object gets stored in heap with a heap memory address e.g.(0x23245)
  - identifier created for `obj1` in call stack e.g.(0x23241)
    - stores the memory address where the object is stored in heap (0x23245)
    - stores a **reference** to a value (usually for dynamic data), not actual data
- Then we declare a new variable with the identifier `obj2` and assign it to `obj1`
  - when we assign `obj1` to `obj2`, we're assigning `obj2` to the reference (0x23245), not the value
- Next we assign the `age` prop on `obj1` to the number `25`
  -  this changes the value of `obj1.age` in heap
  -  both `obj1` and `obj2` reference this object
  -  expected output for both is `25`

## Resources

### Blog posts
The following are from a solid series called 'Demystifying memory management in modern programming languages'
- [Intro to Memory Management](https://deepu.tech/memory-management-in-programming/)
- [Memory Management in V8](https://deepu.tech/memory-management-in-v8/)

### YouTube Video
- [How JavaScript Works Behind The Scenes Playlist](https://www.youtube.com/playlist?list=PL1BztTYDF-QM8jn9jXESmx2vJwSmhe7t9)