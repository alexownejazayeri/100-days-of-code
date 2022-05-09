# Functional Programming

## Overview
Functional programming is a style centered on simple, isolated functions without side effects.

Our function $f$ takes some input $x$ and returns an output $f(x)$ with minimal side effects and $f(x)$ is self-contained.

### Three Core Concepts

1. **Isolated Functions** - don't depend on program state or global variables
2. **Pure Functions** - same input always produces the same output
3. **Limited side effects** - changes or mutations to program state outside of the function are carefull controlled


## Avoid External Dependence

A principle in FP is to declare dependencies explicitly. For example, if a function depends on some data being present (variable, object, etc.), then pass that variable or object directly into the function as an argument.

Non-functional Programming Example
```javascript
// Non-FP function
let fixedInt = 13;

function incrementer() {
    return fixedInt++;
}

incrementer();

console.log(fixedInt); // Expects: 14, mutated the original value
```

Functional Programming example
```javascript
// FP function
let fixedInt = 13;
const fpIncrementer = (num) => num + 1;

fpIncrementer(fixedInt);
console.log(fixedInt); // Expects: 13
```

## Review of principles

### Don't mutate variables or objects
Instead create new variables and objects. If needed, return them from a function as output.

### Declare function parameters
Computation inside functions depends only on the arguments passed in and not on any global objects or variables.

