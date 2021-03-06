const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');
// readableStream.on('data', chunk => {
//   // console.log(chunk);
//   data += chunk;
// });
// readableStream.on('end', () => {
//   console.log(data);
// });

// process.stdout.write('hola');
// process.stdout.write('que');
// process.stdout.write('tal');

const transform = stream.Transform;

function Mayus() {
  transform.call(this);
}

util.inherits(Mayus, transform);

Mayus.prototype._transform = function(chunk, codif, callback) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  callback();
};

let mayus = new Mayus();
readableStream.pipe(mayus).pipe(process.stdout);
