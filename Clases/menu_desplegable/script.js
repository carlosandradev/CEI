// al hacer click en el boton "abrir", al nav se le pone la clase "desplegado"

// al hacer click en el boton "cerrar", al nav se le quita la clase "desplegado"


const navegacion = document.querySelector("nav");
/*const abrir = document.querySelector(".abrir");
const cerrar = document.querySelector(".cerrar");*/
const menu = document.querySelectorAll(".abrir,.cerrar");

/*for (let i = 0; i < menu.length; i++){
  menu[i].addEventListener("click", () =>{
    navegacion.classList.toggle("desplegado");
  })
}*/

menu.forEach( boton => {
  boton.addEventListener("click", () =>{
    navegacion.classList.toggle("desplegado");
  });
});

/*menu.forEach(boton =>{
  boton.addEventListener("click", () =>{
    if(boton.classList.contains("abrir")){
      navegacion.classList.add("desplegado");
    }else {
      navegacion.classList.remove("desplegado");
    }
  });
});
*/


/*
abrir.addEventListener("click", () => {
  navegacion.classList.toggle("desplegado");
});

cerrar.addEventListener("click", () => {
  navegacion.classList.toggle("desplegado");
});*/
