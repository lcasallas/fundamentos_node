function otraFuncion() {
  return serompe();
}
function serompe() {
  return 3 + z;
}

function serompeAsincrona(callback) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (err) {
      console.error('Error en mi funcion asincrona');
      callback(err);
    }
  });
}

try {
  // serompe();
  // otraFuncion();
  serompeAsincrona(error => {
    console.error(error.message);
    console.log('hay error');
  });
} catch (err) {
  console.error('vaya algo se ha roto...');
  console.error(err.message);
  console.error(err);
  console.log('pero no pasa nada lo hemos capturado');
}

console.log('esto de aqui esta al final');
