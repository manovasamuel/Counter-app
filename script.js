"use strict";

const addBtn = document.querySelector(".btn-plus");
const minBtn = document.querySelector(".btn-minus");
const counter = document.querySelector(".c-Val");
const resetbtn = document.querySelector(".rst");

let cVal = parseInt(counter.textContent);

const add = () => {
  cVal++;
  counter.textContent = String(cVal);
  if (cVal > 0) {
    counter.classList.add("c-Val-p");
    counter.classList.remove("c-Val-n");
  } else if (cVal === 0) {
    counter.classList.add("c-Val");
    counter.classList.remove("c-Val-n");
    counter.classList.remove("c-Val-p");
  }
};
const minus = () => {
  cVal--;
  counter.textContent = String(cVal);
  if (cVal < 0) {
    counter.classList.add("c-Val-n");
    counter.classList.remove("c-Val-p");
  } else if (cVal === 0) {
    counter.classList.add("c-Val");
    counter.classList.remove("c-Val-n");
    counter.classList.remove("c-Val-p");
  }
};

const reset = () => {
  counter.textContent = "0";
  counter.classList.add("c-Val");
  counter.classList.remove("c-Val-n");
  counter.classList.remove("c-Val-p");
  cVal = 0;
};

addBtn.addEventListener("click", add);
minBtn.addEventListener("click", minus);
resetbtn.addEventListener("click", reset);
