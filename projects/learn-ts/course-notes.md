# Overview

Lost all of my React - The Complete Guide notes besides the .ts files in the playground folder. Picking up from 'Creating a React + TypeScript Project'.

# React + TypeScript

## Creating a React + TypeScript Project

### Adding TypeScript w/ `create-react-app`

`npx create-react-app my-app --template typescript`

- `--template` is the important flag!

1. Diffs between a plain js `create-react-app`
   1. .tsx file extensions
      1. using typescript + jsx syntax
      2. use tsx to avoid ide complaining
   2. the web server
      1. compiling ts -> js behind the scenes
      2. taken and optimized further
      3. before js was bundled together, but have this extra step
      4. don't need to compile manually
      5. happens behind the scenes with `npm run build`
2. `package.json`
   1. dependencies
      1. ts - the lang, compiler
      2. types - important, act as translation bridges between vanilla js and typescript 
   2. react / react-dom
      1. great ide support and autocompletion etc.
      2. types react and react dom help with the extra annotations

## Working with Components & TypeScript

### Files to keep handy + why

- `react-app-env.d.ts`
  - 'links ts into our project'
- can get rid of
  - logo.svg
  - webvitals import in `index.tsx`
  - optional: react import, but fine to leave it in

### Working with TypeScript in React apps
- components largely look the same and don't require special type annotation
- not needed, generally using ts type inference
- code doesn't need a lot of types out of the box
  - changes as you develop
  - can use ts to **enhance** react code


## Working with Props & TypeScript

### Dealing with props

Consider this component
```TypeScript
function Todos(props) {
    return (
        <ul>
         // some stuff
        </ul>
    );
 }
```

TypeScript will yell at us for not assigning type definitions to props, which actually goes beyond our custom props and includes the `children` prop as well.

```typescript
function Todo(props: { tasks: string[], children }) {
    return(
        // some stuff
    )
}
```

- Cumbersome to do this every time
- We can use arrow function syntax and `.FC` for functional component
- We're using a generic type
- A function component can be converted into a generic function
  - functional component will be configured such that we make it clear
    - it's a react component function
    - has children
    - and we can define our own props that can be combined into the props object

## Adding a data model

### Consider how complicated our To-do object might get

- unique to-do id
- todo text
- title
- subtitle
- author
- time created
- active or not active

### Refining our types

- Can create data models

```
// Store your models in a folder

| my-react-ts-app
| |- src
| | |- components
| | | |- Todos.tsx
| | |- models
| | | |- todos.ts
```

- Notice the models file is has a `.ts` extension
- It's not a component, so don't use `.tsx`
- In this file, we create a todo type to describe the shape of our data

### Three ways to create a type
1. `type` keyword
2. `interface` keyword
3. `class` keyword
   1. We use this one in the course example
   2. See: todos.ts for the work

### The benefits of using a class

- Can instantiate the class an object
- Can also use the class name as a type
  - See: Todos.tsx
- TypeScript will know the types of the object from the class definition!
- We're making it much harder to misues our components and data -- if we pass the incorrect todos, we get an error that prevents us from breaking our object shape etc.