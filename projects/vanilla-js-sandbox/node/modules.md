# Node Modules & CJS

## Overview

A modules or subroutine is a "sequence of program instructions that performs a specific task, packaged as a unit" according to Wikipedia, which...you know..grain of salt there.

Units are bits of code that do a specific thing e.g.(function || class) and can be reused in other parts of your code.

Think Ikea furniture for programming, but instead of precisely machined bits of wood that eventually make up the legs on your minimalist, budget scandinavian desk (with accompanying succulent and post-hipster energy) you have chunks of code that are meant to reliably produce some output given an input that you can sprinkle all over your code -- or in specific parts of it.

## What is CommonJS (CJS)

Again, according to our ~trusty~ Wikipedia info:

> "CommonJS is a project with the goal to establish conventions on the module ecosystem for JavaScript outside of the web browser."

So consider that Node.js lets you run JS wherever Node runs -- backend servers, embedded systems, mobile devices. It makes sense that with JavaScript bushwacking its way out of the browser that you'd want to standardize how modules work.

Modules are there to make our lives easy through repeatability and cleaner, more manageable code, so naturally Node wants to standardize how they work with a stable option -- CJS.

### CJS: a brief history

- Started at Mozilla by engineer Kevin Dangoor in Jan, 2009 and was initially named ServerJS

> "What I’m describing here is not a technical problem. It’s a matter of people getting together and making a decision to step forward and start building up something bigger and cooler together. - Kevin Dangoor"

- In August '09, renamed to CommonJS to show broader applicability to the APIs.
- Not affiliated with ECMA, but some member participate in the project.


### What does it do?

- Module formatting -- a standard for structuring and organizing JS.
- Assists in server-side development of apps and heavily influenced by NodeJS's module management

### What's a module, really?

- It's some code in a file that gets exported to another file.
- Focus on doing one thing and doing it well; loosely affiliate with other files
- No global or shared variables between modules, so communicate via the module.exports object
- Any code you want to use in another file is module-worthy!
> "**CJS modules are reuseable code made available for dependent files** -- Constance Cruchfield"

### How to use CJS

The keys are `module.exports` and the `require` function.

#### Using `module.exports`
- `module.exports` is a property of the `module` object
- The `module` object (see: below):
  - describes an module from a JS file 
  - `module.exports`is the exported component of type
    - object
    - function
    - string
    - etc.

```javascript
Module {
  id: '.',
  path: '/Users/stanleynguyen/Documents/Projects/blog.stanleynguyen.me',
  exports: {},
  parent: null,
  filename: '/Users/stanleynguyen/Documents/Projects/blog.stanleynguyen.me/index.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/stanleynguyen/Documents/Projects/blog.stanleynguyen.me/node_modules',
    '/Users/stanleynguyen/Documents/Projects/node_modules',
    '/Users/stanleynguyen/Documents/node_modules',
    '/Users/stanleynguyen/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}
```
- Default exporting in a Node.js module is as simple as...

```javascript
module.exports = function conjunctionJunction() {
    return "what's your function?";
};
```
#### Using named exports
  - assigns individual properties of the default `module.exports` object to values
  - compared to assigning the whole `module.exports` to a value

```javascript
module.exports.anExportedFunc = () => {};
module.exports.anExportedString = "this string is out of tune";

// or bundled together in an object
module.exports = {
    anExportedFunc,
    anExportedString,
};
```
  - Use the the predefined, module-scoped `exports` variable to more concisely assign named exports

```javascript 
exports.anExportedFun = () => {};
exports.anExportedString = "this string is exported";

// BUT DON'T DO THIS
exports = {
    anExportedFun,
    anExportedString,
}
```

## Node.js require

- the `require` function takes the module file path as an argument and makes the `module.exports` object available in the receiving file
- if you assign a variable `exports` to an object instead of default exporting to `module.exports`, your modules won't be available to `require()`, so:
  - either default export an object using `module.exports`
  - or use dot | bracket notation to assign named exports to the `exports` variable
    - if you try to reassign `exports`, you'll point away from the initial, predefined reference to the `module.exports` object

## Best practice

```javascript
// default export
module.exports = function defaultExportedFunction() {};
module.exports = {
    myFunc,
    yourFunc,
    weAllGotFunc,
}
```



## Resources

- [CommonJS ...what, why, and how](https://medium.com/@cgcrutch18/commonjs-what-why-and-how-64ed9f31aa46#:~:text=CommonJS%20is%20a%20module%20formatting,heavily%20influenced%20NodeJS's%20module%20management.)
- [How Node Modules Work](https://www.freecodecamp.org/news/node-module-exports-explained-with-javascript-export-function-examples/)
- [Node.js docs - modules exports shortcut](https://nodejs.org/api/modules.html#modules_exports_shortcut)