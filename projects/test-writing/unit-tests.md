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

statusHandler
constructMatrix
evaluateMatrix
handlePlayerData
gameSaveHandler


# Resources
- [JavaScript testing best practices](https://github.com/goldbergyoni/javascript-testing-best-practices#section-0%EF%B8%8F%E2%83%A3-the-golden-rule)
- [Jest tutorial for beginners](https://www.valentinog.com/blog/jest/)
- [HTML Roles List](https://www.w3.org/TR/html-aria/#docconformance)

## Read later
- [8 Factors Influencing Your Approach to Code Coverage](https://about.codecov.io/blog/8-factors-influencing-your-approach-to-code-coverage/)
- [A Practical Guide To Testing React Applications With Jest](https://www.smashingmagazine.com/2020/06/practical-guide-testing-react-applications-jest/)
- [When to Unit Test your React App](https://bonniedotdev.medium.com/when-to-unit-test-your-react-app-f5b211eb41c9)
- [Testing Functions within Functional React Components](https://medium.com/nerd-for-tech/testing-functions-within-functional-react-components-fd2dc125f47c)
- [React component testing with Jest and React Testing Library](https://jdlt.co.uk/blog/testing-react-components-with-jest-and-react-testing-library/)