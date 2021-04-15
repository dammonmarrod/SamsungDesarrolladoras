module.exports = {
insertDocument : function (db, document, callback) {
    const collection = db.collection('usuarios');
    // Insertar documento
    collection.insertOne(document, function (err, result) {
        if (err) { console.log("Error insertando documento: ", err); }
        // Llamada a la función callback con el resultado final 
        callback(err, result);
    });
}
}
