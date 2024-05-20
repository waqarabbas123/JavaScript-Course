// -------------------------Array---------------------------
// array means the collection of item
// storing a collection of multiple items under a single variable name, and has members for performing common array operations.

// -------------Create Arrays
// let student = ["ali", "abbas", "hassan", "zain"];

// console.log(student);
// console.log(typeof student);//object

// ------------ Array indices
// let student = ["ali", "abbas", "hassan", "zain"];

// // console.log(student[0]);
// // console.log(student[1]);
// // console.log(student[2]);
// // console.log(student[3]);

// // we can also print all the data
// console.log(student[0], student[1], student[2], student[3]);

// student[0] = 211;
// console.log(student[0], student[1], student[2], student[3]);

// -----------------Array Methods------------
// const Arr1 = [0, 1, 2, 3, 4, 5];
// let Arr2 = ["waqar", "ali", "hassan", "sajid", "fida"];

// ------push()------
//--add element in the end of array

// Arr1.push(8);
// Arr2.push('Roshan','zain')
// console.log(Arr1);
// console.log(Arr2);

// ------pop()-----
// remove one  last elements of the array

// Arr1.pop()
// Arr2.pop()

// console.log(Arr1);
// console.log(Arr2);


// ------unshift()-----
//add elements in the start of array. 
// Arr1.unshift(11,22)
// Arr2.unshift('alam','shayan')

// console.log(Arr1);
// console.log(Arr2);


// ------shift()-----
//remove frist elemets form the start of array.

// Arr1.shift()
// Arr2.shift()

// console.log(Arr1);
// console.log(Arr2);


// ------include()-----
//this method can determine the given enties are include in array its give ture or false

// console.log(Arr1.includes(2));
// console.log(Arr2.includes('waqar'));


// ------indexOf()-----
//in this method its the index which are elements are include
// console.log(Arr2.indexOf('hassan'));


// ------Join()-----

// console.log(Arr1.join());
// console.log(Arr2.join());


// ------slice() and splice() ---------
//-----slice
//remove elements from the start and end point are not include
// let myArr = Arr1.splice(2)
// console.log(myArr);

 //-----splice
// let Arr3 = ["waqar", "ali", "hassan", "sajid", "fida"];
 //remove elements from start and give a new sallow copy array
// const myn2 = Arr3.splice(1)
// console.log(myn2);

// ----------------------Spreading ------------------

// let Arr1 = [0, 1, 2, 3, 4, 5];
// let Arr2 = ["waqar", "ali", "hassan", "sajid", "fida"];


// Arr1.push(...Arr2)//its mean that sperad each element and add in another array 
// Arr1.push(Arr2)//its mean add the array in anohter array
// console.log(Arr1[3] , Arr1[8]);

// -----------concat()
// merge  two or more array and given all element in one array 

// let allArr = Arr1.concat(Arr2)
// console.log(allArr);
// console.log(allArr.length);


// -----------flat()

// let Arr1 = [0, 1, ['#', '*',['waqar', 'hassan',['cow','hassan']]]];

// //sperad elements and add in frist array either can also give 
// console.log(Arr1.flat());
// console.log(Arr1.flat(1));
// console.log(Arr1.flat(2));
// console.log(Arr1.flat(3));


// --------------form and isArray --------------

// const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];


//  console.log(Array.isArray(anotherArray));
// console.log(Array.from("waqar abbas"));//sperad each letter and give all the elements in string
// console.log(Array.from("waqar abbas").length);

// console.log(Array.from()); 

