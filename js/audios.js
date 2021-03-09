let boton = document.querySelector(".reproductor");

boton.addEventListener("click", () => {
  let etiquetaAudio = document.createElement("audio");
  etiquetaAudio.setAttribute("src", "./audios/risas-chuky.mp3");
  etiquetaAudio.play();
});
