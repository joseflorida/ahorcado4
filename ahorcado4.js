//Variables
var palabras = ["musica","autor","cancion","cantantes","letra"];
var aleat = Math.floor(Math.random()*palabras.length);
var adivinar = palabras [aleat]
var solucion = [];
var intentos=0;
var aciertos=0;
var condicion=true;
var boton = document.getElementById("button");
var letrasconseguidas= [];

console.log(adivinar);

for (var i = 0; i < adivinar.length; i++) {
  solucion[i]="_";
}

function comprobar() {
  var acertado =false;
  var entradatxt="";
  entradatxt=letrauser.value;
    if (isNaN(entradatxt)) {
      for (var i = 0; i < adivinar.length; i++) {
        if (adivinar.charAt(i)==letrasconseguidas[i]) {
          salida.value="Esa letra ya la has puesto";
          } else {
        if (adivinar.charAt(i)==entradatxt) {
          solucion[i]=adivinar.charAt(i);
          acertado=true;
          aciertos++;
          letrasconseguidas[i]=adivinar.charAt(i);
        }
        }
        salida2.value=solucion;
        if (aciertos>=adivinar.length) {
          salida2.value="Has acertado!!!!, la solución es: "+adivinar
          boton =document.getElementById("button").disabled=true;
        }else if(intentos>=4){
          salida2.value="Has perdido :(";
          boton=document.getElementById("button").disabled=true;
        }
        letrauser.value="";
        }
        if (acertado==true) {
        salida.value="Has acertado la letra";
      }else {
        salida.value="No has acertado";
        intentos++;
        salida3.value=salida3.value+entradatxt+"-";
      }
      console.log(solucion);
      console.log(intentos);
    }else {
      salida.value="Introduce una letra";
    }
  }
