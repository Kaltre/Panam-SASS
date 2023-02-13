let zapatos = [
  { marca: 'Panam', stock: 8, precios: 190 },
  { marca: 'Puma', stock: 7, precios: 199 },
  { marca: 'Adidas', stock: 6, precios: 499.99 },
  { marca: 'Converse', stock: 8, precios: 450 },
]

// 1. Marcas con sus stocks

function marcaStock(zapatos) {
  for (let i = 0; i < zapatos.length; i++) {
    console.log(zapatos[i].marca, zapatos[i].stock);
  }
}

marcaStock(zapatos);

// 2. Productos de más de 200 pesos

function masDe200(zapatos) {
  for (let i = 0; i < zapatos.length; i++) {
    if (zapatos[i].precios > 200) {
      console.log(zapatos[i]);
    }
  }
}

masDe200(zapatos);

// 3. Precio promedio de los productos

function precioPromedio(zapatos) {
  let total = 0;
  for (let i = 0; i < zapatos.length; i++) {
    total += zapatos[i].precios;
  }
  let promedio = total / zapatos.length;
  console.log('Precio promedio: ' + promedio);
}

precioPromedio(zapatos);

// 4. Orden alfabético

function imprimirAlfabeticamente(zapatos) {
  zapatos.sort((a, b) => a.marca.localeCompare(b.marca));
  for (let i = 0; i < zapatos.length; i++) {
    console.log(zapatos[i].marca);
  }
}

imprimirAlfabeticamente(zapatos);

// 5. Producto más caro y su precio

function masCaro(zapatos) {
  let precioMaximo = 0;
  let zapatoCaro;
  for (let i = 0; i < zapatos.length; i++) {
    if (zapatos[i].precios > precioMaximo) {
      precioMaximo = zapatos[i].precios;
      zapatoCaro = zapatos[i];
    }
  }
  console.log(zapatoCaro.marca + ': $' + Math.round(precioMaximo));
}

masCaro(zapatos);
