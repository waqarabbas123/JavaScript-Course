/* ==============conditional statement=================== */
/* we can add impliment statement in out code   */

// let mode = 'dark';
// let mode = 'light'
// let color ;
// ---------------------------
// if (mode=='dark'){
//     color = 'black'
// }
// console.log(color);
// --------------------------------
// if(mode==='light'){
//     color = 'white'
// }
// console.log(color);

// -------------example of if statement--------

// let id = 10;
// let rol = 222;
// let school = 'army';

// if(id== 10 ){
//     console.log('if id = 10 ! your name is , WAQAR ABBAS');
// }

// if(rol == 222){
//     console.log('if rol = 222 ! your name , ZAWAR IRNA ALI , ');
// }
// if(school == 'army'){
//     console.log('if school name is army  ! then your pricipal name is ALI NAQI');
// }

//--------------------------- If and else statement
// if and else are the two statement when the if condition is false then the else is been printed

// let mode = 'light';
// // ---1st condition
// if(mode == 'light'){
//     console.log('then the color name is [white]');
// }else{
//     console.log('then the color name is [dark]');
// }

// // 2nd conditon
// if(mode = 'dark'){
//     console.log('then the color name is [dark]');
// }else{
//     console.log('then the color name is [light]');
// }

//------------ even and odd
// syntxx is the rule for any statement

// let num = 11;

// if (num % 2 === 0) {
//   console.log(num, "is even");
// } else {
//   console.log(num, "is odd");
// }

// ------------------if and else if and else

// let mode = "dark";
// let color;

// if(mode == 'light'){
//     color = 'white'
// }else if(mode == 'dark' ){
//     color = 'black'
// }else{
//     color = 'default'
// }

// console.log(color);

// ----------example--------
// let mode = "dark";
// let color;

// if(mode == 'light'){
//     color = 'white'
// }else if(mode == 'blue' ){
//     color = 'black'
// }else{
//     color = 'default'
// }

// console.log(color);

// ---------------------------Ternary Operators----------------------------
// Other operator or in only one are two condition apply on it but the  ternary operators are apply  in three conditions

// _________gernal Syntax__________
// condition ? adult : non adult

// let age = 25;

// let result = age == 25 ? "yes" : "No";
// console.log(result);

// age >= 12 ? console.log("yes") : console.log("No");

// // ----------------------------

/*  Q1: get user to input a number using prompt ("enter a number"). check if the number is a miltiple of 5 or not.*/

// let num = prompt("Enter a Number");

// if (num % 5 === 0) {
//   console.log(num, "is a multiple of 5");
// } else {
//   console.log(num, "is not a multiple of 5");
// }

// ------------------Simple example of conditonal statement----------------------------------

// let score = prompt("Enter your Marks (0-100)");
// let grade;


// if(score>=90 && score <=100){
//     grade = 'A'
// }else if(score>=80 && score<=89){
//     grade = 'B';
// }else if(score>=70 && score<=79){
//     grade = 'C';
// }else if(score>=60 && score<=69){
//     grade = 'D';
// }else if(score>=50 && score<=59){
//     grade = 'E';
// }else if(score>=0 && score<=49){
//     grade = 'F';
// }

// console.log(`According to your marks then your grade is ${score} =  ${grade}`);