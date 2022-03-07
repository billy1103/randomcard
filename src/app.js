/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector(".card").innerHTML = generateRandomSuit();
  document.querySelector(".card").innerHTML = generateRandomNumber();
};
let generateRandomNumber = () => {
  let numbers = [
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
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
let generateRandomSuit = () => {
  let suit = ["&#9830;", "&#9824;", "&#9829;", "&#9827;"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
