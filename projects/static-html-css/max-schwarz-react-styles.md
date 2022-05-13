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