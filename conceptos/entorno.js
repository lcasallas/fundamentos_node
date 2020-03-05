let nombre = process.env.NOMBRE || 'en caso de null';
let web = process.env.WEB || 'no tengo web';

console.log(`Hola ${nombre}`);
console.log(`Mi web es: ${web}`);
console.log('cambio para nodemon');

//Comando para ejecutar en consola, indicando mi variable de entorno antes de ejcutar.
//NOMBRE=leonardo node entorno.js
//NOMBRE=leonardo WEB=lecode.dev node entorno.js
