# 7 Ways to deal with CSS

## Overview

There's no universal solution to using CSS in modern web apps. These notes look at the tradeoffs between the approaches, so you can decide what's right on a case-by-case basis.

## Global CSS

This is a global css file that applies to the entire applications.

### Cons
- Doesn't scale well with bigger apps
- Naming gets difficult because CSS cascades
  - To address, will likely need a naming convention like **BEM** - 'block element modifier'
  - Hard to do perfectly, will use `!important` everywhere - an anti-pattern
- Generally results in a large, inefficient bundle
  - Larger bundle, slower load times

### Pros
- lol, none i guess

## CSS Modules

Available out of the box with react, you use `Component.module.css` syntax to create a file and associate it to a specific component.

### Pros

- Looks just like regular css
- Scoped to an individual component
- No name collisions
  - E.g., two modules with the same class name won't interfere with each other
- Tells React exactly which css to load for a given page
  - Reduces bundle size
- `composes` property can import and override code from a different module

Example: composes

```css
.page {
    color: rebeccapurple;
    copmoses: className from "./shared.css";
}
```

### Cons
- Still plain CSS
- Lacks programmatic features
  - No loops, functions, mixins
  - We get these with preprocessors
    - Allow you to write different syntax
    - Sass, less, stylus
  - Then use a compiler to convert back into plain css

## .scss (most popular)

A superset of plain CSS allowing you to write regular css with additional features on top of it. 

Setup may require sass compiler install and changing file extensions to `.scss`. Compilation happens automatically in background.

### Pros
- variables
- mixins
- functions

### Cons
- entirely different language
- completely decoupled from main app code

## CSS-IN-JS (libraries)

Allow you to write css in your js code e.g.(styled components, emotion, etc.).

### Pros
- programmatic sassyness
- full power of js
- dynamic styles based on app state


> Next.js has a 'homegrown' solution called 'STYLED JSX'
> To use it, open a style tag, use the JSX attribute and write your css as s template literal string
> Can dynamically change styles based on state and modules are locally scoped; but code needs to look good

## Utility classes

Options include tailwind and windi.

### Pros
- rapidly build out a pretty UI
- style with utility classes (quickly!)
- IDE intellisense
- purges unused classes automatically for good bundle sizes

### Cons
- extra config and tooling
- big commitment
- no components

## CSS Framework

Bootstrap and Bulma are options. These include pre-built components that give you options for common UI components.

### Pros
- simple
- effective
- minimal learning curve

### Cons
- wrappers
- large bundle
- unused classes included in final bundle

## Component Library

React ecosystem has many e.g.(Mantine, Ant Design, Material, Rebass, Chakra, Tamagui)

### Pros
- lots of design systems in the react ecosystem
- utilities like hooks, modals, notifications, etc.

### Cons
- Can be very opinionated