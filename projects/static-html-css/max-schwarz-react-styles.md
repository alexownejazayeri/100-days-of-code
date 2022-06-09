# Styling React Components
Make sure your apps look good with components that are styled in a:
- conditional and dynamic way
- using...
  - styled components
  - css modules

## Setting dynamic inline styles

1. Things we might want to do
   1. Change how styles are applied
      1. instead of using global styles, scope them locally
      2. set styles dynamically

Example: give a user feedback on valid v. invalid input
```javascript
return(
    <form onSubmit={formSubmitHandler}>
        <div className='form-control'>
        // using the inline `style` attribute here
        // it takes a javascript object that targets style props
        // in javascript for the component
            <label style={{color: !isvalid ? 'red' : 'black'}}>Course Goal</label>

        // Notice that the css properties are in camelCase for inline styles
            <input style={{borderColor: !isvalid ? 'red' : '#ccc', 
                            background: !isValid ? 'salmont' : 'transparent'}}
                   type='text' 
                   onChange={goalInputChangeHandler} />
        </div>
        <Button type='submit'>Add Goal</Button>
    </form>
)
```

- There's still room for optimiation! There's duplicate css in the `borderClolor` property
- Cons: 
  - inline styles take a high priority
  - preferable to work with alternatives

## Setting CSS Classes Dynamically

What if we could add a new css class to a div and would only add it conditionally?

Using backticks (template literal notation) and css subclass notation, we can dynamically add css with the bang, curly bracket notation.

In p l a i n e n g l i s h...

By setting your css classes up with accessible subclasses like...

```css
.form-control.invalid label {
    color: red;
}

.form-control.invalid input {
    border-color: red;
    background: #ffd7d7;
}
```

And dynamically rendering the subclasses onto the className attribute...


```javascript
return (
    <form onSubmit={formSubmitHandler}>
        // Notice here that we're controlling style in the className
        // attribute with template literals; You can repeat this technique
        // on many subclasses.
        <div className={`form-control ${!isValid ? 'invalid' : ''}`}>
            <label >Course Goal</label>
            <input type='text' 
                   onChange={goalInputChangeHandler} />
        </div>
        <Button type='submit'>Add Goal</Button>
    </form>
)
```

## Introducing Styled Components
- Right now we're
  - Creating classes and setting styles with selectors, elements, etc.
  - importing these styles into our files
  - and making css that's not scoped to the receiving file
    - plain css is globally scoped
- Can ensure the selectors, ids, etc. that you're using only apply to where you want to use them
- In large projects, names may get used twice and cause bugs
- Approach #1 to avoid this are 'styled components'
  - A package that lets you build components with styles attached to them where the style is scoped to the attached component


Installing...
`npm install --save styled-components'

- Can export them out of self-contained .jsx/.tsx files
  - depends on if not too many styles, but can also add directly to component
  - best practice is to try to keep files down to one component
  
```javascript
// Called as a method on the styled object using string literal tag notation that's valid js outside of react
// Use to pass a string literal as an argument v. ()
export const TileComponent = styled.div`
   /*Remove the class names*/
   {                
    display: flex;
    font-size: 2rem;
    text-align: center;
    line-height: 2rem;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    user-select: none;
    height: 55px;
    width: 55px;
    border-radius: 15px;
    border: 2.3px white solid;
  }
  /*There's support for sublasses and deeper selctors w/ the `&` char.*/
  &.correct {
    border: 2.3px rgb(100, 252, 30) solid;
  }

  &.present {
    border: 2.3px #ffec8d solid;
  }

  &.incorrect {
    border: 2.3px rgba(94, 94, 94, 0.301) solid;
  }
`;
```

- Dynamically render different styles by referencing subclasses and selectors in your code

```javascript

const Tile = (props) => {
  let tileState = props.tileState;
  return (
    <TileComponent className={`${tileState}`} id={props.id} role="application" aria-label={props.id}>
      {props.children}
    </TileComponent>
  );
};

// using TileComponent from example above, we can access a tileState variable
// That determines our tile's class conditionally based on if the
// character is correct, present, or incorrect.

```

- The same thing can be done by passing props to styled components
  - Props become available in the template literal tag
  - Since it's valid js, can render conditionally based on props
  - For example, determine border color with a ternary

Example: component using props to conditionally render styles
```javascript

import React from 'react';
import styled from 'styled-components';

const Tile = (props) => {
  let tileState = props.tileState;
  return (
    <TileComponent status={tileState} id={props.id} role="application" aria-label={props.id}>
      {props.children}
    </TileComponent>
  );
};

export default Tile;

//================================

export const TileComponent = styled.div`
   {
    display: flex;
    font-size: 2rem;
    text-align: center;
    line-height: 2rem;
    font-weight: bold;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    user-select: none;
    height: 55px;
    width: 55px;
    border-radius: 15px;
    border: 2.3px
      ${(props) =>
        props.status === ''
          ? 'white'
          : props.status === 'correct'
          ? 'rgb(100, 252, 30)'
          : props.status === 'present'
          ? '#ffec8d'
          : 'rgba(94, 94, 94, 0.301)'}
      solid;
  }
`;

```



