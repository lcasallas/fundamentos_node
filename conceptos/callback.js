function soyAsincrona(nombre, miCallback) {
	console.log('soy una funcion asincrona');
	setTimeout(() => {
		console.log(`Hola ${nombre}`);
		miCallback(nombre);
	}, 1000);
}

function adios(nombre, otroCallback) {
	setTimeout(() => {
		console.log(`Adios ${nombre}`);
		otroCallback();
	}, 1000);
}

console.log('iniciando proceso');

soyAsincrona('leonardo', nombre => {
	adios(nombre, () => {
		console.log('terminando proceso...');
	});
});
