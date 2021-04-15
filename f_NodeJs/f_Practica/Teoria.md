 
Por un lado, se necesita un servidor básico y por otro se necesita que esté conectado a la bbdd (base de datos) de Mongo

 
Instalar NodeJs que incluira npm
Montar un servidor básico 
 

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
