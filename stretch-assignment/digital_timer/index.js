"use strict";

// Defining DOM Elements
const digitOne = document.getElementById("secondTens");
const digitTwo = document.getElementById("secondOnes");
const digitThree = document.getElementById("msHundreds");
const digitFour = document.getElementById("msTens");
const allDigits = document.querySelectorAll(".digits");

let counter = 0;
const updateTimer = function () {
  counter = counter + 10;
  const counterString = counter.toString().padStart(5, "0");
  digitOne.textContent = counterString[0];
  digitTwo.textContent = counterString[1];
  digitThree.textContent = counterString[2];
  digitFour.textContent = counterString[3];
  if (counter >= 10000) {
    allDigits.forEach((cur) => (cur.style.color = "red"));
    clearInterval(timer);
  }
};

const timer = setInterval(updateTimer, 10);
