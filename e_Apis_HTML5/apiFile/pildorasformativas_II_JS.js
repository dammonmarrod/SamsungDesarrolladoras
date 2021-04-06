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

	//borramos posible información que hubiera de antes
	mostrarDatos.innerHTML="";


	//para acceder al archivo
	var archivoSeleccionado=files[0];
	console.log("el tipo de archivo es: " + archivoSeleccionado.type);
	if(!archivoSeleccionado.type.match(/imagen/)){//comprueba si el archivo es diferente de una imagen
		alert("Debes seleccionar una imagen, archivo erroneo.");
	}
	else{
		mostrarDatos.innerHTML+="Nombre del archivo: " + archivoSeleccionado.name + "<br>";
		//mostrarDatos.innerHTML+="Tamaño del archivo: " + archivoSeleccionado.size  +  " bytes" + "<br>";
		mostrarDatos.innerHTML+="Tamaño del archivo: " + Math.round(archivoSeleccionado.size/1024)  +  " kb" + "<br>";

		mostrarDatos.innerHTML+="Typo del archivo: " + archivoSeleccionado.type + "<br>";

		//Necesitamos ahora un lector
		var lector=new FileReader();
		//lector.readAsText(archivoSeleccionado,"iso-8859-1");//SOLO PARA LEER ARCHIVOS DE TEXTO
		lector.readAsDataURL(archivoSeleccionado);//obtenemos una url que podremos incrustar en un codigo html que salga la imagen
		//ponemos al lector a la escucha
		lector.addEventListener("load",mostrar);//cuando carge el lector, se mostrará en la web

	}
}

function mostrar(e) {
	var resultado=e.target.result; //el resultado del lector
	console.log(resultado);//tiene formato de url
	mostrarDatos.innerHTML+="<br>" + "<img src='" +  resultado + "'>";

}


/*
Propiedades de file
name: nombre del archivo
	Utilidad: que solo se seleccionen archivos con un determinado nombre
size: tamaño del archivo
	Utilidad: decirle al usuario que hacer si ha seleccionado un archivo demasiado grande
type: tipo de archivo
	//type.match() compara dos cadenas de caracteres para ver si se encuentran en una cadena
	//Math.round() redondea un número

*/

/*
FileReader: devuelve un objeto 
metodos:
readAsText: devuelve cada bit como información de texto. Devuelve en codificafión utf-8
readAsBinaryString: devvuelve cada bit como una sucesión de números entre 0 y 255. Devuelve la información en bruto. Util para mover archivos de un lugar a otro
readAsDataUrl: devuelve el archivo como una cadena url en base 64. Util para codificar información en base 64.
readAsArrayBuffer: devuelve los datos como un buffer en un array en formato binario.
Lector para leer la información
*/
