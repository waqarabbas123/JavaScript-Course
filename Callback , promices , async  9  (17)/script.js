// ----------------Sync in js-----------

// ========synchrouns

// synchronous means the code run in a particular swquence of intsruction given in the program .
// Each instruction waits for the previous instraction to complete its execution

// ========Asynchrouns

// Due to aynchrounous programing sometine imo instruction get  block due to some previous instruction which cause a delau in the UI asynchronous code exeution allow to exevute nexr instruction immediatley and dosen't block the flow


//1. setTimeout()
//2.  setInterval
//3.  Promise
//4.  fetch

// ---------------------setTimeout----------------------
// The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires.
// --------example
// console.log("......Waqar abbas");

// function hello(){
//     console.log(`......Mesum Abbas`);
// }
// setTimeout(hello , 3000)

// -------------example of settimeout---------

// let chang = function () {
//   document.querySelector("h1").style.backgroundColor = "black";
//   document.querySelector("h1").style.color = "red"
//   document.querySelector("body").style.backgroundColor = "gray"
//   console.log("code was run");
// };

// let changeMe  = setTimeout(chang ,3000);

// document.querySelector('.Stop').
// addEventListener('click', function(){

//     clearTimeout(changeMe)
//     console.log('STOPPED');
//  })

// --------------------example  setInterval and clearInterval --------------------
// let second_set = function (name) {
//   console.log(`hello by ${name}`, Date.now());
// };

// let work = document.querySelector("#Start");
// work.addEventListener("click", function () {
//   clear = setInterval(second_set, 1000, "js");

//   document.querySelector("body").style.backgroundColor = "black";
//   document.querySelector("body").style.color = "white";
// });

// let work1 = document.querySelector("#stop");
// work1.addEventListener("click", function () {
//   clearInterval(clear);
//   document.querySelector("body").style.backgroundColor = "white";
//   document.querySelector("body").style.color = "black";
// });

// ------------------setInterval------------------------

// let set = function (name) {
//     console.log(`hello by ${name}`, Date.now());
//     // console.log("my name is waqar abbas");
//   };
//   setInterval(set ,2000,"Javascript")

//   // ---------clearInterval------------

// let abc = setInterval(set, 2000, "Javascript");
// clearInterval(abc);

// --------------========----------promises------=========--------------
// promises are the eventual completion of task  it is object in js.
// it is solution of callback hells

// ------syntax--
// let promises = new promises((resolve,reject) => {...})

// let promise = new Promise((resolve , reject ) =>{
//     console.log("i am a promise");
//     resolve(1234)
// })


// -----------------------resolve-----------------------
// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("my name is waqar abbas");
//   }, 2000);
//   resolve();
// })
//   .then(() => {
//     console.log("this is me  resolve❤");
//   })
//   .catch(() => {
//     console.log("this is you reject");
//   });

//   --------------------------reject------------------

//   new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("my name is Ali Abbas");
//     }, 2000);
//     reject();
//   })
//     .then(() => {
//       console.log("this is me resolve❤");
//     })
//     .catch(() => {
//       console.log("this is you reject");
//     });


// --------------------promise in async functions -------------

// function asyncFun() {
//     return new Promise((resolve , reject) =>{
//         setTimeout(()=>{
//             console.log(`some data 1`);
//             resolve("succes")
//         },4000)
//     })
// }
// console.log("geting data ...");

// let p1 = asyncFun();
// p1.then((res) =>{
//     console.log(res);
// })


// ------------------Async Await method ---------------------
// async await also return a Promise 
// ----------syntax 
// async function myFunc(){...}

// await pauses the execution of its surrounding async function until the promise is settled.



function api(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("get date form api");
        resolve("succes")
      },3000)
    })
}

async function getWetherData(){
    await api()
}