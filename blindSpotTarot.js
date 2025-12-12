import { AllTarotCards } from "./tarotApi.js";
const main = document.querySelector(".cardsDisplay");
const firstButton = document.getElementById("button1");
const secondButton = document.getElementById("button2");
const thirdButton = document.getElementById("button3");
const fourthButton = document.getElementById("button4");
const firstCard = document.querySelector(".firstCard");
const secondCard = document.querySelector(".secondCard");
const thirdCard = document.querySelector(".thirdCard");
const fourthCard = document.querySelector(".fourthCard");

const firstContainer = document.getElementById("firstCard");
firstContainer.textContent = "first card";
firstContainer.style.color = "#d3b76d";
firstContainer.style.fontFamily = "Georgia, serif";

const secondContainer = document.getElementById("secondCard");
secondContainer.textContent = "second card";
secondContainer.style.color = "#d3b76d";
secondContainer.style.fontFamily = "Georgia, serif";

const thirdContainer = document.getElementById("thirdCard");
thirdContainer.textContent = "third card";
thirdContainer.style.color = "#d3b76d";
thirdContainer.style.fontFamily = "Georgia, serif";

const fourthContainer = document.getElementById("fourthCard");
fourthContainer.textContent = "fourth card";
fourthContainer.style.color = "#d3b76d";
fourthContainer.style.fontFamily = "Georgia, serif";

const deck = [...AllTarotCards];

function drawCard() {
  const randomIndex = Math.floor(Math.random() * deck.length);
  const card = deck[randomIndex];

  deck.splice(randomIndex, 1);

  return card;
}

firstButton.addEventListener("click", () => {
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

  firstButton.remove();

  firstContainer.addEventListener("mouseover", () => {
    firstCard.classList.add("hover-effect-text");
  });
  firstContainer.addEventListener("mouseout", () => {
    firstCard.classList.remove("hover-effect-text");
  });
});

secondButton.addEventListener("click", () => {
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
  secondButton.remove();

  secondContainer.addEventListener("mouseover", () => {
    secondCard.classList.add("hover-effect-text");
  });
  secondContainer.addEventListener("mouseout", () => {
    secondCard.classList.remove("hover-effect-text");
  });
});
thirdButton.addEventListener("click", () => {
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
  thirdButton.remove();

  thirdContainer.addEventListener("mouseover", () => {
    thirdCard.classList.add("hover-effect-text");
  });
  thirdContainer.addEventListener("mouseout", () => {
    thirdCard.classList.remove("hover-effect-text");
  });
});
fourthButton.addEventListener("click", () => {
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
  fourthButton.remove();

  fourthContainer.addEventListener("mouseover", () => {
    fourthCard.classList.add("hover-effect-text");
  });
  fourthContainer.addEventListener("mouseout", () => {
    fourthCard.classList.remove("hover-effect-text");
  });
});

document.getElementById("backButton").addEventListener("click", () => {
  window.location.href = "index.html";
});

firstContainer.addEventListener("mouseover", () => {
  firstButton.classList.add("hover-effect");
});
firstContainer.addEventListener("mouseout", () => {
  firstButton.classList.remove("hover-effect");
});

secondContainer.addEventListener("mouseover", () => {
  secondButton.classList.add("hover-effect");
});
secondContainer.addEventListener("mouseout", () => {
  secondButton.classList.remove("hover-effect");
});
thirdContainer.addEventListener("mouseover", () => {
  thirdButton.classList.add("hover-effect");
});
thirdContainer.addEventListener("mouseout", () => {
  thirdButton.classList.remove("hover-effect");
});
fourthContainer.addEventListener("mouseover", () => {
  fourthButton.classList.add("hover-effect");
});
fourthContainer.addEventListener("mouseout", () => {
  fourthButton.classList.remove("hover-effect");
});
