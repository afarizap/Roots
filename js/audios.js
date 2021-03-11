let chucky = document.querySelector(".reproductor");
let hello = document.querySelector(".hello");

chucky.addEventListener("click", () => {
  let etiquetaAudio = document.createElement("audio");
  etiquetaAudio.setAttribute("src", "../audios/risas-chuky.mp3");
  etiquetaAudio.play();
});

hello.addEventListener("click", () => {
  let etiquetaAudio = document.createElement("audio");
  etiquetaAudio.setAttribute("src", "../audios/hellooo-ringtones-.mp3");
  etiquetaAudio.play();
});


