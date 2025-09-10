const h1 = document.querySelector("h1");

function color(){
  let rgb = [];

  for(let i = 1; i <= 3; i++){ 
    rgb.push(Math.floor(Math.random() * 256)); 
  } 
  
  return `rgb(${rgb.join(",")})`; 
}

function grados(min = -5, max = 5) {
    return 5 - Math.floor(Math.random() * 11);
}

let caracteres = h1.innerText.split("");


for(let i = 0; i < caracteres.length; i++){
  if(caracteres[i] != " "){
    caracteres[i] = `<span style="rotate:${grados()}deg;color:${color()}">${caracteres[i]}</span>`;
  }
}

h1.innerHTML = caracteres.join("");