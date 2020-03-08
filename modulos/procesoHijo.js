const { exec, spawn } = require('child_process');

//stdout -> estandar de salida.
//sterror -> estandar de error.
// exec('ls -la', (err, stdout, sterror) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

// exec('node modulos/console.js', (err, stdout, sterror) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

//spawn => me permite ejecutar procesos y estar pendiente de ellos, para indicar los comandos auxiliares los recibe en otra variable.
let proceso = spawn('ls', ['-la']);
console.log('proceso', proceso.pid);
console.log('proceso', proceso.connected);

proceso.stdout.on('data', dato => {
  console.log('esta muerto el proceso?');
  console.log(proceso.killed);
  console.log('dato', dato.toString());
});

proceso.on('exit', () => {
  console.log('el proceso termino');
  console.log(proceso.killed);
});
