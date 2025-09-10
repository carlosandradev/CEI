const interruptor = document.querySelector(".interruptor");

var encendido = false;

interruptor.addEventListener("click", () => {
  if(encendido){
    interruptor.className = "interruptor";

  }else{
    interruptor.className = "interruptor encendido";
  }
  encendido = !encendido;

});