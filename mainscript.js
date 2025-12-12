const membersButton = document.querySelectorAll(".membersOnly");

membersButton.forEach((button) => {
  button.addEventListener("click", () => {
    alert(
      "This feature is available for members only. Please sign up to access it."
    );
  });
});

document.getElementById("sideButtonRight1").addEventListener("click", () => {
  window.location.href = "./dailyTarot.html";
});

document.getElementById("sideButtonRight2").addEventListener("click", () => {
  window.location.href = "./blindSpotTarot.html";
});

document.getElementById("sideButtonRight3").addEventListener("click", () => {
  window.location.href = "./decisionTarot.html";
});
