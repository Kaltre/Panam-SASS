//1.-
function sumarTresNumeros (num1, num2, num3) {
    return num1 + num2 + num3;
}

var resultado = sumarTresNumeros(1, 2, 3);
console.log(resultado);

//2.-
function compararDosNumeros (num1, num2) {
  if (num1 > num2 ) {
    return num1 + " es más grande que " + num2;
  } else if (num1 < num2) {
    return num2 + " es más grande que " + num1;
  } else {
    return num1 + " es igual que " + num2;
  }
}

var result = compararDosNumeros(4, 22);
console.log(result);

var result = compararDosNumeros(20, 20);
console.log(result);

// 3.- Funciones flecha

const sumaDeTresNumeros = (num1, num2, num3) => num1 + num2 + num3;

console.log(sumaDeTresNumeros(1,2,3));

const compararNumeros = (num1, num2) => {
    return (num1 > num2) ?  num1 + " es más grande que " + num2 
    : (num1 < num2) ?  num2 + " es más grande que " + num1 
    : num1 + " es igual a " + num2;
}

console.log(compararNumeros(5, 10));
console.log(compararNumeros(21, 21));

// 4.- Objeto 

const admin = {
  nombre: 'Duncan',
  email: 'dgallardo136@gmail.com',
  país: 'México',
  acceso: true,
  salud: {
    edad: 21,
    sexo: 'masculino',
    peso: 72
  },
}

console.log(admin.nombre);
console.log(admin.salud.edad);
console.log(admin.país);

// 5.- Arreglo

const arreglo = ["java", 2, 5, [1, "script"]];

console.log(arreglo[0]);
console.log(arreglo[1]);
console.log(arreglo[3][1]);

