const palabras  = ["PERRO","ESCALERA","ARBOL","LAMPARA","CELULAR","MOCHILA"];
const espacios = [];

export function sortearPalabra (){
    
    const palabraSecreta ="";
    const palabrasLocal= localStorage.getItem('palabrasLocal');
   // document.getElementById('capturaLetras').value="";
    //document.getElementById('letrasIncorrectas').value="";
    
    const sorteo= Math.round(Math.random()*palabrasLocal.length);
    if(palabrasLocal != null){  //
        palabraSecreta=palabrasLocal[sorteo];
    }
    else{
      sorteo= Math.round(Math.random()*palabras.length);
      palabraSecreta=palabras[sorteo];
    }
    
    for(let cont=0; cont < palabraSecreta.length; cont++){
       guiones.push("_ ");
    }
    espacios=new String(guiones);
    espacios=espacios.replaceAll(","," ");
    document.getElementById('palabraSecreta').value =espacios;
    document.getElementById('capturaLetras').focus();    
    console.log(palabraSecreta)
    return palabraSecreta;
}

