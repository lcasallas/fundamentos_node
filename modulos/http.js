const http = require('http');

const router = (req, res) => {
  console.log('nueva peticion!');
  console.log(req.url);

  switch (req.url) {
    case '/hola':
      res.write('Hola, que tal');
      res.end();
      break;

    default:
      res.write('Error 404: No se lo que quieres');
      res.end();
  }
  // res.writeHead(201, { 'Content-type': 'text/plain' });

  // //Escribir respuesta al usuario
  // res.write('Hola ya se usar http de node js');

  // res.end();
};

http.createServer(router).listen(4000);

console.log('Escuchando hhtp en el puerto 4000');
