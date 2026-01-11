
const openScreen = document.getElementById("openScreen");
const card = document.getElementById("card");
const music = document.getElementById("music");

openScreen.addEventListener("click", () => {
  openScreen.style.display = "none";
  card.classList.remove("hidden");
  music.play();
});