const openScreen = document.getElementById("openScreen");
const card = document.getElementById("card");
const music = document.getElementById("music");
const message = document.getElementById("message");
const ending = document.getElementById("ending");
const question = document.getElementById("question");
const answerText = document.getElementById("answer");


const text = `
Sayang, happy birthday yaaa ❤️

Terimakasih sudah bertahan selama 30 tahun ini.
I know life was rough, but you went through it with your big heart ❤️

Terimakasih sudah dengan sangat sabar menjalani semua cobaan yang kamu terima.
Setiap Tuhan kasih cobaan, Tuhan pasti tau kamu bisa lewatinnya ❤️

Di kehidupan kedepannya semoga semua perjalanan hidupmu yg gak mudah ini 
bisa km lewati dengan penuh keikhlasan dan kesabaran yang makin banyak yaaa sayang ❤️ 

semoga km selalu sehat agar bisa hidup lebih lama lagi. 
Terimakasih sudah berjuang dan berusaha sejauh ini ❤️ 
pasti gak mudah tapi buktinya kamu bisa sampai sejauh ini ❤️

semoga km selalu diberikan kemurahan hati dalam menghadapi aku.

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
  } else {
    // setelah teks selesai → munculin ending pelan
    setTimeout(() => {
      ending.classList.remove("hidden");
      ending.classList.add("show");
    }, 800);
  }
}
function answer(type) {
  if (type === "sayang") {
    answerText.innerHTML = "Aku tau kok 🤍";
  } else {
    answerText.innerHTML = "Aku juga sayang kamu, banget 🤍";
  }
  answerText.classList.remove("hidden");
}

openScreen.addEventListener("click", () => {
  openScreen.style.display = "none";
  card.classList.remove("hidden");
  music.currentTime = 5;
  music.play();
  typeText();
});


