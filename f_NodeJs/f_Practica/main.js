const userFunctions = require('./users');

const MongoClient = require('mongodb').MongoClient;

// Especificar la URL de conexión por defecto al servidor local
const url = 'mongodb://localhost:27017';

// Nombre de la base de datos a la que conectarse
const dbName = 'nodejs-mongo';

// Crear una instancia del cliente de MongoDB 
const client = new MongoClient(url, { useNewUrlParser: true });

// Conectar el cliente al servidor
client.connect(function (err) {
if (err) {
    console.log("Error al conectar al servidor: ", err);

    return;

} console.log("Conectado con éxito al servidor");

const db = client.db(dbName);

document = {
    "name": "Alan",
    "phone": "111-222  -3333"
};

// Llamar a la función para insertar
userFunctions.insertDocument(db, document, function (err, result) {
    if (!err) { console.log("Resultado de la inserción: ", result.result); }
});

client.close();

});
