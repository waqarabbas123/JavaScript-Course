// create a toggle button that changes the screen to dark-mode when click and light-mode when click again

let btn = document.querySelector("#btn");
let bdy = document.querySelector('body')
let mode = "light";

btn.addEventListener("click", () => {
  if (mode === "light") {
    mode = "dark";
    bdy.classList.add('dark')
    bdy.classList.remove('light')
  } else {
    mode = "light";
    bdy.classList.add('light')
    bdy.classList.remove('dark')
  }
  console.log(mode);
});
