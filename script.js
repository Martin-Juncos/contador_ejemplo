// 1. creamos una variable
let valor = 0;

// 2. Acceder a cada elemento
const contador = document.getElementById("contador");
const btnMenos = document.getElementById("btn_menos");
const btnReset = document.getElementById("btn_reset");
const btnMas = document.querySelector("#btn_mas");

// 3. Crear las funciones
function decremento() {
  valor--;
  contador.textContent = valor;
}
function incrementar() {
  valor++;
  contador.textContent = valor;
}
function reset() {
  valor = 0;
  contador.textContent = valor;
}

// 4. Escuchar los eventos
btnMenos.addEventListener("click", decremento);
btnMas.addEventListener("click", incrementar);
btnReset.addEventListener("click", reset);
