// const process = require('process'); // no hay necesidad de importarlo viene con los modulos globales.

process.on('beforeExit', () => {
  console.log('leo, el proceso VA a termino');
});

//al momento de ejecutar el exit, se desconecta del eventLoop, lo cual ya no podra ejecutar mas tareas.
process.on('exit', () => {
  console.log('leo, el proceso termino');
});

process.on('uncaughtException', (err, origen) => {
  console.log('vaya se olvido capturar un error');
  console.error(err);
});

// funcionQueNoExiste();

console.log('esto si el error no se captura, no sale');
