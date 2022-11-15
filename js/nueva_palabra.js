function nuevaPalabra () {
    document.getElementById('botonesInicio').style.display="none";
    document.getElementById('ingreso').style.display="flex";
  }
  
function insertarPalabra(){
    let nuevaPalabra=document.getElementById('ingresarPalabra').value;
    console.log(nuevaPalabra);
    let mayus =0;
    for(let cont=0; cont < nuevaPalabra.length; cont++){
      
      if(nuevaPalabra[cont].match(mayusculas)){ // verificar funcionamiento no sube el contador mayus no se cumple la condicion
        mayus=mayus +1;
      }
      console.log(cont);
    }
    console.log(mayus);
    
    if (nuevaPalabra.length <= 7 && nuevaPalabra.length == mayus ){
      palabras.push(nuevaPalabra);
      document.getElementById('ingreso').style.display="none";
      document.getElementById('juego').style.display="flex";
      sortearPalabra();
    }
    else{
      displayWarning("Ingrese una palabra en MAYUSCULAS y maximo 8 letras")
      document.getElementById('ingresarPalabra').value="";
    }
    
    
    //localStorage.setItem('palabrasLocal',palabras); // se queda comentado para realizar pruebas 
  }