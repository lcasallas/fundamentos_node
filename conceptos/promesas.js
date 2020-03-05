function hola(nombre) {
	return new Promise(function(resolve, reject) {
		setTimeout(() => {
			console.log(`Hola ${nombre}`);
			resolve(nombre);
		}, 1000);
	});
}

function hablar(nombre) {
	return new Promise(function(resolve, reject) {
		setTimeout(() => {
			console.log('Bla bla bla...');
			// resolve(nombre);
			reject('ocurrio un error');
		}, 1000);
	});
}

function adios(nombre) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(`Adios ${nombre}`);
			resolve();
		}, 1000);
	});
}

console.log('Iniciando proceso.');
hola('leo')
	.then(hablar)
	.then(adios)
	.then(nombre => {
		console.log('termina proceso:', nombre);
	})
	.catch(error => {
		console.error('hubo un error');
		console.error(error);
	});
