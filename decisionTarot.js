import { AllTarotCards } from "./tarotApi.js";
const main = document.querySelector(".cardsDisplay");
const firstButtonFirstWay = document.getElementById("button1");
const secondButtonFirstWay = document.getElementById("button2");
const thirdButtonFirstWay = document.getElementById("button3");
const firstButtonSecondWay = document.getElementById("button4");
const secondButtonSecondWay = document.getElementById("button5");
const thirdButtonSecondWay = document.getElementById("button6");
const firstP = document.querySelector(".firstCardFirstWay");
const secondP = document.querySelector(".secondCardFirstWay");
const thirdP = document.querySelector(".thirdCardFirstWay");
const fourthP = document.querySelector(".firstCardSecondWay");
const fifthP = document.querySelector(".secondCardSecondWay");
const sixthP = document.querySelector(".thirdCardSecondWay");

const firstContainer = document.getElementById("firstWay1");
firstContainer.style.color = "#d3b76d";
firstContainer.style.fontFamily = "Georgia, serif";

const secondContainer = document.getElementById("firstWay2");
secondContainer.style.color = "#d3b76d";
secondContainer.style.fontFamily = "Georgia, serif";

const thirdContainer = document.getElementById("firstWay3");
thirdContainer.style.color = "#d3b76d";
thirdContainer.style.fontFamily = "Georgia, serif";

const fourthContainer = document.getElementById("secondWay1");
fourthContainer.style.color = "#d3b76d";
fourthContainer.style.fontFamily = "Georgia, serif";

const fifthContainer = document.getElementById("secondWay2");
fifthContainer.style.color = "#d3b76d";
fifthContainer.style.fontFamily = "Georgia, serif";

const sixthContainer = document.getElementById("secondWay3");
sixthContainer.style.color = "#d3b76d";
sixthContainer.style.fontFamily = "Georgia, serif";

const deck = [...AllTarotCards];

function drawCard() {
  const randomIndex = Math.floor(Math.random() * deck.length);
  const card = deck[randomIndex];

  deck.splice(randomIndex, 1);

  return card;
}

firstButtonFirstWay.addEventListener("click", () => {
  const randomCard = drawCard();

  const img = document.createElement("img");
  img.src = randomCard.image;

  img.classList.add("card-image");

  const title = document.createElement("h3");
  title.textContent = randomCard.name;
  title.classList.add("card-name");

  const meaning = document.createElement("p");
  meaning.textContent = randomCard.meaning;
  meaning.classList.add("card-meaning");

  const adviceText = document.createElement("p");
  adviceText.textContent = randomCard.advice;
  adviceText.classList.add("card-advice");
  firstContainer.textContent = "";

  firstContainer.append(img, title, meaning, adviceText);
  firstButtonFirstWay.remove();

  firstContainer.addEventListener("mouseover", () => {
    firstP.classList.add("hover-effect-text");
  });
  firstContainer.addEventListener("mouseout", () => {
    firstP.classList.remove("hover-effect-text");
  });
});
secondButtonFirstWay.addEventListener("click", () => {
  const randomCard = drawCard();

  const img = document.createElement("img");
  img.src = randomCard.image;

  img.classList.add("card-image");

  const title = document.createElement("h3");
  title.textContent = randomCard.name;
  title.classList.add("card-name");

  const meaning = document.createElement("p");
  meaning.textContent = randomCard.meaning;
  meaning.classList.add("card-meaning");

  const adviceText = document.createElement("p");
  adviceText.textContent = randomCard.advice;
  adviceText.classList.add("card-advice");
  secondContainer.textContent = "";

  secondContainer.append(img, title, meaning, adviceText);
  secondButtonFirstWay.remove();

  secondContainer.addEventListener("mouseover", () => {
    secondP.classList.add("hover-effect-text");
  });
  secondContainer.addEventListener("mouseout", () => {
    secondP.classList.remove("hover-effect-text");
  });
});

thirdButtonFirstWay.addEventListener("click", () => {
  const randomCard = drawCard();

  const img = document.createElement("img");
  img.src = randomCard.image;

  img.classList.add("card-image");

  const title = document.createElement("h3");
  title.textContent = randomCard.name;
  title.classList.add("card-name");

  const meaning = document.createElement("p");
  meaning.textContent = randomCard.meaning;
  meaning.classList.add("card-meaning");

  const adviceText = document.createElement("p");
  adviceText.textContent = randomCard.advice;
  adviceText.classList.add("card-advice");
  thirdContainer.textContent = "";

  thirdContainer.append(img, title, meaning, adviceText);

  thirdButtonFirstWay.remove();

  thirdContainer.addEventListener("mouseover", () => {
    thirdP.classList.add("hover-effect-text");
  });
  thirdContainer.addEventListener("mouseout", () => {
    thirdP.classList.remove("hover-effect-text");
  });
});

firstButtonSecondWay.addEventListener("click", () => {
  const randomCard = drawCard();

  const img = document.createElement("img");
  img.src = randomCard.image;

  img.classList.add("card-image");

  const title = document.createElement("h3");
  title.textContent = randomCard.name;
  title.classList.add("card-name");

  const meaning = document.createElement("p");
  meaning.textContent = randomCard.meaning;
  meaning.classList.add("card-meaning");

  const adviceText = document.createElement("p");
  adviceText.textContent = randomCard.advice;
  adviceText.classList.add("card-advice");
  fourthContainer.textContent = "";

  fourthContainer.append(img, title, meaning, adviceText);
  firstButtonSecondWay.remove();

  fourthContainer.addEventListener("mouseover", () => {
    fourthP.classList.add("hover-effect-text");
  });
  fourthContainer.addEventListener("mouseout", () => {
    fourthP.classList.remove("hover-effect-text");
  });
});

secondButtonSecondWay.addEventListener("click", () => {
  const randomCard = drawCard();
  const img = document.createElement("img");
  img.src = randomCard.image;

  img.classList.add("card-image");

  const title = document.createElement("h3");
  title.textContent = randomCard.name;
  title.classList.add("card-name");

  const meaning = document.createElement("p");
  meaning.textContent = randomCard.meaning;
  meaning.classList.add("card-meaning");

  const adviceText = document.createElement("p");
  adviceText.textContent = randomCard.advice;
  adviceText.classList.add("card-advice");
  fifthContainer.textContent = "";

  fifthContainer.append(img, title, meaning, adviceText);
  secondButtonSecondWay.remove();

  fifthContainer.addEventListener("mouseover", () => {
    fifthP.classList.add("hover-effect-text");
  });
  fifthContainer.addEventListener("mouseout", () => {
    fifthP.classList.remove("hover-effect-text");
  });
});

thirdButtonSecondWay.addEventListener("click", () => {
  const randomCard = drawCard();

  const img = document.createElement("img");
  img.src = randomCard.image;

  img.classList.add("card-image");

  const title = document.createElement("h3");
  title.textContent = randomCard.name;
  title.classList.add("card-name");

  const meaning = document.createElement("p");
  meaning.textContent = randomCard.meaning;
  meaning.classList.add("card-meaning");

  const adviceText = document.createElement("p");
  adviceText.textContent = randomCard.advice;
  adviceText.classList.add("card-advice");
  sixthContainer.textContent = "";

  sixthContainer.append(img, title, meaning, adviceText);

  thirdButtonSecondWay.remove();

  sixthContainer.addEventListener("mouseover", () => {
    sixthP.classList.add("hover-effect-text");
  });
  sixthContainer.addEventListener("mouseout", () => {
    sixthP.classList.remove("hover-effect-text");
  });
});

document.getElementById("backButton").addEventListener("click", () => {
  window.location.href = "index.html";
});
