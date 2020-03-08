const fielsystem = require('fs');

//Leer archivos.
function leer(ruta, callback) {
  fielsystem.readFile(ruta, (error, data) => {
    callback(data.toString()); //toString me permite convertir el buffer que retorna en un string.
  });
}

function escribir(ruta, contenido, callback) {
  fielsystem.writeFile(ruta, contenido, error => {
    if (error) {
      console.error('no he podido escribir', error);
    } else {
      console.log('se ha escrito correctamente');
    }
  });
}

function borrar(ruta, callback) {
  fielsystem.unlink(ruta, callback);
}

// leer(`${__dirname}/archivo.txt`, console.log);
// escribir(`${__dirname}/archivo1.txt`, 'soy un archivo nuevo', console.log);
borrar(`${__dirname}/archivo1.txt`, console.log);
