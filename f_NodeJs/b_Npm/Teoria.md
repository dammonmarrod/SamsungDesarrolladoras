Instalación npm
https://www.npmjs.com/
Durante la instalación de Node.js, se habrá instalado Npm en el sistema, con lo que estará disponible como un comando de la consola.

Comando verificar versión
npm -v


El fichero package.json se genera, automáticamente, 
si se ejecuta el siguiente comando en la consola dentro de la carpeta donde está el fichero
npm init --yes

En el caso de querer publicar el paquete en el repositorio npm, solo es necesario ejecutar el siguiente comando:
npm publish

Busqueda de paquetes por consola:
npm search express

Información adicional de los paquetes desde la consola:
npm view express

Instalación de paquetes
npm install express
También es posible especificar una versión concreta de las dependencias a instalar. 
npm install express@3.0.0


Algunos paquetes requieren instalarse de forma global al sistema y no solo en el proyecto en el que se está trabajando. 
npm install -g @angular/cli

Si previamente se quieren mostrar los paquetes susceptibles de ser actualizados, se puede utilizar el comando:
npm outdated


Actualización de paquetes. El comando para realizar la actualización es el siguiente:
npm update


Desinstalacion de paquetes
npm uninstall express
