// --------------artimatic operators-----------

// let a = 10;
// let b = 2;

// console.log("a =", a, ": b = ", b);

// =========Addition======
// in this operator we can add two or more Element
// console.log("a + b =", a + b);

// =========Subtraction======
// in this operator we can subtact any two number
// console.log("a - b =", a - b);

// =========Muliplication======
// in this operator we can multiply any two number
// console.log("a * b =", a * b);

// =========Division======
// in this operator we can divide any two or more number
// console.log("a / b =", a / b);

// =========Modulus======
// in this opeator we can find remainder of the two number it is denoted by (percentage %)
// console.log("a % b =", a % b);

// =======Exponentiation========
// in this operator we can power of any number it is written as (**)

// console.log("a ** b =", a ** b);

// =======Increment========

//in this operator we can add one number in any number and we can also add more then one

// let a = 2;
// let b = 3;
// console.log("a =", a, " & b =", b);
// // a = a + 10;
// a++;
// b++;
// console.log("a++ =", a++);
// console.log(b);

// =======decrement========
// in this operator we can decrease one number in any random number
// let a = 2;
// let b = 3;
// console.log("a =", a, " & b =", b);
// // a--;
// console.log("b-- =", --b);
// console.log("a-- =", --a);

// ----------------------------Assignment Operators-----------------
// let a = 5;
// let b = 3;
// console.log("a =", a, "b =", b);
// ___________+=________
// a += 4;
// console.log("a=", a);
// b += 3;
// console.log("b=", b);

// ___________-=________
// a -= 1;
// console.log("a=", a);
// b -= 2;
// console.log("b=", b);

// ___________*=________
// a *= 2;
// console.log("a=", a);
// b *= 3;
// console.log("b=", b);

// ___________/=________
// a /= 2;
// console.log("a=", a);
// b /= 2;
// console.log("b=", b);

// ___________%=________
// in this type only one variable bee decleared
// a %= 2;
// console.log("a=", a);
// b %= 3;
// console.log("b=", b);

// ___________**=________
// a **= 2;
// console.log("a=", a);
// b **= 3;
// console.log("b=", b);

// ----------------------------Comparsion Operators-----------------
//in this operator we can compare two value and its shown a boolen premiteive data

// let a = 3;
// let b = 3;
// let c = 5;
// let d = "5";
// let e = "5";

// console.log(`a = ${a} : b = ${b} : c = ${c} : d = ${d} : e = ${e}`);

// ___________Equal to==________
// console.log("a == b", a == b);//it is true b/s because both value are equal
// console.log("a == c", a == c);//it is false b/s because both value are not equal

// ___________Not Equal to!=________
// console.log("a != b ", a != b);
// console.log("a != c", a != c);

// ___________Equal to & type===________
// in this operator both the data type and value are equal then its show true other wise it show as false
// console.log("a === b ", a === b);
// console.log("a === c", a === c);
// console.log("d === e", d === e);
// console.log("c === d", c === d);

// ___________Not Equal to & type!==________
// in this operator both the data type and value are not equal then its show true other wise it show as false
// console.log("a !== b ", a !== b);
// console.log("a !== c", a !== c);
// console.log("d !== e", d !== e);
// console.log("c !== d", c !== d);

// -----------------simple comparsion operators ----------------------

// ______________< , > , <= , >=-______________
// let a = 2;
// let b = 3;
// let c = 6;

// console.log(`a = ${a} : b = ${b} : c = ${c}`);

// console.log("a < b", a < b);
// console.log("a > c", a > c);
// console.log("a <= b", a <= b);
// console.log("a >= b", a >= b);

// ----------------------------Logial Operators-----------------
let a = 3;
let b = 6;
let cond1 = a > b;
let cond2 = a === 3;
let cond3 = b == 3;

// ----------logical AND &&
// in this operator all the condtition will been ture

// console.log("cond1 && cond2", cond1 && cond2);
// console.log("cond1 && cond3", cond1 && cond3);


// ----------logical OR||
// if the one condition is ture then the logical OR is ture while other condtion is false
// console.log("cond1 || cond2", cond1 || cond2);
// console.log("cond1 || cond3", cond1 || cond3);


// ----------logical NOT
// if the any condition will been ture then this operator will change into another condtion (ture/false)

console.log("!(a > b)", !(a > b));