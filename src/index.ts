let vuelta1 = document.getElementById("vuelta1");
let btnCacular = document.getElementById("btnCalcular");
let vuelta2 = document.getElementById("vuelta2");
let vuelta3 = document.getElementById("vuelta3");
let vuelta4 = document.getElementById("vuelta4");

rotulo1.innerHTML = "1° Vuelta";
rotulo2.innerHTML = "2° Vuelta";
rotulo3.innerHTML = "3° Vuelta";
rotulo4.innerHTML = "4° Vuelta";

btnCalcular.addEventListener("click", () => {
  let vuelta10: number = Number(vuelta1.value);
  let vuelta20: number = Number(vuelta2.value);
  let vuelta30: number = Number(vuelta3.value);
  let vuelta40: number = Number(vuelta4.value);

  let tiempoTotal: number = vuelta10 + vuelta20 + vuelta30 + vuelta40;
  let promedio: number = tiempoTotal / 4;
  console.log("El Tiempo total es:", tiempoTotal);
  console.log("Promedio por vuelta : ", promedio);
});
