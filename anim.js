// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "En un rincón mágico del bosque,", time: 2 },
  { text: "crecía una flor especial llamada Nebu.", time: 8 },
  { text: "Nebu no era como las demás flores.", time: 15 },
  { text: "Tenía pétalos dorados que brillaban suavemente con la luz de las estrellas.", time: 24 },
  { text: "Cada noche, cuando el cielo se llenaba de estrellas, ", time: 34 },
  { text: "Nebu se iluminaba aún más. ", time: 39 },
  { text: "Parecía como si absorbiera la luz celestial.", time: 43 },
  { text: "Los animales del bosque venían a admirar su resplandor.", time: 50 },
  { text: "La flor parecía danzar al ritmo de la brisa nocturna.", time: 58 },
  { text: "Una noche, una pequeña mariposa se posó sobre Nebu.", time: 65 },
  { text: "Le preguntó: ¿Por qué brillas tanto?", time: 72 },
  { text: "Nebu respondió con una sonrisa:", time: 77 },
  { text: "Brillo para recordarles a todos que, incluso en la oscuridad, siempre hay luz y belleza.", time: 82 },
  { text: "Desde entonces, la luz de Nebu guiaba a los animales del bosque en sus noches más oscuras.", time: 92 },
  { text: "Todos aprendieron que la belleza puede iluminar incluso los momentos más sombríos.", time: 102 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1200);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);