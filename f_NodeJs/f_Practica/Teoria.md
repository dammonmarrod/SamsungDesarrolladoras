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
