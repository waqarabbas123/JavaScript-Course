let parent = document.querySelector(".parent");
let bdy = document.querySelector("body");
// console.log(parent.clidren);
//  console.log(parent.children[1].innerHTML);

for (let i = 0; i < parent.children.length; i++) {
  console.log(parent.children[i].innerHTML);
  parent.children[i].style.fontSize = "23px";
  parent.children[i].style.paddingLeft = "40px";
  parent.children[i].style.backgroundColor = "gray";
}

bdy.style.backgroundColor = "gray";
bdy.style.color = "orangered";

//  ______add style in childs

parent.children[0].style.color = "red";
parent.children[1].style.color = "blue";
parent.children[2].style.color = "green";
parent.children[3].style.color = "purple";
parent.children[4].style.color = "orange";

console.log(parent.firstElementChild.innerHTML);
console.log(parent.lastElementChild.innerHTML);
