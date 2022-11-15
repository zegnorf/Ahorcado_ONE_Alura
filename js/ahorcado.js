import { sortearPalabra } from "./sortear_palabra.js";
import { verificarLetra } from "./verificar_letras.js";
var espacios;
var palabraSecreta ;
var guiones = [];
const intentos =6;
const incorrecto = [];
const mayusculas = /[A-Z]/g;


let btnNvoJuego = document.querySelector("[data-inicio]");
btnNvoJuego.onclick =cambio;
console.log(btnNvoJuego);
sortearPalabra;

palabraSecreta

function cambio (){
  window.location.href = "../screens/nuevo_juego.html";
}

//btnNvoJuego.addEventListener("click", sortearPalabra, false);

/*const letra =document.getElementById("capturaLetras");
letra.addEventListener("keypress",verificarLetra,false);






function dibujarPalabraSecreta (){
  for(let cont=0; cont < palabraSecreta.length; cont++) { 
    if(caracter==palabraSecreta[cont]){
      guiones.splice(cont,1,caracter);
      espacios=new String(guiones);
      espacios=espacios.replaceAll(",","");
    }  
  document.getElementById('palabraSecreta').value=espacios;
  document.getElementById('capturaLetras').value= "";
  document.getElementById('capturaLetras').focus();
  }
  if(espacios==palabraSecreta){
    alert("Felicidades, Ganaste");
  }
}*/




