// This is a code sandbox for learning and practicing the equality '==' and inequality '!=' operators

console.log(32 == 32);
// expects: true

console.log('it is your birthday' == 'it is your birthday');
// expects true

console.log('42' == 42);
// expects: true

console.log(0 == false);
// expects: true

// Comparison with no type conversion

1 == 1; // true
"we gon' be alright" == "we gon' be alright"; // true

// Comparison with type conversion

"1" == 1; // true
0 == "0"; // true
0 == false; // true
0 == null; // false
0 == undefined; // false
0 == !!null; // true, look at Logical NOT operator
0 == !!undefined; // true, look at Logical NOT operator
null == undefined; // true

// Comparison of objects - equality returns true only if both operands reference the same object

const number1 = new Number(3);
const number2 = new Number(3);

console.log(typeof number2);
console.log(typeof 3);
console.log("I evaluate to: " + (number1.valueOf() === number2.valueOf()))

number1 == 3; // true
number1 == number2; // false


// Inequality -- checks if its operands are NOT equal

console.log(1 != 1);
// expects: false

console.log('this suit is black' != 'this suit is black');
// expects: false

console.log('1' != 1);
// expects: false

console.log(0 != false);
// expects: false

// Comparison with no type conversion

0 != 1; // true
"shalom" != "aloha"; // true

13 != 13; // false
"celery" != "celery"; // false

// Comparison with type conversion

"0" != 0; // false
0 != "0" // false
0 != false; // false
0 != null; // true
0 != undefined; // true
0 != !!null; // false, look at Logical NOT operator
0 != !!undefined; // false, look at logical NOT operator
null != undefined; // false

// Comparison of objects

const number3 = new Number(3);
const number4 = new Number(3);

number3 != 3; // false
number4 != number2; // true

const object1 = {'key':'value'};
const object2 = {'key':'value'};

object1 != object2; // true
object2 != object2; // false