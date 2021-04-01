window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB;
var request = indexedDB.open('fichas');
var db = null;
var idProvincia = 1;
request.onsuccess = function (event) {
	db = event.target.result;
	console.log('La base de datos se ha abierto correctamente\n', db);
};

request.onupgradeneeded = function (event) {
	db = event.target.result;
	var personas = db.createObjectStore('personas', { keyPath:'id', autoincrement: false });
	var provincias = db.createObjectStore('provincias', {keyPath: 'id', autoincrement: true });
	console.log('La base de datos se ha cambiado de versión correctamente\n', db);
};

request.onerror = function (event) {
	console.log('Fallo al abrir indexedDB ' + event.target.message);
};


function insertarProvincia(n, c, p) {
	var provincia = {
		id: idProvincia,
		nombre: n,
		codigo: c,
		poblacion: p
};

var transaction = db.transaction(['provincias'], "readwrite");
var store = transaction.objectStore('provincias');
var requestAdd = store.put(provincia);

requestAdd.onsuccess = function (event) {
	idProvincia = idProvincia + 1;
	requestAdd.onerror = function (event) {
		console.log('Inserción incorrecta');
	};
};


function getProvincia() {
	var transaction = db.transaction(['provincias'], "readonly");
	var store = transaction.objectStore('provincias');
	var request = store.get(1);
	console.log('Recuperar provincia', request);
};

function getProvincias() {
	var transaction = db.transaction(['provincias'], "readonly");
	var store = transaction.objectStore('provincias');
	var data = [];
	var request = store.openCursor();

	request.onsuccess = function (event) {
		var cursor = event.target.result;
		if (cursor) {
			data.push(cursor.value);
			console.log(data);
			cursor.continue();
		}
	};
	console.log('Recuperar provincia', request);
};

function deleteProvincia(identificador) {
	var transaction = db.transaction(['provincias'], "readwrite");
	var store = transaction.objectStore('provincias');
	var request = store.delete(parseInt(identificador));

	console.log('Borrada provincia->', identificador,'.........', request);
};

function deleteProvincias() {
	var transaction = db.transaction(['provincias'], "readwrite");
	var store = transaction.objectStore('provincias');
	var request = store.clear();
};
}
