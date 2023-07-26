//Área del circulo => es PI por radioCirculoalcual

const PI = 3.1416;


let areaCirculo;

let radio =4;

areaCirculo = PI * (radio * radio);
radio = 10;

areaCirculo = PI * (radio * radio);

//document es el documento HTML al que esta ligado el archivo.
//el operador  .  me permite acceder a propiedades o métodos (acciones) del elemento
//write es un método(funcion que le pertenece a alguien) 
//document.write(areaCirculo);

const myModal = document.getElementById('modal-contactame');
const myElement = document.getElementById('contactame');

myModal.addEventListener('shown.bs.modal', () => {
    myElement.focus();
});
var app = document.getElementById('typewriter');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
//1000 milisegundor es 1 segundo
  .pauseFor(1000)
  .typeString('Shair Becerra Cruz')
  .pauseFor(300)
  .deleteChars(10)
  .start();