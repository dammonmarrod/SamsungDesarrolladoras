window.onload=function(){

	//Comprobamos que el navegador soporta esta api
	if (window.File && window.FileReader && window.FileList) {
	console.log('Todas las APIs soportadas');
	} else {
	alert('La API de FILE no es soportada en este navegador.');
	}

	var objetoFile=document.getElementById("objetoFile");
	mostrarDatos=document.getElementById("mostrarDatos");

	//ponemos el boton examinar a la escucha con change para que cuando cambie el contenido del boton llame a la funcion obtener datos
	objetoFile.addEventListener("change",obtenerdatos);
}//fin de windowonload

function obtenerdatos(e){
	console.log("dentro de obtenerdatos");
	var files = e.target.files;;//nos devuelve los archivos seleccionados después de pulsar el botón
	//se almacenarán en un array
	//como en este caso no ponemos multiple, solo podremos subir uno
	console.log(files);

	//para acceder al archivo
	var archivoSeleccionado=files[0];

	//Necesitamos ahora un lector
	var lector=new FileReader();
	lector.readAsText(archivoSeleccionado);//para devolvernos la información en formato texto
	//ponemos al lector a la escucha
	lector.addEventListener("load",mostrar);//cuando carge el lector, se mostrará en la web

}
function mostrar(e) {
	var resultado=e.target.result; //el resultado del lector
	console.log(resultado);
	mostrarDatos.innerHTML=resultado;
}


/*

Actuan en local sin conexión a internet

FileReader: devuelve un objeto 
metodos:
readAsText: devuelve cada bit como información de texto. Devuelve en codificafión utf-8
readAsBinaryString: devvuelve cada bit como una sucesión de números entre 0 y 255. Devuelve la información en bruto. Util para mover archivos de un lugar a otro
readAsDataUrl: devuelve el archivo como una cadena url en base 64. Util para codificar información en base 64.
readAsArrayBuffer: devuelve los datos como un buffer en un array en formato binario.

Lector para leer la información

*/
