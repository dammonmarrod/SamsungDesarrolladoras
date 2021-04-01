
window.onload = function () {
	//ALMACENAMIENTO DATOS SIMPLES STRING
	sessionStorage.clear();
	sessionStorage.setItem('nombre1', 'lucas');
	sessionStorage.setItem('nombre2', 'david');
	sessionStorage.setItem('nombre3', 'noé');
	sessionStorage.setItem('nombre4', 'marta');
	sessionStorage.removeItem('nombre2');
	console.log(sessionStorage);

	//ALMACENAMIENTO EN DATOS COMPLEJOS OBJETOS
	sessionStorage.clear();
	var ficha = {
		nombre: 'Lucas',
		apellidos: 'Fernández Fernández',
		direccion: 'C/ Real 64',
		poblacion: 'Alcalá de Henares'
	};
	sessionStorage.setItem('ficha1', JSON.stringify(ficha));
	console.log(sessionStorage);
	var fichaRecuperada = JSON.parse(sessionStorage.getItem('ficha1'));
	console.log(fichaRecuperada);
};
