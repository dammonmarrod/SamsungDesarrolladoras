Se propone crear un API donde se integre la creación de un servicio básico utilizando Node.js (se necesita un servidor básico) con el almacenamiento de datos en una base de datos MongoDB.
 
En concreto, se tendrá que: 

Definir un servicio para crear y listar usuarios que atienda peticiones de tipo POST siguiendo el procedimiento visto para que se acepte la petición e interpreten los parámetros que se dispongan en el cuerpo de la petición. 
El servicio debe recibir los parámetros “name” y “phone” con los datos de un usuario a insertar en la base de datos.
El servicio insertará los datos en la base de datos y, a continuación, listará todos los usuarios que existan en la colección.
Aunque recomendable, no será necesario validar los parámetros en esta práctica.
La petición se puede simular utilizando el programa Postman, visto en las notas técnicas, utilizando una petición POST y enviando el cuerpo de la petición utilizando la cabecera “x-www-form-urlencoded”. 
Se utilizará el módulo “Query String” para traducir el cuerpo de la petición a variables que se puedan utilizar (https://nodejs.org/api/querystring.html).
El servicio se ejecutará con “node main.js” y se comprobarán los resultados realizando la petición con el Postman o script equivalente.

Se tendrá que entregar el fichero (o ficheros) utilizados para construir el API así como una captura del resultado de insertar dos o más usuarios en el Postman o script equivalente.



1. Instalar NodeJs que incluira npm
Para comprobar la versión que esta instalado node -v y npm -v

2. Nos creamos el package.json de cada proyecto
En consola, nos vamos a la carpeta donde queremos trabajar escribimos npm init -y para que nos cree el proyecto de trabajo
C:\Users\Monica\Desktop\w_NodeJs\practicaNode>npm init -y
En la carpeta te crea automaticamente en un package.json
{
  "name": "practicaNode",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


3.Montar un servidor básico 
Creamos un fichero llamado main.js

const http=require('http') //Requerir el interfaz http

const port=3000; //Definir el puerto a utilizar

//Creamos el servidor
const server=http.createServer((request,response)=>{
    response.statusCode=200; //Código del estado HTTP que se devuelve
    response.setHeader('Content-Type', 'text/plain');//Encabezados de la respuesta, texto plano
    response.end('Hola Mundo');

});//fin del server

//Ejecutamos el servicio para que permanezca a la espera
server.listen(port, () =>{
    console.log("Servidor ejecuntándose....");
    console.log("Abrir en un navegador http://localhost:3000");
}
);//fin del server.listen


Para ejecutarlo se usa node main.js


4. Configuramos el package.json con Script para facilitar el trabajo
Modificamos la parte de script
{
  "name": "practicaNode",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node main.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
En consola escribimos para ver todos los script disponibles npm run
En consola escribimos para ejecutar automáticamente npm start para ejecutar el main

 
 5. Instalamos nodemon
 Para que se actualice cada vez que cambia algo
 npm install nodemon -D (para decirle que es una dependencia de desarrollo)
 modificamos el pacakge.json para introducirlo en un script
 {
  "name": "practicaNode_Express_Mongo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev":"nodemon main.js",
    "start": "node main.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^2.0.7"
  }
}

ejecutamos en el terminal
npm run dev
 
 
6. Instalamos mongodb
La  instalación  completa, con  las  opciones  por  defecto,  es  la  se  utilizará  en  este  curso. Además del cliente y el servidor de MongoDB, se instalará un interfaz gráfico para facilitar el uso y la gestión de las bases de datos.
https://www.mongodb.com/download-center/community

En la carpeta del proyecto
Existen  varios  conectores  para  poder  utilizar  bases  de  datos  MongoDB  desde  Node.js. En este caso, se utilizará el conector oficial de MongoDB para Node.js.Para  instalar  el  conector,  basta  con  situarse  con  el  terminal  en  la  carpeta  del  proyecto y ejecutar:
npm install mongodb
Esto  instalará  localmente  la  última  versión  estable  del  conector  junto  con  sus  dependencias,   dentro   de   la   carpeta   “node_modules”,   como   ya   se   ha   visto   anteriormente.
 
 
 
 
 
 6. Creamos nuesta API  
 
 

Nos registramos en PostMan
Hacemos un post 
Conseguir que conteste mediante llamada de postman a una llamada POST con un string como "hola"


En node
En el código donde se recibe la llama POST anterior, insertar el código necesario para insertar los datos recibidos


Instalamos MongoDB Atlas
Creamos una base de datos

En node
Llamamos a la bbd con find
Llamar a la bbdd con find (en la nota técnica 6.5 tenéis un ejemplo de listar) para que nos devuelva todos los registros que tenemos en bbdd


Devolver ese listado en el response del servicio para recibir la contestación en postman.




Para comprobar el correcto funcionamiento de la practica, únicamente se necesitara arrancar el servidor con el comando -> node main
 Después se realizara la llamada mediante postman y se tendra que recibir el listado de inserciones que hemos hecho en el body de postman.
 Ojo en ningún momento se pide mostrar el listado mediante console.log y que eso sea valido. Esto sera un fallo a evitar. 
 Se tiene que devolver el listado mediante response del servidor.
