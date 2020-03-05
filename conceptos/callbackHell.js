function soyAsincrona(nombre, miCallback) {
	console.log('soy una funcion asincrona');
	setTimeout(() => {
		console.log(`Hola ${nombre}`);
		miCallback(nombre);
	}, 1000);
}

function hablar(callbackHablar) {
	setTimeout(() => {
		console.log('Bla bla bla...');
		callbackHablar();
	}, 1000);
}

function adios(nombre, otroCallback) {
	setTimeout(() => {
		console.log(`Adios ${nombre}`);
		otroCallback();
	}, 1000);
}

function conversacion(nombre, veces, callbak) {
	if (veces > 0) {
		hablar(function() {
			conversacion(nombre, --veces, callbak);
		});
	} else {
		callbak(nombre);
	}
}

console.log('iniciando proceso');

soyAsincrona('leonardo', function(nombre) {
	conversacion(nombre, 3, function() {
		console.log('proceso terminado');
	});
});

// soyAsincrona('leonardo', nombre => {
// 	hablar(function() {
// 		hablar(function() {
// 			adios(nombre, function() {
// 				console.log('terminando proceso...');
// 			});
// 		});
// 	});
// });
