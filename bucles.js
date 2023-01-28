// 1.-
let edad = 12

if (edad >= 18){
  console.log("Valido")
} else{
  console.log("No Valido")
}

// 2.-

const admin = {
  nombre: 'Duncan',
  email: 'dgallardo136@gmail.com',
  país: 'México',
  acceso: true,
}

const usuario1 = {
  nombre: 'usuario1',
  email: 'usuario2@gmail.com',
  país: 'México',
  acceso: false,
}

const usuario2 = {
  nombre: 'usuario2',
  email: 'usuario2@gmail.com',
  país: 'México',
  acceso: false,
}


const usuario3 = {
  nombre: 'usuario3',
  email: 'usuario3@gmail.com',
  país: 'México',
  acceso: false,
}

let usuarios = [
  {admin},
  {usuario1},
  {usuario2},
  {usuario3}
]

for(i = 0; i < usuarios.length; i++) {
  console.log(usuarios[i]);
}

// 3.-

function entradasCine(edad) {
  switch (true) {
    case (edad < 5 && edad >= 0):
      console.log("Entrada gratis!");
      break;
    case (edad >= 5 && edad <= 12):
      console.log("Descuento del 50%");
      break;
    case (edad > 12 && edad <= 18):
      console.log("Descuento del 25%");
      break;
    case (edad > 18 && edad <= 55):
      console.log("No hay descuento");
      break;
    case (edad > 55):
      console.log("30% de descuento");
      break;
    default:
      console.log("Edad invalida");
  }
}

entradasCine(3); 
entradasCine(8); 
entradasCine(15);
entradasCine(35);
entradasCine(65);
entradasCine(-5);
