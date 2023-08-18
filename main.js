"use strict";

const switcher = document.getElementById("switch");
const bcircle = document.getElementById("blackcircle");
const wcircle = document.getElementById("whitecircle");
const header = document.getElementById("header");
const body = document.getElementById("body");
const card = document.getElementsByClassName("card");
const bold = document.getElementsByClassName("bold");
const light = document.getElementsByClassName("light");
const boldlight = document.getElementsByClassName("boldlight");
const attribution = document.getElementsByClassName("attribution");

function blackcolor() {
  bcircle.style.display = "block";
  wcircle.style.display = "none";
  body.style.backgroundColor = "hsl(230, 17%, 14%)";
  boldlight[0].style.color = "white";
  attribution[0].style.color = "white";
  switcher.style.backgroundImage =
    "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
  header.style.backgroundColor = "hsl(232, 19%, 15%)";
  
  for (var i = 0; i < card.length; i++) {
    card[i].classList.remove("lighthover", "lt");
    card[i].classList.add("darkhover", "dk");
  }
  
  for (var i = 0; i < bold.length; i++) {
    bold[i].style.color = "hsl(0, 0%, 100%)";
  }
  
  for (var i = 0; i < light.length; i++) {
    light[i].style.color = "hsl(228, 34%, 66%)";
  }
}

function whitecolor() {
  wcircle.style.display = "block";
  bcircle.style.display = "none";
  body.style.backgroundColor = "hsl(0, 0%, 100%)";
  boldlight[0].style.color = "hsl(228, 12%, 44%)";
  attribution[0].style.color = "black";
  switcher.style.backgroundImage = "none";
  switcher.style.backgroundColor = "hsl(230, 22%, 74%)";
  header.style.backgroundColor = "hsl(225, 100%, 98%)";
  
  for (var i = 0; i < card.length; i++) {
    card[i].classList.add("lighthover", "lt");
    card[i].classList.remove("darkhover", "dk");
  }
  
  for (var i = 0; i < bold.length; i++) {
    bold[i].style.color = "hsl(230, 17%, 14%)";
  }
  
  for (var i = 0; i < light.length; i++) {
    light[i].style.color = "hsl(228, 12%, 44%)";
  }
}

wcircle.addEventListener("click", blackcolor);
bcircle.addEventListener("click", whitecolor);
