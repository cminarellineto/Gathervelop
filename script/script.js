let modal = document.querySelector(".modal-container");
let page = document.querySelector("*");

function openMenu() {
  document.getElementById("header").onmouseleave = function () {
    closeMenu();
  };
  document.getElementById("header").style.width = "20%";
  document.getElementById("aside").style.visibility = "visible";
  document.getElementById("aside").style.opacity = "1";
  document.querySelector(".menu-icon").style.display = "none";

  setTimeout(() => {
    document.getElementById("menu").style.visibility = "visible";
    document.getElementById("menu").style.opacity = "1";
  }, 200);
}

function closeMenu() {
  document.getElementById("menu").style.visibility = "hidden";
  document.getElementById("menu").style.opacity = "0";
  document.getElementById("aside").style.visibility = "hidden";
  document.getElementById("aside").style.opacity = "0";
  setTimeout(() => {
    document.querySelector(".menu-icon").style.display = "flex";
    document.getElementById("header").style.width = "5%";
  }, 150);
}

function dropdown() {
  let dropdown = document.getElementById("dropdownJS");
  dropdown.style.display = "flex";
  dropdown.style.height = "13vh";
  dropdown.onmouseleave = function () {
    closeDropdown();
  };
}

function closeDropdown() {
  document.getElementById("dropdownJS").style.display = "none";
}

const openNewItem = () => {
  modal.style.display = "flex";
  page.style.overflow = "hidden";
};

const closeNewItem = () => {
  modal.style.display = "none";
  page.style.overflow = "visible";
};
