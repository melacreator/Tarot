import { tarotCards } from "./tarotApi.js";

const button = document.querySelector("#generateButton");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

button.addEventListener("click", () => {
  main.innerHTML = "";
  footer.innerHTML = "";

  const randomCard = tarotCards[Math.floor(Math.random() * tarotCards.length)];

  const container = document.createElement("div");
  container.classList.add("card-container");

  const img = document.createElement("img");
  img.src = randomCard.image;

  img.classList.add("card-image");

  const title = document.createElement("h3");
  title.textContent = randomCard.name;
  title.classList.add("card-name");

  const meaning = document.createElement("p");
  meaning.textContent = randomCard.meaning;
  meaning.classList.add("card-meaning");

  container.append(img, title, meaning);
  main.append(container);

  const adviceText = document.createElement("p");
  adviceText.textContent = randomCard.advice;

  footer.append(adviceText);
  footer.classList.add("visible");
});

document.getElementById("backButton").addEventListener("click", () => {
  window.location.href = "index.html";
});
