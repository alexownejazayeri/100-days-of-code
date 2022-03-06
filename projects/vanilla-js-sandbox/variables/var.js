// This is a playground for understanding the 'var' keyword

var x; 

console.log(x); // expects: undefined

var x = 10121998; // expects:

console.log(x);

const anniversary = () => {
    var x = 1109;
    console.log(x); // expects: 1109 (function-scope)
}

anniversary();

console.log(x); // expects: 10121998 (global-scope)

x = 11092019;
console.log(x); // expects: 11092019