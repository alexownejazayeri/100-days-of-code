# Unit tests

## Overview

A unit test is written to verify the functionality of a block or unit of code -- a function or class, for example.

There's a variety of tooling, but I've decided to use Jest. This document will reference Jest documentation and try to capture best practices to try out in portfolio projects.

## Organization

> A master craftsman building a chest of drawers, will finish the back of the piece with as much care as the front despite the fact that the back will mostly face a wall.

Being a masterful developer means writing high-quality tests, which includes organization.

There two popular ways...

1. All test code into a neatly organized `/tests` directory
2. Test code next to the files they test

And a third method that considers the level of the test i.e.(unit vs. integration).

## Test file placement

**Unit tests** run against specific lines of code, so it makes place to put them next to that code.

```
|- /main
| |- index.js
| |- index.test.js
```

**Integration tests** run against many lines of code across files, which makes a `/tests` directory a reasonable choice.

```
|- /main
| |- index.js
|- /supporting
| |- fetch.js
| /tests
| |- /int
| | |- api.test.js
```

## Naming tests

Include the name of the test in the test file name. For example, `index.unit.test.js` and `api.int.test.js`.

## Putting it all together

```
|- /main
|  |- index.js
|  |- index.unit.test.js
|- /supporting
|  |- fetch.js
|- /tests
|  |- /int
|  |  |- api.int.test.js
```

- Easy to find tests
- Jest's pattern matching makes it simple to run them separately
  - run `jest unit` or `jest int` for unit and integration tests, respectively



## Resources

- [Organizing Tests in Jest by Jeff Lombard](https://medium.com/@JeffLombardJr/organizing-tests-in-jest-17fc431ff850)