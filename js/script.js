const listaSpesa = [
'pomodori ',
'patate ',
'latte ',
'pasta ',
'cerali',
]

const elementoSpesa = document.getElementById('user');

let counterSpesa = 0;

while(!(counterSpesa == listaSpesa.length)){ 
  
  elementoSpesa.innerHTML += `<li>${listaSpesa[counterSpesa]}</li>`;
  
  counterSpesa++;
}