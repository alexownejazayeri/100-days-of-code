# JavaScript

## Overview
In this document:
- High level overview of JavaScript
- What it is and how it generally works
- How/where it's implemented

## What is it?

- Programming language
  - used for "dynamic client-side scripts on webpages"
    - a webpage contains embedded js that executes when a user visits a page
  - created so web developers could make pages dynamic and interactive, or perform simple tasks
  - browser scripting remains main use-case today
  - runs in every browser out-of-the-box

## Where does it run?

- A JS app runs on every device
  - can write cross-platform apps easily
  - both client-side and server-side -- all in JS
- Browsers
  - easily run JS in the browser of your choice
  - use the JavaScript console (Chrome/Firefox)
- Server-side
  - Runtimes like Node.js
  - Beyond the scope of this doc

## How do we include JS in a webpage?

- There are two (2) ways - both involve the `<script>` tag
  - Inline `<script>` tags
  - Include code in a `.js` file and link to the page using the `src` attribute

Inline Example:
``` html
<html>
  ...
  <body>
    <h1>The script tag below prompts the user for input and alerts it</h1>
    <script>alert(prompt("What's your name?"));</script>
  </body>
  ...
</html>
```

Link Example:
``` javascript
// Same .js code saved in a file e.g.(alert.js)
alert(prompt("What's your name?"));
```
``` html
<!-- Sample html with alert.js linked in <script> tag -->
<html>
  <body>
    <h1>Best Practice for Linking to JS in HTML</h1>
    <p>Load JavaScript last (after CSS) right before the closing body tag to avoid blocking!</p>

    <!-- JS loads after HTML rendered to avoid blocking -->
    <script src='./alert.js'></script>
  </body>
</html>
```

### Where and how can we test JavaScript?

**The JavaScript console**
- Like a Command Line Interface (CLI) for
- *read-eval-print loop (REPL)* behind the console
  - reads your input
  - evaluates it as JavaScript code
  - prints results
  - lets you see results immediately
- Evaluating expressions
  - Every JS expression has a result
  - Some expressions such as `console.log` return an empty result called `undefined`

Example Console Output
``` javascript
// You can open dev tools in browser and try these out

3 * 9
// expects: 
// 27
// undefined

console.log("hello world");
// expects: 
// hello world
// undefined
```

### What's the difference between a statement and expression?

- Statements are complete JS ending in a semicolon and executed one by one
  - Semicolons aren't always needed, but it's best practice to include them to avoid bugs
- Expressions are parts of statements that return values

___
## Resources

### MDN
- [Glossary > Server](https://developer.mozilla.org/en-US/docs/Glossary/Server)
- [Glossary > DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM)

### Node.js
- [Docs](https://nodejs.org/)

### Stanford
- [cs98si slides](https://web.stanford.edu/class/cs98si/)