// =============Object============
// object is the one of the data type object mean the collection of key and his value 

// let obj = {
//     name : 'waqar abbas',
//     id : 129031,
//     isStudent : true
// };
// console.log(obj);
// console.log(typeof obj);


// ----------------object literals

//   ['full name'] : 'waqar ali',
// const mySym = Symbol("key1")

// const JsUser = {
//     name: "waqar",
//     age: 18,
//     ['full name']: ' Aryan ali',
//     [mySym]: "mykey1",
//     location: "danyor",
//     email: "abc@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"],
//     greeting : '12345',
//     greeting2:'dknfds'
// }

// console.log(JsUser);
// console.log(typeof JsUser)

// console.log(JsUser.name)
// console.log(JsUser['full name'])

// =======we can change any key and value 
// JsUser.email = 'waqar23999@gamil.com'
// // console.log(JsUser);

// // Object.freeze(JsUser)


// JsUser.greeting = function(){
//     console.log('hellow from js');
// }
// console.log(JsUser);


// JsUser.greeting2 = 222222222222222;
// console.log(JsUser);



// ----------------------object in array-------------

// const users = [
//     {
//         id: 1,
//         email: "ab1@gmail.com"
//     },
//     {
//         id: 2,
//         email: "abc2@gmail.com"
//     },
//     {
//         id: 3,
//         email: "abc3@gmail.com"
//     },
//     {
//         id: 4,
//         email: "abc4@gmail.com"
//     },
//     {
//         id: 5,
//         email: "abc5@gmail.com"
//     },

// ]

// console.log(users[3]);
// console.log(users[3].id);
// console.log(users[3].email);

// ---------------------------------------------

// let userOne = {
//     name : 'waqar abbas',
//     id : 323233,
//     isStudent : false
// }
// console.log(Object.keys(userOne));
// console.log(Object.values(userOne));
// console.log(Object.entries(userOne));
// console.log(userOne.hasOwnProperty());

// ---------------------add function in object-------------------------
// let student ={
//     fullName : 'waqar abbas',
//     ['F/name']:'Aran Ali',
//     age : 19,
//     student :false, 
//     email :'waqar23999@gmail.com',
// };

// student.myinto = function(){
//     console.log('hello i am student of 3beez technologie');
// }
// console.log(student);
