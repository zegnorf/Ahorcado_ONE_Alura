import { sortearPalabra } from "./sortear_palabra.js";

export function verificarLetra(evento){
    let caracter = evento.key;
    if (caracter.match(mayusculas) && caracter !="Enter"){
      verificar();
    }
    else{
      evento.preventDefault() ;
      displayWarning("Ingresa solo letras Mayusculas");
    }
}

function verificar (){
    if(palabraSecreta.includes(caracter)){
      dibujarPalabraSecreta();
    }
    else if(incorrecto.includes(caracter)){
      displayWarning("Letra repetida, Ingrese otra");
      document.getElementById('capturaLetras').value= "";
    }
    else{    
      incorrecto.push(caracter);
      document.getElementById('letrasIncorrectas').value=incorrecto;
      document.getElementById('capturaLetras').value= "";
      document.getElementById('capturaLetras').focus();
      intentos=intentos-1;    
      displayWarning("Letra incorrecta, te quedan " + intentos + "intentos")
      if(intentos==0){
        alert("Fin del juego");
      } 
    }
    
  }
  