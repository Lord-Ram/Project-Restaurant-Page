import "./style.css";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

console.log("Restaurant page loaded!");

const content = document.getElementById("content");

function clearContent() {
  content.innerHTML = "";
}

function setActiveButton(buttonId) {
  document.querySelectorAll(".tab-btn").forEach((button) => {
    button.classList.remove("active");
  });
  document.getElementById(buttonId).classList.add("active");
}

function showHome() {
  clearContent();
  loadHome();
  setActiveButton("home-btn");
}

function showMenu() {
  clearContent();
  loadMenu();
  setActiveButton("menu-btn");
}

function showContact() {
  clearContent();
  loadContact();
  setActiveButton("contact-btn");
}

document.getElementById("home-btn").addEventListener("click", showHome);
document.getElementById("menu-btn").addEventListener("click", showMenu);
document.getElementById("contact-btn").addEventListener("click", showContact);

showHome();
