const http=require('http') //Requerir el interfaz http

const port=3001; //Definir el puerto a utilizar

//Creamos el servidor
const server=http.createServer((request,response)=>{
    response.writeHead(200, {'Content-Type': 'text/plain'});
    //200 Código del estado HTTP que se devuelve
    //'Content-Type', 'text/plain');Encabezados de la respuesta, texto plano
    response.end('Hola Mundo');//Mensaje que se muestra

});//fin del server

//Ejecutamos el servicio para que permanezca a la espera
server.listen(port)
