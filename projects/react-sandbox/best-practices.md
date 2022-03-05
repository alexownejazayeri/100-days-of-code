# React Tutorial Summary

### Notes on a truly good tutorial project
After getting a hint from a smart dev in my network to "just read the docs, they're good", I dove into React's [documentation](https://reactjs.org/tutorial/tutorial.html) and landed on the [tic-tac-toe tutorial](https://reactjs.org/tutorial/tutorial.html). I've included condensed notes below if you're in a rush, but highly recommend this for anyone who's learning. This and Tania Rascia's post were super helpful.

Hope this is helpful, or at least fun for someone other than me.

# Overview

## What is React?
React is:
- declarative
- efficient
- flexible
- ...**a javascript library for building user interfaces**

### What React lets you do
Make complicated User Interfaces (UIs) from smaller, more manageable chunks of code called **components**.
- Components tell React what to render
- Efficiently update and re-renders components when data changes

#### Caveat: a few different kinds of component - tutorial starts with **subclasses**.

### ```React.Component``` subclasses

Example Code:

```
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />
```
Here ```ShoppingList``` is a **React component class** aka(**React Component Type**).
- Takes in parameters called ```props``` short for "properties"
- Returns a hierarchy of views to display via the **render** method
  - ^ I didn't absorb this on first glance because I'm very new to coding, so I've tried to break it down below.

![Kurtis Blow - The Breaks](https://i.makeagif.com/media/3-24-2018/oN6l9a.gif)

#### Documentation Breakdown
Vocab Alert: what's a "**hierarchy of views**"?

##### First, what are **views**? 

**Views** come from **MVC Architecture** - down the rabbit hole we go!

MVC stands for **Model, View, Controller** and is a software design pattern. This architecture has origins in GUI design, but today is used to architect mobile and web apps.

MVC helps us with DRY (Don't Repeat Yourself) and app structure.

The three parts:
- Model
  - lowest level
  - responsible for maintaining data
  - connected to the database
  - add, retrieve data in response  to 'controller'
  - passes data to the controller
- View
  - represents data; generates UI
  - HTML/CSS; what the user sees
  - created from data collected by the model through the controller
  - note: view only "talks" to the controller
- Controller
  - enables data to pass between the views and model as an intermediary
  - no logic, processes data from model and send to the 'view'

So if a view is somethiing that gets data from a controller in MVC - the stuff that gets rendered in response to some data collected somewhere - then what's a view hierarchy? 

**View hierarchy** 
According to Apple's developer [subdomain](https://developer.apple.com/library/archive/documentation/General/Conceptual/Devpedia-CocoaApp/View%20Hierarchy.html) (it's pretty retro you should check it out) a view hieirarchy is how views are ordered in a window in relation to each other - how your views are composed as 'subviews' (sort of like constituent views?) under a 'superview'.

So in the context of a web app, we can think of one superview as being the main app component housing all of its subcomponents. Note that you can use some, all, or no React and that your 'superview' might be a div housing a widget for your larger site built on other tooling and libraries.

I think? Idk man, just Googling this stuff for the first time.

Okay, so long side quest. Let's tie it back with a quick summary:

1. React is a JavaScript library for building User Interfaces
   - It's fast and makes UIs easier to build with reusable components
   - makes the imperative (line by line) approach to js more declarative and handles the rest under the hood
2. Components
   - Several types 
   - React.Component subclasses 
     - extend React.Component module
     - take properties e.g.(username) and returns a hierarchy of views through a ```render``` method

Great. Now let's take another look at that code block:

```
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// Example usage: <ShoppingList name="Mark" />
```

The ```render``` method returns a **React element** - a description of what's meant to render on-screen.
- JSX is commonly used for its ease
- ```<div>``` syntax is transformed at build time to ```React.createElement('div')```.

The code above gets translated to:

```
/*#__PURE__*/
React.createElement(
  "div",
  {
    className: "shopping-list",
  },
  /*#__PURE__*/ React.createElement(
    "h1",
    null,
    "Shopping List for ",
    props.name
  ),
  /*#__PURE__*/ React.createElement(
    "ul",
    null,
    /*#__PURE__*/ React.createElement("li", null, "Instagram"),
    /*#__PURE__*/ React.createElement("li", null, "WhatsApp"),
    /*#__PURE__*/ React.createElement("li", null, "Oculus")
  )
);
```

Note: child components (subviews based on the MVC we learned earlier) are passed in as arguments to ```React.createElement()```. Here's a [link](https://reactjs.org/docs/react-api.html#createelement) to how ```createElement()``` works if you want to get a better sense of what's happening under the hood of your JSX.  I think the most important takeaway is that we need all our JSX to live in a parent `<div>` because of how this works under the hood but can probably survive for a while without digging too deep.


### JSX
- Special syntax we use to simplify the way we write components
- Allows us to write HTML into our JavaScript
- Can run JavaScript expressions w/in curly braces

### Key Idea
Since React elements are JavaScript objects, you can store them in a variable or pass them around your program.


## Inspecting the Starter Code
-  You  can check out the tutorial page for this.

## Passing Data Through Props
> Again the project specifics are in the tutorial. I've triied to include useful bites of info here for reference in and out of the context of this tutorial.

Data gets passed to components through properties. For exmaple:

```
class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />;
    }
}
```

The code above creates a ```React.Component``` subclass, a method called `renderSquare()` that takes a number as an argument (see: tutorial code) and passes that argument into the `<Square />` component as a property or **prop** called "value".

You can then refer to the value property on the props object using the **this** keyword and dot notation.

```
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}
```

Making data in a parent component available to a child component like this is often called **passing a prop**. In this case, we passed a prop from the parent `<Board />` component to the child `<Square />` component.

## Making an Interactive Component

### Handling Events
- Can add an 'onClick' event handler to a JSX element
- avoid confusions with 'this' keyword by using anon arrow functions for event handlers

**Example**
```
onClick={() => console.log('click)}
```
- React only calls the above function on a click event

### State
- how React "remembers"
- give components state with `this.state`
  - `this.state` is 'private' to the component it's defined in

**Example - Initializing State**
```
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button className="square" onClick{() => 
      console.log('click')}>
      {this.props.value}
      </button>
    )
  }
}
```

## Developer Tools



# Completing the Game

## Lifting State Up

## Why Immutability Is Important

## Function Components

## Taking Turns

## Declaring a Winner

# Adding Time Travel

## Storing a History of Moves

## Lifting State Up, Again

## Picking a Key

## Implementing Time Travel

## Wrapping Up