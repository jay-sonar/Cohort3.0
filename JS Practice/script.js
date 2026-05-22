// ## Console & Basics

// 1. Print `"Hello JavaScript"` in the console.
console.log("Hello JavaScript");

// 2. Print your name, age, and city using one `console.log()`.
console.log("My Name is Jayesh Santosh Wankhede");

// 3. Print a warning message using `console.warn()`.
console.warn("This is Warning");

// 4. Print an error message using `console.error()`.
console.error("This is Error");

// 5. Use `console.table()` to display an array of 5 numbers.
console.table([20, 3, 19, 36, 6]);

// ## Variables

// 1. Create a variable called `studentName` and store your name in it.
var studentName = "Jayesh Wankhede"

// 2. Create a variable `age` and print it.
var age = 21
console.log(age);

// 3. Create two variables and swap their values.
var a = 2;
var b = 3;
console.log(a,b);
[a,b] = [b,a];
console.log(a,b);

// 4. Create a constant variable for `PI` and print it.
const PI = 3.14159

// 5. Declare a variable without assigning a value and print it.
var c
console.log(c);

// 6. Create a variable `score` and increase it by 10.
var score = 75;
score = 75 + 10;
console.log(score);

// 7. Create three variables for first name, last name, and full name.
// var firstName = prompt('Enter Your First Name');
// var lastName = prompt("Enter Your Last Name");
// var fullName = prompt("Enter Your Full Name");
// console.log(firstName, lastName, fullName);


// ## Data Types

// 1. Create variables of type string, number, boolean, null, and undefined.
var string = "This is string";
var num = 22;
var boolean = true;
var x = null;
var y // this is undefined because no value is defined

// 2. Check the type of different variables using `typeof`.
console.log(typeof(y));

// 3. Store your mobile number in a variable and check its type.
var mobNumber = 9850722574;
console.log(typeof(mobNumber));

// 4. Create a variable with value `null` and check its type.
var z = null;
console.log(typeof(z));

// 5. Create a bigint number and print it.
var num1 = 10n
console.log(num1);


// ## Type Conversion & Coercion

// 1. Convert the string `"50"` into a number.
var convert1 =  Number("50");


// 2. Convert the number `100` into a string.
var convert2 =  String(100);

// 3. Convert `"true"` into a boolean.
var convert3 = Boolean("true");

// 4. Check the output of:
// - `"5" + 2`
// - `"5" - 2`
// - `true + 1`
console.log("5" + 2);
console.log("5" - 2);
console.log(true + 1);

// 1. Create a variable with value `"123abc"` and convert it into a number.
var convert4 = Number("123abc")

// 2. Use `parseInt()` on `"500px"`.
console.log(parseInt("500px"));



// ## Operators

// 1. Add two numbers and print the result.
console.log(2 + 2);

// 2. Find the remainder when 25 is divided by 4.
console.log(25%4);

// 3. Find the square of a number using exponent operator.
var m = 19;
var n = 2;
console.log(m**n);

// 4. Increment a variable using `++`.
m++;
console.log(m);

// 5. Decrement a variable using `-`.
n--;
console.log(n);


// 6. Use `+=` operator to increase a variable by 20.
n = n + 20;
console.log(n);


// 7. Compare two numbers using `>`, `<`, `>=`, `<=`.


// 8. Check if two values are strictly equal using `===`.
var s =  "10";
var t = 10;
var u = s === t;
console.log(u);


// 9. Compare `"10"` and `10` using both `==` and `===`.
var u = s === t;
console.log(u);
var u = s == t;
console.log(u);

// 10. Create two boolean variables and test `&&`, `||`, and `!`.
var u = s === t && s == t;
console.log(u);
var u = s === t && s === t;
console.log(u);
var u = s === t || s == t;
console.log(u);
var u = s === t || s === t;
console.log(u);
var u = s !== t && s !== t;
console.log(u);



// ## Strings

// 1. Create a string and print its length.
var city = "Mumbai";
console.log(city.length);


// 2. Convert a string into uppercase.
console.log(city.toUpperCase());


// 3. Convert a string into lowercase.
console.log(city.toLocaleLowerCase());


// 4. Check if a string includes the word `"JavaScript"`.
console.log(city.includes("Javascript"));


// 5. Extract the word `"World"` from `"Hello World"`.
var world = "Hello World"
console.log(world.slice(6,11));


// 6. Replace `"apple"` with `"mango"` in a sentence.
var fruit = "This is Apple."
console.log(fruit.replace("Apple", "Mango"));


// 7. Split `"HTML,CSS,JS"` into an array.
var code = "HTML,CSS,JS"
console.log(code.split(","));


// 8. Remove extra spaces from a string.
var space = "      Hello    ";
console.log(space.trim());


// 9. Repeat the word `"Hi"` 5 times.
console.log("hi".repeat(5));

// 10. Print the first character of a string.
console.log(fruit.charAt(0));

// 11. Use template literals to print:`"My name is Aman and I am 20 years old"`

var name = "Aman";
var age = 20;
console.log(`My name is ${name} and I am ${age} years old`);
