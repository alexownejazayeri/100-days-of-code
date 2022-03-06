# Notes on Variables

## Overview

- Variables use a "label" to point to data instead of using the data itself
  - What does this mean? I don't know what "label" or "point" means in context.
    - MDN says, a "named reference" to a "value"
    - So an 'unpredictable' value can be accessed through a preset name
    - COME BACK TO THIS: research references, values, execution context, etc.
- Any of the 8 data types can be stored in a variable
- Similar to 'x' and 'y' in math; a simple, symbolic way to refer to data
- Difference: computer variables can store different values at different times

## Identifiers

- What you name a variable
- Identifier rules
  - must start with:
    - letter
    - underscore (_)
    - or dollar sign ($)
  - subsequent chars can include digits (0-9)
- Examples of legal identifiers:
  - `Number_hits`
  - `temp99`
  - `$credit`
  - `_name`
- Invalid
  - spaces
  - starting with a number

## Declaration

- Create or **declare** a variable with a keyword
  - can declare multiple variables by separting identifiers with commas
  - can assign multiple variables with destructuring assignment
  - `let a, b, c;` is a valid statement, but `let a, b, c = 1, 2, 3;` is not (throws a SyntaxError)
- Desctructuring assignment syntax creates a variable and assigns the value corresponding to the key of the same name from an object

Example of desctructuring assignment
```javascript
let { a } = { a:10, b:20, c:30 };
console.log(a) // 10
```

## Scope

- COME BACK TO THIS
- [Glossary > Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
  - a bit mored advanced, but good knowledge to have
- Global scope
  - in a programming environment (define this), the global scope contains and is visible in all other scopes
  - client-side js: generally the web page where all the code's being executed

## Block (scripting)

- A JavaScript block
  - delimited by curly brackets `{}`
  ```javascript 
    // Two blocks here; function block and if-statement block
    function moo(grass) { 
      if (grass === 'tall') return 'Moo!';
      };

    // { hay === "tall" ? "yay" : "hey!"; } is the block statement here
    const neigh = (hay) => {
      hay === "tall" ? "yay" : "hey!";
    }
  ```
  - groups related statements
    - statements can be single or multi-line
    - separated by a semicolon

## Local Variable

- Variable declared in a block
  - Pre-ES6: inside a function
- Only available in that block

## Global Variable

- Variable declared outside a block
  - Pre-ES6: outside a function
- Available to any other code in the current document

## Keywords

Variables in JS are declared with one of 3 keywords:

* let
* const
* var

### let

- declares a block-scoped local variable
- optionally initialize to value
- can be reassigned
- initialized to a value only when evaluted by parser


### const

- block-scoped constant
- can't be changed through reassignment
- can't be redeclared
- if object or array, properties or items can be updated or removed
- for dedicated constants e.g.(sensitive user data), common practice to use an all caps identifier
- needs to be initialized


### var

- declares function-scoped or globally-scoped variable
  - visible to entire function regardless of block scope
  - optionally initialize to value
- can be redeclared and reassigned
- pre-ES6
- best practice to avoid use where possible to reduce unintended behavior

### WARNING DON'T USE - assigning a value to a variable

- `x = 42 ` is valid, but creates an undeclared global variable
- generates a strict JavaScript warning
- often lead to unexpected behavior; discouraged to use undeclared global variables

## Resources

### MDN

- ['Re-introduction to javascript' - Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript#variables)
- [Statments and declaration > let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
- [Statements and declarations > const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [Statements and declarations > var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
- [Glossary > Local scope](https://developer.mozilla.org/en-US/docs/Glossary/Local_scope)
- [Glossary > Global scope](https://developer.mozilla.org/en-US/docs/Glossary/Global_scope)
- [Glossary > Block](https://developer.mozilla.org/en-US/docs/Glossary/Block)
- [Glossary > Global scope](https://developer.mozilla.org/en-US/docs/Glossary/Global_scope)
- [Operators > Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment)
- [Reference > Desctructuring Assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

### FCC

- [freeCodeCamp JavaScript and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures)

### Wikipedia

- [Scope (computer science)](https://en.wikipedia.org/wiki/Scope_(computer_science))

### Deep Dive
- [Deep JavaScript - Table of Contents](https://exploringjs.com/deep-js/toc.html)
- [Exploring JS - Under the hood of variables](https://exploringjs.com/deep-js/ch_environments.html)