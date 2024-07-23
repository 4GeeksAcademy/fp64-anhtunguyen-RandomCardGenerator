/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
const generateCard = () => {
  const suits = ["♠", "♥", "♦", "♣"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  return {
    suit: randomSuit,
    value: randomValue
  };
};

const updateCard = () => {
  const newCard = generateCard();
  const cardElement = document.getElementById("card");

  const values = cardElement.querySelectorAll(".value");
  values.forEach(valueElement => (valueElement.textContent = newCard.value));

  const suits = cardElement.querySelectorAll(".suit");
  suits.forEach(suitElement => (suitElement.textContent = newCard.suit));
};

updateCard();
