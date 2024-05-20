/* --------------------Dom------------ */
/* every element in html page accessiable by javascript it is called dom */

/* 1- the dom us the tree of nodes corresponding to html elements on a page */
/* 2- can modify and and remove nodes the dom which will modify add or remove the corresponding elements on then page  */

//  there are four main filler of dom 
// 1-select an html  
// 2- Changing html
// 3-Changeing css
// 4-Event listner


//=======================selecet html------------------
// there are four ways to select an html 

// --------------getElemenetById('')

// let b = document.getElementById('#head')
// console.log(b);


//----------getElementByTagName('')

// let a = document.getElementsByTagName('h3')
// console.log(a);


// ---------getElementByClassName('.')

// let c = document.getElementsByClassName('.Hello')

// console.log(c);


// ----------------querySelector('#id','.class','tag')

// let d = document.querySelector('.Hello')
// d.innerHTML = 'hello'



// --=========================Change an html===============

// there are three ways to change an html 
// .innerHTML = "hello form gb"
// .innerHTML = "hello from apna college"
// .textContent = "hello by waqar"

// ------------example
//  let qsa = document.querySelector('.Hello')
// qsa.innerHTML = 'hello by apna college'
// qsa.innerText = 'hello waqar'
// qsa.textContent = 'hwllo ali abbas'




// _____we cannot change any style in it because its give as a html collection we can use to loop to change any style or any add any style_________

// let all = document.querySelectorAll('li')

// all.forEach((item) => {
//   item.style.backgroundColor = "red";
//   item.style.color = "green";
// });




// ___________solution of change any style by getElementById

// => frist its give us as html collection .
// => then we can convert into array its give as nodelist
//=> then its a data or change a style in it

let now = document.getElementsByTagName("li")

let asdf = Array.from(document.getElementsByTagName("li"))

// console.log(asdf);
asdf.forEach((elemen) =>{
    elemen.style.backgroundColor = "yellow"
    elemen.style.listStyle = "none"
    elemen.style.fontSize = "20px"
    elemen.style.textTransform = "upperCase"
})