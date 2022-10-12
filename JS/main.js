let menuButton = document.querySelector(".mobMenu-button");
let mobMenuItem = document.querySelectorAll(".mobMenu-menuLink");
let mobMenu = document.querySelector(".mobMenu");
let menuActive = false;

menuButton.addEventListener("click", () => {
  if (!menuActive) {
    mobMenu.style.display = "flex";
    menuButton.innerHTML = '<img src="img/ico/quitMobMenu.svg" alt=""></img>';
    menuActive = true;
  } else {
    mobMenu.style.display = "none";
    menuButton.innerHTML = '<img src="img/ico/mobMenu.svg" alt=""></img>';
    menuActive = false;
  }
});

mobMenuItem.forEach((key, val) => {
  key.onclick = () => {
    mobMenu.style.display = "none";
    menuButton.innerHTML = '<img src="img/ico/mobMenu.svg" alt=""></img>';
    menuActive = false;
  };
});
