# React Testing Overview

## Intro notes

1. What is automated testing?
   1. code that tests code
      1. sounds meta, but important
      2. lots of content, worthy of a full-length course
      3. being an expert not necessary for first job
2. Concepts to understand (entry-level; introductory)
   1. Why do we test?
   2. How do we test?
   3. What do we test?
   4. Different types of tests
      1. Unit
      2. Integration
      3. End-to-end (E2E)
   5. Testing in React

## Why do we test code?

1. Why do we write production code?
   1. To serve quality software for a user
      1. Apps and software do something; there's a goal in mind
      2. They should do them well, right?
      3. There's a variety of things that can complicate this
2. Collaborating & Standards for production
   1. Bugs and no-standard collaboration reduces production quality
      1. Bugs can arise when many people are hacking on the same code base
      2. Testing helps maintain order through the Software Development Lifecycle (SDLC)
      3. Can write tests that cover off on the important details so anyone can check if their contribution broke something somewhere before shipping bugs to production
   2. Caveats
      1. Testing doesn't solve everything
      2. Tests have standards too!
      3. Writing bad tests will only create more work
3. Why do we test?
   1. To solve problems before it's too late
      1. Bugs - from many contributions across teams of any size
      2. Poor maintainability - from people with all sorts of styles and formatting preferences contributing code that's hard to understand or requires context switching
      3. Functionality - make sure the code does the the stuff it's supposed to and that adding something over here doesn't break stuff over there
   2. Anti-pattern: Going straight to deploying code
      1. Testing is where the key benefits of CI/CD shine!
      2. Increases the chances of pushing bugs to production code - oops!
   3. Goal
      1. check whether an app behaves as expected
   4. Safeguards against
      1. bugs and regressions (sudden breaks of previously functional code)
   5. Coverage for
      1. new features
      2. refactors
      3. dependency updates


## How to test

1. The many types of tests
   1. Caveat: read before continuing
      1. There are many strong opinions and differences about testing in the community
      2. The line between a unit test and integration test is blurry
      3. There's no one right way to do this, but many bad ways that make it a waste of time
      4. There are guidelnes on what to do, but generally, testing standards vary from project to project depending on need, team preference, etc.
   3. 15 types of testing (a list)
      1. Unit
      2. Integration
      3. End-to-end (E2E)
      4. Acceptance
      5. White box
      6. Gray box
      7. Black box
      8. Manual
      9. Static
      10. Dynamic
      11. UI / Visual Testing (browser tests)
      12. Smoke testing (make sure nothing is on fire)
      13. Regression
      14. Load
      15. Penetration (pen)
  1.  Will focus on the first 3 in these notes
      1.  Will touch on manual tests
      2.  Good to be aware of others
      3.  These are not mutually exclusive
2.  A good test solves problems
    1.  Context: many devs contributing to a shared repo on local machines
    2.  Problems:
        1.  introduces complexity
        2.  version control is difficult
        3.  diffs in dev production environment
        4.  tooling is different
        5.  code quality is different
    3.  Testing as a solution
        1.  automating tests means faster, more consistent testing for more cases
        2.  better code coverage since hard to read the whole code base before every commit
        3.  standardized code quality; no pass, no commit, no doodoo code
3.  Manual testing
    1. Dev writes code to
        1.  implement a feature
        2.  fix a certain issue
        3.  preview/test app in the browser
    2.  Testing manually
        1.  focus on manually interacting with a system (click around and testing things like a user might)
        2.  happens throughout the whole process
        3.  to gut-check against what the user actually sees
        4.  For acceptance, edge cases, and niche scenarios
    3.  Cons / Drawbacks
        1.  Error prone
        2.  Time-limited; hard to cover all scenarios
        3.  Breaking changes might slip into production
4.  Static vs. Dynamic testing
    1.  Static tests
        1.  Focus on methods where no code is being executed (linting, manually checking the logical integrity (of functions, classes, components), reviewing code with peers)
        2.  First line of defense for obvious problems
        3.  Happen before a dev commits code to main / master branch
        4.  Goal: save time, catch low-hanging fruit
        5.  **Manual, Acceptance, Linting, and Formatting are 'Static Tests'**
    2.  Dynamic tests
        1.  Focus on methods where code is being executed
        2.  Running automated scripts that test inputs into your system
    3.  Tradeoffs
        1.  Dynamic tests are technical, but provide lots of coverage
        2.  Manual tests are easy, but leave your code exposed to bugs
5. A good automated test is
   1. delightful to read/write
   2. does a quick, automated check for some app function
   3. supplements manual test, doesn't repeat or overlap
   4. automated testing it NOT
      1. a replacement for manual testing
      2. a way to test implementation details
      3. long, arduous, or grunt work
   5. automates tests that you can't / don't cover with manual testing
      1. can test even updated code vs. manual tests, which can't and don't
   6. don't cost a lot of time
6. Order of operation
   1. Building blocks / Units first (many small tests)
   2. Building blocks together (several tests for important paths)
   3. Integrated pieces as a whole (a few tests for high-value, critical user flows)
7. Priotization and order
   1. high-value features
      1. bring the most value or $$$ to an app
      2. for example: viewing and ordering products for AMZ, playing music on Spotify, user can read and send email for Gmail
      3. focus on "happy paths" - sunny day tests where you just test that the thing does what it's supposed in a non-exhaustive way
   2. edge cases for high-value features
      1. focus on a few "sad paths" - unexpected and unwanted behaviors
      2. for example: max order amount is 100, test if user can order 1000
   3. things that break easily
      1. list of features you notice break every now and then during development
      2. sensitive features, functions, modules
   4. basic react component testing
      1. move from most to least important
8. Sample components precedence
   1. components in high-value features
   2. components that are heavily reused across app (certain card or UI element)
   3. user interactions in components e.g.(onClick or onChange events)
   4. Conditional rendering e.g.(state changes w/ props || useState, context || redux)
   5. Utils & Hooks e.g.(functions used throughout certain components, custom hooks)
9. Anti-pattern
   1.  DON'T test implementation details
       1.  not reliable or representative of user behavior
       2.  definitions of this vary, but it's generally the nuts and bolts of how the things works vs. whether it works that you want to avoid testing for

## What do we test?

1. Understanding the different test types - automated tests with unique purposes
   1. Unit test
      1. Smallest possible 'units' of app
      2. Unit - individual building blocks; functions, components (in isolation); small 'chunks' of self-contained code;
      3. Projects many contain dozens or hundreds of these
      4. Good coverage means testing all the functions and components in your app
      5. Caveat: coverage can be misleading since having 100% doesn't ensure quality, only that 100% is being tested - careful with this!
      6. considered the most comon and important type of test by many
      7. rationale: if you test all the individual components well in isolation, then whole app has better odds of working as a whole
   2. Integration test
      1. verify that units working **together**; test **combination** of units
      2. example: multiple react components working together
      3. check whether multiple units produce the expected behavior **together**
      4. when you have many units tests, can combine them into a larger **integration test**
      5. projects typically only contain a few of these
      6. the line between unit and integration tests can get blurry e.g.(some components use other components)
      7. *generally important but fewer of these than unit tests*
   3. End-to-end (e2e) test
      1. test entire **workflows** or **scenarios**
      2. logging a user in and navigating to a certain page
      3. behavioral test, aim to reproduce human behavior
      4. only a few
      5. unit + integration tests provide most coverage and reduce need for extensive e2e testing
      6. drawbacks: slower and less focused; harder to consider all possible scenarios when looking at app as a whole
      7. important, but partially covered by manual, unit, and integration tests so don't need many
      8. test from one end (front) to the other (back)
      9. mimicking interactions in the browser
   4.  best practice:
       1.  bottom-up testing to build from many small, concise tests to a few "harder" more expensive tests


## Resources 

- [Max Schwarzmuller's Udemy React course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
- [Traversy Media 'React Testing Crash Course'](https://www.youtube.com/watch?v=OVNjsIto9xM)

