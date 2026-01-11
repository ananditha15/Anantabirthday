const openScreen = document.getElementById("openScreen");
const card = document.getElementById("card");
const music = document.getElementById("music");
const message = document.getElementById("message");

const text = `
Sayang, happy birthday yaaa ❤️

Terimakasih sudah bertahan selama 30 tahun ini.
I know life was rough, but you went through it with your big heart ❤️

Terimakasih sudah dengan sangat sabar menjalani semua cobaan yang kamu terima.
Setiap Tuhan kasih cobaan, Tuhan pasti tau kamu bisa lewatinnya ❤️

Ayo kita jalanin sama-sama dalam suka dan duka.
Semoga langkah kita selalu dipermudah 🤍

Terimakasih sudah hidup dan ketemu aku ❤️
Semoga kamu selalu sehat dan bahagia.
`;

let index = 0;

function typeText() {
  if (index < text.length) {
    message.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 40);
  }
}

openScreen.addEventListener("click", () => {
  openScreen.style.display = "none";
  card.classList.remove("hidden");
  music.play();
  typeText();
});
