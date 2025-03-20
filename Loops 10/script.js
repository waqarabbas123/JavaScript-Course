// =----------------------loop-------------
// loop mean again and agian its offer a qucik and easy way to something are reapeated there are many types of loops .

// -----------------------------for loop--------------------

// the for loop statement create a loop that consist of three types are expression
// --------example 1

// for(i = 0 ; i<9; i++){
//     console.log(i);
// }

// ----------example 2

// let str = "";
// for(i=1;i<9;i++){
//     str = str + i
// }
// console.log(str);

// ----------example 3

// let array = [1,2,3,4,5,6];
// for(let i = 0 ; i< array.length;i++){
//     console.log(`element in index ${i} : ${array[i]}`);
// }

// ------------------------break and continue------------

//break exits the loop and goes to the first statement after the loop body, while continue skips the rest of the statements of the current iteration and proceeds to the next iteration.

// -------Break example

// for(let i = 1; i <= 20; i++){
//     console.log(`value of i ${i}`);
//     if(i==10){
//         console.log(` below number are been not detected 10`);
//         break// break key work  its do not print below number

//     }
// }

// ------continue example

// for(let i = 1; i <= 20; i++){
//     console.log(`value of i ${i}`);
//     if(i==10){
//         console.log(` below number are been not detected 10`);
//         continue//continue keyword its do print below
//     }
// }

//============================= While loops ======================

// The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true.

// --------example 1

// let i = 0;

// while(i<=10){
//     console.log('Waqar abbas :', i);
//     i++
// }

// --------example 2

// let myArray = ['one', "two", "three"]

// let arr = 0
// while (arr <= myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1
// }

//-------------------------------do-While loops----------------
// The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.

// let result = '';
// let i = 0;

// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);

// console.log(result);

// ----------example1

// let i = 20;
// do {
//   console.log("Apna college");
//   i++;
// } while (i <= 10);

// ----------example2

// let a  = 1;
// do{
//     console.log("waqar abbas");
//     document.write('waqar abbas   ')
//     a = a + 1
// }while(a<=10)


//----------------------------FOR IN LOOP--------------------
// for in loop is used to iterate over the property of an object. its return the propertys or key or or the object names

// const myObject = {
//   js: "javascript",
//   CSS: "Cascading style sheet",
//   rb: "ruby",
//   swift: "swift by apple",
// };

// for (const key in myObject) {
//   console.log(key);
// }

// for (const key in myObject) {
//   console.log(`${key} shortcut is of  ${myObject[key]}`);
// }
 


//----------------------------FOR of LOOP--------------------
// the  for of  loop are used to iterate the value of an iterable object sucah as array,string,maps etc

// ----------------example 1----------

// const numbers = [1, 2, 3, 4, 5];

// for (const num of numbers) {
//   console.log(num); 
// }

// ---------------------example 2-------------

// const students = [
//   { name: 'Ali', age: 20 },
//   { name: 'Sara', age: 22 },
//   { name: 'Ahmed', age: 21 }
// ];

// for (const student of students) {
//   console.log(`${student.name} is ${student.age} years old`);
// } 


// ------------------------forEach--------------------------
// The forEach() loop in JavaScript is a method that belongs to the Array prototype. It is used to iterate over an array's elements and execute a provided function once for each element.
// ======syntax of foreach 
// arr.forEach(callbackFunction);

// -------example-------

// let array = ['ali','hassan','waqar','zain'];

// array.forEach(function(name , nmbr){
//   console.log(`${nmbr} : ${name} `);
// });


// ------example 2-----

// const fruits = ['apple', 'banana', 'cherry'];

// fruits.forEach(function(element, index, array) {
//   console.log(`Element at index ${index}: ${element}`);
//   console.log(`Current array: ${array}`);
// });


// ------ example 3 -----

// const myCod = [
//   {
//       languageName: "javascript",
//       languageFileName: "js"
//   },
//   {
//       languageName: "java",
//       languageFileName: "java"
//   },
//   {
//       languageName: "python",
//       languageFileName: "py"
//   },
// ];


// // console.log(myCod[0].languageName , myCod[0].languageFileName, );

// myCod.forEach(function(item , index){
//   console.log(`${index} - ${item.languageFileName} `);
//   console.log(`${index} - ${item.languageName}`);
//   console.log('   ');
// })
