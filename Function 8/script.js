// ================Function==============
// function mean the block of code which perform the specfic task

// ---------------simple example------
// function Myfunc(){
//     console.log('hello by waqar');
//     console.log('We can learning JS');
//     console.log('.........');
// }

// Myfunc();

// -------------simple example with peremeter and call with argument

// function Myfunc(msg){
//     console.log(msg);
// }
// Myfunc('i love js');

// --------add two Number

// function Myfunc(nmber1, nmber2) {
//  console.log(nmber1 + nmber2);
// }
// Myfunc(1, 4);

// ---------
// function sum(x,y){
//     s = x + y;
//      console.log('before return');//it is print because return keyword is below now
//     return s
//     console.log('before return');//this is not print beacuse return keyword is above form
// }

//   let val =  sum(122,122);
//   console.log(val);

// -------------

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("PLease enter a username");
//       return
//     }
//     return `${username} just logged in`

// }

// console.log(loginUserMessage('sakhawat'))
// console.log(loginUserMessage('hello'))

//------------------------

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))
// // its coonvert all the argument into a single array
// // like that --- [200,400,500,2000]

// ----------function with object

// const user = {
//     username: "waqar",
//     price: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject(user)
// handleObject({username: "ali",price: 399})//change the username and price

// ==========This keyword and Arrow Function============

// const user = {
//   username: "ali",
//   price: 999,
//   welcomeMessage: function () {
//     console.log(`${this.username} , welcome to my website`);
//   },
// };

// // user.welcomeMessage();
// user.username = "waqar"

// user.welcomeMessage()
// console.log(this);

// -------------this concept is not allowed ----------------

// function abc(){
//     let username = "ali"
//     console.log(this.username);
// }

// abc()

// -----------this concept is allowed in this function------------

// const abc = function () {
//     let username = "ali"
//     console.log(this.username);
// }


// ========================Arrow Function ===============


// let a = () =>{
//     let username = 'ali'
//     console.log(this.username);
// }

// ----Explicit Return Method =====------------

// let a = (num1,num2) =>{
//     return num1 + num2;
// }
// console.log(a(12,12));


// ----Implicit Return Method =====------------

// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log(addTwo(17, 3));


// const addTwo = () => ({username: "ali"})

// console.log(addTwo())


// ====================================================================
// ----Immediately Invoked Function Expressions (IIFE)--------------

// -----------eg1

//  ( function abc(){
//     console.log(`DB connected`);  
//  })();

// -----------eg2

( (name )=>{
    console.log(`the user name is ${name}`);
 })
 ('hassan');