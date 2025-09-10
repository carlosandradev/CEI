const botones = document.querySelectorAll("nav button");
const paneles = document.querySelectorAll(".panel");


for (let i = 0 ; i < botones.length; i++) {
  botones[i].addEventListener("click", function (){
    for (let j = 0; j < botones.length; j++){
      botones[j].className = `botones ${j === i ? "activo" : ""}`;
      paneles[j].className = `panel ${j === i ? "activo" : ""}`;
    }
  });
}