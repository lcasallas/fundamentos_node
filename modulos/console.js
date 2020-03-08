console.log('algo');

console.info('paso por aqui');

console.error('error');

console.warn('warning message');

var tabla = [
  { a: 1, b: 'z' },
  { a: 2, b: 'r' },
];
console.log(tabla);
console.table(tabla); //util para pintar logs de json o arrays largos.

// Console group
function funcion1() {
  console.group('funcion 1');
  console.log('esto es de la funcion 1');
  console.log('esto tambien es de aqui');
  console.log('esto tambien es de aqui');
  console.log('esto tambien es de aqui');
  funcion2();
  console.log('he vuelto a la funcion 1');
  console.groupEnd('funcion 1');
}

function funcion2() {
  console.group('funcion 2');
  console.log('esto es de la funcion 2');
  console.log('esto tambien es de aqui 2');
  console.log('esto tambien es de aqui 2');
  console.log('esto tambien es de aqui 2');
  console.groupEnd('funcion 2');
}
console.log('empezamos');
funcion1();

console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
