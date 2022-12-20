var saludo = "Hola mundo";

let nombre = "Ricardo";
console.log(nombre);

// Number
let edad = 35;
let decimal = 21.45;
let x = 44;
let y = 444;

//Boolean
let verdadero = true;
let falso = false;

//Undefined
let indefinido = undefined;

//Null
let nulo = null;

console.log(`${saludo} ${decimal} ${verdadero} ${indefinido} ${nulo}`)

const apellido = "Perez";
console.log(apellido);

//Concatenacion
console.log("Hola " + nombre + " " + apellido + ", usted tiene " + edad + " años.")

//Interpolacion
console.log(`Hola ${nombre} ${apellido} usted tiene ${edad} años.`)

//Operaciones aritmecitas
console.log(edad + decimal);
console.log(edad - decimal);

//Asignacion mas operaciones
console.log(edad = x);
console.log(y += decimal);
console.log(x *= y);

//Comparacion
console.log(x <= y);
console.log(x >= y);
