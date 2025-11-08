// Texto que queremos mostrar con efecto giratorio lento
const texto = "Instalación de Windows y Linux y Mantenimiento Preventivo"; // 1

// Referencia al elemento donde aparecerá el texto
const titulo = document.getElementById("titulo"); // 2

// Verifica que el elemento exista antes de aplicar el efecto
if (!titulo) { // 3
  console.error("No se encontró el elemento con id 'titulo'"); // 4
} else { // 5

  // Estilo base con transiciones suaves
  titulo.style.display = "inline-block"; // 6
  titulo.style.transition = "transform 1.5s ease, opacity 1.5s ease"; // 7
  titulo.style.transformOrigin = "center"; // 8

  // Función que maneja la animación de entrada y salida
  function girarTexto() { // 9
    // 🔹 Etapa 1: el texto entra desde la izquierda girando
    titulo.style.opacity = "0"; // 10
    titulo.style.transform = "rotateY(-90deg) translateX(-120px)"; // 11

    // Espera 0.5 s antes de mostrarlo
    setTimeout(() => { // 12
      titulo.textContent = texto; // 13
      titulo.style.opacity = "1"; // 14
      titulo.style.transform = "rotateY(0deg) translateX(0px)"; // 15
    }, 500); // 16

    // 🔹 Etapa 2: después de unos segundos visible, empieza a salir
    setTimeout(() => { // 17
      titulo.style.opacity = "0"; // 18
      titulo.style.transform = "rotateY(90deg) translateX(120px)"; // 19
    }, 4000); // 20 (espera 4 s antes de salir)
  }

  // Inicia la animación
  girarTexto(); // 21

  // Repite el efecto cada 6 s (1.5 entrar + 2.5 visible + 1.5 salir ≈ 6)
  setInterval(girarTexto, 5000); // 22
}
