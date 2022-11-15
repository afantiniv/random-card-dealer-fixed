/* eslint-disable */
import "./style.css";
/*(window.onload = function() {
  generarCarta(valores, naipes);
};*/

var sec = 0;
let tmpSec = localStorage.getItem("secs");
if (tmpSec != null) {
  sec = parseInt(tmpSec, 10);
}
function pad(val) {
  return val > 9 ? val : "0" + val;
}
setInterval(function() {
  ++sec;
  if (sec % 10 == 0) {
    generar();
  }
  localStorage.setItem("secs", sec);
  document.getElementById("seconds").innerHTML = pad(sec % 60);
}, 1000);

function generar() {
  console.log();
  let wrap = document.querySelector(".wrapper");
  console.log(wrap);
  if (wrap != null) {
    deleteItem();
  }
  generarCarta(valores, naipes);
}

function deleteItem() {
  let span = document.querySelector(".wrapper");
  console.log(span);
  console.log("--------");
  console.log(span.parentElement);
  console.log("--------");
  document.querySelector("#cartagenerada").removeChild(span);
  console.log(span);
}

let element = document.getElementById("boton");
element.addEventListener("click", generar);

let valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
let naipes = ["corazon", "diamantes", "trebol", "espadas"];

function aleatorioArreglo(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function crearDivClass(clase) {
  let nuevoDiv = document.createElement("div");
  nuevoDiv.setAttribute("class", clase);
  console.log(nuevoDiv);
  return nuevoDiv;
}

function agregarDivs(divPadre, divHijos) {
  for (let i = 0; i < divHijos.length; i++) {
    divPadre.appendChild(divHijos[i]);
  }
}

function generarCarta(x, y) {
  let valor = aleatorioArreglo(x);
  let palo = aleatorioArreglo(y);

  let tipoCarta = "carta" + " " + palo;
  let divCarta = crearDivClass(tipoCarta);
  let divHeader = crearDivClass("carta-icon-header");
  let divValor = crearDivClass("carta-val");
  let divFooter = crearDivClass("carta-icon-footer");

  if (valor === "A") {
    divValor = crearDivClass("a-carta-val");
    divHeader.classList.remove("carta-icon-header");
    divHeader = crearDivClass("a-carta-header");
    divHeader.innerHTML = valor;
    divFooter.classList.remove("carta-icon-footer");
    divFooter = crearDivClass("a-carta-footer");
    divFooter.innerHTML = valor;
  } else {
    divValor.innerHTML = valor;
  }

  let divsHijos = [divHeader, divValor, divFooter];
  agregarDivs(divCarta, divsHijos);

  let divWrapper = crearDivClass("wrapper");
  let divBoton = crearDivClass("boton");
  let boton = document.createElement("button");
  boton.innerHTML = "Generar";
  console.log(boton);
  agregarDivs(divBoton, boton);
  console.log(divBoton);
  let divBody = document.getElementById("cartagenerada");
  console.log(divBody);

  agregarDivs(divWrapper, [divCarta]);
  divBody.appendChild(divWrapper);
  //agregarDivs(divBody, [divWrapper]);

  let ancho = document.getElementById("ancho");
  let alto = document.getElementById("alto");
  let objeto = document.querySelector(".carta");

  objeto.style.width = ancho.value.toString() + "px";
  objeto.style.height = alto.value.toString() + "px";
}

let anchox = document.getElementById("ancho");
let altoy = document.getElementById("alto");

anchox.addEventListener("change", event => {
  if (event.target.value < 300) {
    anchox.value = 300;
    alert("El ancho minimo permitido es 300px");
  }
  let objeto = document.querySelector(".carta");
  if (objeto == null) {
    generarCarta(valores, naipes);
    objeto = document.querySelector(".carta");
  }
  console.log(event.target.value);
  console.log(objeto);
  let val = event.target.value.toString();
  val = val + "px";
  console.log(val);
  objeto.style.width = val;
});

altoy.addEventListener("change", event => {
  if (event.target.value < 500) {
    altoy.value = 500;
    alert("El alto minimo permitido es 500px");
  }
  let objeto = document.querySelector(".carta");
  if (objeto == null) {
    generarCarta(valores, naipes);
    objeto = document.querySelector(".carta");
  }
  console.log(event.target.value);
  console.log(objeto);
  let val = event.target.value.toString();
  val = val + "px";
  console.log(val);
  objeto.style.height = val;
});
