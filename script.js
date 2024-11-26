const menuBtn = document.querySelector("#menuIcon");
const navBar = document.querySelector("#navBar");
const closeBtn = document.querySelector("#closeIcon")

menuBtn.addEventListener("click", menuBtnFunc);
closeBtn.addEventListener("click", closeIconFunc)

function menuBtnFunc() {
  navBar.style.transition = " all .8s ease-in-out";
  navBar.style.top = 0;
}

function closeIconFunc() {
    navBar.style.top = "-500px";
}

