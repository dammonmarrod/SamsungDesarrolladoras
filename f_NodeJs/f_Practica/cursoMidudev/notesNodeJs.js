const http=require('http') //Requerir el interfaz http

const port=3000; //Definir el puerto a utilizar

let notes=[ 
    {
        "id":1,
        "content":"Me tengo que suscribir a Midudev en Youtube",
        "date":"2019-05-30T17:30:31.0982",
        "important": true
    },
    {
        "id":2,
        "content":"Tengo que estudiar las clases del FullStack Bootcamp",
        "date":"2019-05-30T18:39:34.0912",
        "important": false
    },
    {
        "id":3,
        "content":"Repasar los resto de JS",
        "date":"2019-0530T19:20:14.29365",
        "important": true
    }

]//fin de let notes



//Creamos el servidor
const server=http.createServer((request,response)=>{
    response.writeHead(200, {'Content-Type': 'text/plain'});
    //200 Código del estado HTTP que se devuelve
    //'Content-Type', 'text/plain');Encabezados de la respuesta, texto plano
    response.end(JSON.stringify(notes));//Mensaje que se muestra
    //Para transforma el objeto en un String lo parseamos JSON.stringify


});//fin del server

//Ejecutamos el servicio para que permanezca a la espera
server.listen(port)
