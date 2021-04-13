/* El siguiente ejemplo define un servicio web 
que atiende a peticiones que lleguen por un puerto concreto.*/

/* En el ejemplo se definen las características básicas para responder a una solicitud con un mensaje de “Hola Mundo”.*/

/*En este caso, se está utilizando el interfaz HTTP, que permite crear un canal de
comunicación HTTP estándar. Este ayuda a la interpretación de las peticiones que
se realizan al API y la elaboración de respuestas estándar que sean reconocibles por los clientes.
*/ 

/* A continuación, se define el puerto donde escuchará el servidor, es decir, en el que se van a recibir las peticiones de los clientes para procesarlas y responderlas:*/

/* En la parte central está la definición del servidor. 
Es un ejemplo sencillo que lo único que hace es contestar a todas las peticiones por igual, independientemente de los parámetros o características que se soliciten.*/

/* Por último, se ejecuta el servicio para que permanezca a la espera de peticiones en el puerto que se ha definido.*/

/*Si se guarda el contenido de este ejemplo en un fichero con el nombre index.js”, se puede ejecutar el servidor con el siguiente comando en la consola:
node index.js */

/* En la consola veríamos el siguiente mensaje de depuración:
Servidor ejecutándose...
Abrir en un navegador http://localhost:3000
*/

/* Si se abre en un navegador la dirección http://localhost:3000, se verá la respuesta del servicio que se ha creado:*/



// Requerir el interfaz http
const http = require('http');
// Definir el puerto a utilizar
const port = 3000;

// Crear el servidor y definir la respuesta que se le da a las peticiones
const server = http.createServer((req, res) => {
    res.statusCode = 200;// Código de estado HTTP que se devuelve
    res.setHeader('Content-Type', 'text/plain'); // Encabezados de la respuesta, texto plano
    res.end('Hola Mundo') // Contenido de la respuesta
    }
);

// Ejecutar el servicio para que permanezca a la espera de peticiones
server.listen(port, () => {
    console.log('Servidor ejecutándose...');
    console.log('Abrir en un navegador http://localhost:3000');
    }
);
