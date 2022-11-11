"use strict";

const inputNumber = document.querySelector(".input");
const totalPriceEl = document.querySelector(".total-price");
const numberWords = document.querySelector(".number-words");
const textArea = document.getElementById("text-input");
const numberOfSentences = document.querySelector(".number-sentences");
const properNamesCount = document.querySelector(".number-names");
const coountSymbolsWithoutSpaces = document.querySelector(".number-symbols");
const currencyName = document.querySelector(".currency");

// Modal window
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".close-modal");
const calcAll = document.querySelector(".calculate-all");

// Count the amount of words in a textarea

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.querySelector(".number").style.color = "green";
  totalPriceEl.textContent > 1
    ? currencyName.classList.remove("hidden")
    : currencyName.classList.add("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

function countText() {
  const text = document.getElementById("text-input").value;
  const numberOfWords = text.match(/\s/g);
  const numberOfSenteces = text.match(/\./g);
  const properNames = text.match(
    /(?:\b[^\.][A-Z][A-Za-z0-9]+\b)(?:\s*\b[A-Z][A-Za-z0-9]+\b)*(?:\s*\d+)?/g
  );
  const numberofSymbolsWithSpaces = text.match(/./g);

  numberWords.innerHTML = numberOfWords.length;
  numberOfSentences.innerHTML = numberOfSenteces.length;
  properNamesCount.innerHTML = properNames.length;
  coountSymbolsWithoutSpaces.innerHTML = numberofSymbolsWithSpaces.length;

  totalPriceEl.classList.remove("hidden");
  totalPriceEl.textContent = Math.floor(
    (numberofSymbolsWithSpaces.length / 1800) * 120
  );
}

calcAll.addEventListener("click", countText);
calcAll.addEventListener("click", openModal);

btnClose.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
