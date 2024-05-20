// ----------------Events--------------
// the change in the state of our object is called an events
//there are two ways to use event in javascript
// 1-event listner
// 2-event handler

// -------------event handler-----------
// inline events and js node events

// function clk() {
//   console.log("this is my frist event");
// }

// function dblClk() {
//   console.log("this is double cliked");
// }

// function mover() {
//   console.log("I am a mouse over");
// }

// function onkp() {
//     console.log("i am a on key press button");
// }

// -------------------------event Listner---------------
// the event are written in the best method is event listner

// -------------add event listner

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("mouseover" , (evt) => {
//     console.log(evt);
//     console.log('i am a click with the method of event listner');
//     console.log(evt.target);
//     console.log(evt.type);
// })

// --------------remove event listner

let aas = document.querySelector("#rbtn");

let asa1 = aas.addEventListener("click", () => {
  console.log("Hello i am a hanlder 1");
});
let asa2 = () => {
  console.log("Hello i am a hanlder 2");
};
let asa3 = aas.addEventListener("click", () => {
  console.log("Hello i am a hanlder 3");
});
let asa4 = aas.addEventListener("click", () => {
  console.log("Hello i am a hanlder 4");
});

// -----remove
ass.removeEventListener("click", asa2);

// =====================practice example==============

// let change = document.querySelector("#change");
// let bdy = document.querySelector("body");

// change.addEventListener("click", () => {
//     bdy.style.backgroundColor = 'gray'
//     change.style.background = 'transparent '
//     change.style.border = 'none'
//     bdy.style.color = 'yellow'
//     change.style.color = 'yellow'
// });
