# Unit tests

## Overview

Unit tests verify that a unit or block of code like a function or class produces the correct output for a given input. I'm working with Jest since it's popular and has support for React (go figure it's another Facebook Open Source project).

## Making functions available to Jest

In my early experiments, I thought I could use Ecmascript Modules (ESM), but Jest threw an error.

### ESM example
```javascript
// Module file
const myFunc = ("we've got the func") => console.log("gotta have that func!");

export { myFunc }
```

```javascript
import { myFunc } from "./functions.js";
```

### Jest error

> Jest encountered an unexpected token

> Jest failed to parse a file.

> This happens e.g. when your code or its dependencies use >non-standard JavaScript syntax, or when Jest is not configured to support such syntax.Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration. By default "node_module" folder is ignored by transformers.

> Here's what you can do:
> - If you're trying to use ECMAScript Modules (ESM), see https://jestjs.io/docs/ecmascript-modules for how to enable it
> - If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript 

...the rest isn't really relevant (yet).

## What's best practice for modules then?

After checking out the ESM link in the Jest docs, here's what I found out:

- Jest ships with *experimental* support for ESM
  - The caveat here is, "due to its experimental nature there are many bugs and missing features in Jest's implementation, both known and unknown. You should check out the [tracking issue](https://github.com/facebook/jest/issues/9430) and the [label](https://github.com/facebook/jest/labels/ES%20Modules) on the issue tracker for the latest status."

TL;DR - using ESM is experimental and seems unstable, so -- for now -- I'm going to run with CommonJS modules for running tests.

The next question: what are CJS module best practice?

For example, if you have multiple functions or classes you want to export what's the neatest way to do this that's still compatible with Jest?


### Summary - modules

- Use CJS exports since ESM isn't stable, for now.
- Modules best practices [here](../vanilla-js-sandbox/node/modules.md)

# Unit Testing React apps

## Starting questions

1. What do I test?
   1. What's a unit?
      1. The smallest building block of your app (not implementation details!)
      2. small, focused details that do a specific thing each
      3. things that fail for a clear reason
      4. anti-pattern: writing a few, large tests that cover too much
   2. Sample precedence
      1. high-value components responsible for core functionality
      2. components that are heavily used across the app
      3. user interactions in components e.g.(onClick or onChange events)
      4. Conditional rendering e.g.(state changes w/ props || useState, context || redux)
      5. Utils & Hooks e.g.(functions used throughout certain components, custom hooks)
      6. happy paths - if user uses the component the way they're supposed to, does it work?
      7. non-exhaustive (don't aim to find every edge case, users will do that themselves)
      8. features that break easily; stuff you notice breaks during development
      9. basic components
2. How do I test it?
   1. Renders what it's supposed to
   2. Handles interactions as expected
   3. Success & Error cases
   4. Rare, but possible results

## Technical set-up

### Writing, testing, and executing this code

- Need a tool to run tests and assert results
- For React, specifically, a tool to render components, so we can test them in a simulated browser

#### Testing Libraries
- Jest: a test runner for unit and integration tests
- React Testing Library: simulates and renders components

Both of the testing tools above come "out-of-the-box" with `create-react-app`

#### Running your first test

**See 'testing organization' markdown notes for conventions**.

Before you get started:
1. create a test file
2. make sure setUp.js is properly configured (no action needed if you didn't delete it after running `create-react-app`)

We'll use the following, simple react component as our example.

```javascript
import React from 'react';

const MyComponent = () => {
  return(
    <div>
      <h1>I love testing!</h1>
    </div>
  );
};

export default MyComponent;
```

Set up your test by first importing `render` and `screen` from the React Testing Library. Then import the component you want to test.

```javascript
// sample test file w/ test code

// set the file up with the correct imports

import { render, screen } from '@testing-library/react'
import MyComponent from './MyComponent';

// The test function takes 2 args, a string the describes the test
// And a callback function containing the test logic
test('does a thing', () => {
  //test logic goes here
});
```

**The callback can...**
- render a component with the imported `render` function imported from `@testing-library/react'
- use `screen` to simulate a browser (virtual screen) into which the component gets rendered

```javascript 
test('contains: i love testing', () => {
  // Render your component
  render(<MyComponent />);

  // Identify an element in your component with .getByText()
  // Takes either a string or RegEx as an argument
  screen.getByText(/i love testing/i);
});
```

If your component takes props, you can pass them in like so...

```js
test('renders a thing and behaves nicely', () => {
  // Render component with props
  render(<MyComponent dwightProp={beets} />)
})
```

**To check if the element is present in your component...**

- Use the `expect()` function to **assert** that it's in the document with the `.toBeInTheDocument` method.

...all together, you've got your first test!

```javascript
test('renders i love testing element', () => {
  render(<MyComponent />);

  const testElement = screen.getByText(/i love testing/i);
  expect(testElement).toBeInTheDocument();
});
```

To run this test file in your React project, run `npm test` in the terminal.

> And aside. If you're using the React Testing Library with Jest, you can use ESM modules to export components you plan on testing.

## Writing more unit tests

> A convention for organizing test files: place them as close to the file you're testing as possible.
> ```
> | src
> | |- components
> | | |- MyComponent.js
> | | |- MyComponent.unit.test.js

### `test()`

The `test()` function is globally available and doesn't need to be imported. Some details:
- it takes 2 arguments
  - descripton
    - brief description of what it does
    - something helpful that makes it known why it fails
```javascript
// Example
test('renders Hello {Client.name}', () => {...});
```
  - anonymous function (see: above)
    - typically does **3 things**: "the three A's"

### The Three A's

#### Arrange
- Set up the test data
  - render component you're testing
  - any other set-up that's required
  - set-up test data
  - test conditions
  - test environment

#### Act
- do the thing you're testing for
  - simulate a button click
  - simulate keystrokes
  - see docs for more options

#### Assert
- compare executed results against expected results
- if you don't make any assertions, the test will automatically pass

## Simple implementation of The Three A's

### Example 1a - using `screen.getByText()`

```javascript
test('renders fresh pot of coffee', () => {
  // Arrange
  render(<FreshPots />);

  // Act - N/A since not testing user interaction

  // Assert
  const coffeePot = screen.getByText(/fresh pots/i); // Returns an element, throws error if n/a immediately
  expect(coffeePot).toBeInTheDocument();
})
```
#### A note about passing strings to `getByText()`
- Can pass string as
  - RegEx as in the example above
  - Hardcoded string
- 2nd argument is a **config object**

```javascript
test('renders a venti double frappe', () => {
  // Arrange
  render(<BigOlDoubleFrappe />);

  // Act - n/a since not testing user interaction

  // Assert
  const doubleFrappe = screen.getByText('double frappe', {exact: true}); // If False, case won't matter and will match substrings
  expect(doubleFrappe).toBeInTheDocument();
})
```

### Example 1b - using `screen.getByRole()`

```javascript
test('renders FIVE GOLDEN RINGS', () => {
  // Arrange
  render(<FiveGoldenRings />);

  // Act - N/A since not testing user interaction

  // Assert
  const goldenRings = screen.getByRole('button', {name: 'five golden rings'});
  expect(goldenRings).toBeInTheDocument();
})
```

### `screen` methods

There are three types of methods available. The main difference are a) when they throw errors and b) if they return promises or not.

1. get...()
   1. throws error if element not found 
2. find...()
   1. return a promise
   2. use if element **eventually** renders to screen
3. query...()
   1. return a doesn't throw an error if element not found; returns null


### `expect()` function

- Globally available
- Takes test result value as an argument
- Test result can be anything
  - Number
  - String
  - DOM node
  - Etc...

### Matchers




# Resources
- [JavaScript testing best practices](https://github.com/goldbergyoni/javascript-testing-best-practices#section-0%EF%B8%8F%E2%83%A3-the-golden-rule)
- [Jest tutorial for beginners](https://www.valentinog.com/blog/jest/)
- [HTML Roles List](https://www.w3.org/TR/html-aria/#docconformance)
- [The Primagen Talks Unit Testing](https://youtu.be/pvBHyip4peo)

## Read later
- [8 Factors Influencing Your Approach to Code Coverage](https://about.codecov.io/blog/8-factors-influencing-your-approach-to-code-coverage/)
- [A Practical Guide To Testing React Applications With Jest](https://www.smashingmagazine.com/2020/06/practical-guide-testing-react-applications-jest/)
- [When to Unit Test your React App](https://bonniedotdev.medium.com/when-to-unit-test-your-react-app-f5b211eb41c9)
- [Testing Functions within Functional React Components](https://medium.com/nerd-for-tech/testing-functions-within-functional-react-components-fd2dc125f47c)
- [React component testing with Jest and React Testing Library](https://jdlt.co.uk/blog/testing-react-components-with-jest-and-react-testing-library/)
- [Test-Driven Development w/ Fireship](https://www.youtube.com/watch?v=Jv2uxzhPFl4)