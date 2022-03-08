/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  debugger;
  const variable = generateRandomSuit();
  document.querySelector(".topsuit").innerHTML = variable;
  document.querySelector(".bottomsuit").innerHTML = variable;
  document.querySelector(".number").innerHTML = generateRandomNumber();
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
  let suit = ["&spades;", "&clubs;", "&#9830;", "&#10084;"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
