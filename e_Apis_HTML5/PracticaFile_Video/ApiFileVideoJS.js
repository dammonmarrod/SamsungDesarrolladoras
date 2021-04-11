/* 
File API muestra información acerca de los archivos y permite el acceso a su
contenido. Ofrece una forma estándar de interactuar con archivos locales.
*/
window.onload=function(){

	//Comprobamos que el navegador soporta esta api
	if (window.File && window.FileReader && window.FileList) {
		console.log('Todas las APIs soportadas.');
	} else {
		alert('La API de FILE no es soportada en este navegador.');
	}


	//Conectamos el HTML y el JS
	var objetoFile=document.getElementById("objetoFile");
	var mostrarDatos=document.getElementById("mostrarDatos");
	var mivideo1=document.getElementById("mivideo1");
	
	//Ponemos el boton examinar a la escucha con change para que cuando cambie el contenido del boton llame a la funcion obtener datos
	objetoFile.addEventListener("change",obtenerdatos);
	/*Si se selecccionan varios videos uno después de otro se superponen*/
	cont=0;//Para evitar el error de que se dupliquen los videos

	
}//fin de windowonload




/*Funcion para obtener los datos del video/archivo seleccionado*/
function obtenerdatos(e){
	console.log("dentro de obtenerdatos");
	var files = e.target.files;;//nos devuelve los archivos seleccionados después de pulsar el botón
	//se almacenarán en un array
	//como en este caso no ponemos multiple, solo podremos subir uno
	console.log(e.target.files);
	

	//Si no se puede cargar el video.
	cargandoVideo();


	//borramos posible información que hubiera de antes
	mostrarDatos.innerHTML="";


	//para acceder al archivo
	var archivoSeleccionado=files[0];
	console.log("El tipo de archivo es: " + archivoSeleccionado.type);

	if(!archivoSeleccionado.type.match(/video/)){//comprueba si el archivo es diferente de un video
		alert("Debes seleccionar un video, el archivo es erroneo.");
	}
	else{
		console.log(archivoSeleccionado.name);///acedemos a su nombre
		var fechamodificacion= new Date(archivoSeleccionado.lastModified);//accedemos a cuando se modifico
		console.log(fechamodificacion);
		console.log(archivoSeleccionado.size);//accedemos a su tamaño en bytes
		console.log(archivoSeleccionado.type);//obtengo el tipo

		mostrarDatos.innerHTML="El nombre del archivo es: " + archivoSeleccionado.name + "<br>" + "La fecha de modificacion del archivo: " + fechamodificacion + "<br>" + "El tamaño del archivo en bytes: " + archivoSeleccionado.size + "<br>" + "Tipo de archivo: " + archivoSeleccionado.type;

		//Necesitamos ahora un lector
		var lector=new FileReader();
		lector.readAsDataURL(archivoSeleccionado);//obtenemos una url que podremos incrustar en un codigo html que salga el video
		//ponemos al lector a la escucha
		lector.addEventListener("load",mostrar);//cuando carge el lector, se mostrará en la web

	}
}

/* función para mostrar el video*/
function mostrar(e) {
	console.log("dentro de mostrar");
	if(cont==0){//Cuando no se ha seleccionado NUNCA UN VIDEO
		cargarvaloresVideo(e);
		cont ++;//Incrementamos en uno el contador para borrar los datos cuando seleccionemos un nuevo video

	}else{//Si anteriormente se selecciono otro video

		//borramos posible información que hubiera de algun video anterior
		mivideo1.removeAttribute("src");
		document.getElementById("seccionVideo").removeChild(br);
		document.getElementById("seccionVideo").removeChild(button);
		document.getElementById("seccionVideo").removeChild(slider);
		document.getElementById("seccionVideo").removeChild(div);
		mivideo1.currentTime=0;

		cargarvaloresVideo(e);

	}
}

/*Función para reproducir el video*/
function reproducir(){
	console.log("dentro de reproducir");
	if(!mivideo1.paused && !mivideo1.ended){ //Si el video no esta pausado o finalizado
      mivideo1.pause(); 
      button.value='Reproducir';   
   } 
   else{ //Si el video esta pausado o finalizado
    mivideo1.play(); 
    button.value='Pausa';      
   }
}


/*Función para cambiar el volumen del video */
function cambiarVolumen(e){
	console.log("dentro de cambiarVolumen");
	//Asignamos al video el valor del volumen recuperado
	mivideo1.volume=e.currentTarget.value; 	//El valor del slider nos llega en el objeto Event.
	console.log("El volumen actual del video: " + mivideo1.volume);
}


/*Mostrar cuanto falta del video/duraccion del video */
function hora(segundos){//función que devuelve el tiempo en horas
 	var d=new Date(segundos*1000); 
 	// Ajuste de las 23 horas
 	var hora = (d.getHours()==0)?23:d.getHours()-1;
  	var hora = (hora<9)?"0"+hora:hora;
 	var minuto = (d.getMinutes()<9)?"0"+d.getMinutes():d.getMinutes();
  	var segundo = (d.getSeconds()<9)?"0"+d.getSeconds():d.getSeconds();
  	return hora+":"+minuto+":"+segundo;	 
}

function duracionVideo(){
	console.log("dentro de duracionVideo");
	document.getElementById("duracionVideo").innerHTML = hora(mivideo1.currentTime) + "/" + hora(mivideo1.duration);
	if(mivideo1.currentTime==mivideo1.duration){//Para cambiar el valor del boton reproductor cuando finaliza el video
		button.value='Reproducir';
	}
}

function cargandoVideo(){
	if(mivideo1.onloadstart){
  		alert ("Se está cargando el video, la operación puede demorarse unos minutos.");
	}
}

function cargarvaloresVideo(e){
	var resultado=e.target.result; //el resultado del lector
		console.log("La url del video:" + resultado);//tiene formato de url
		mivideo1.setAttribute("src",resultado);
		mivideo1.setAttribute("poster", "imagen1.jpg");
		mivideo1.style.width=700 + "px";
		mivideo1.style.height=500 + "px";

		//Creamos un salto de línea para que los botones se pongan debajo
		var padre=document.getElementById("seccionVideo");
		br=document.createElement("br");
		padre.appendChild(br);

		//Crearemos el boton reproducir dinámicamente en el momento de incorporar el video a la página html
		var padre=document.getElementById("seccionVideo");
		button=document.createElement("input");
		button.type="button";
		button.value="Reproducir";
		button.id="botonReproducir"
		padre.appendChild(button);

		//ponemos el boton Reproducir a la escucha con click para que cuando se puse se reproduzca el video
		button.addEventListener("click",reproducir);



		//Crearemos el boton de cambiar el volumen dinámicamente en el momento de incorporar el video a la página html
		var padre=document.getElementById("seccionVideo");
		slider=document.createElement("input");
		slider.type="range";
		//El valor del volumen debe ser un número entre 0 y 1, por ejemplo 
		//si indicamos medio.volume = 0.3 estaríamos configurando el volumen al 30%.
		slider.min="0";
		slider.max="1";
		slider.step="0.1";//Cada cuanto se incremeta o disminuye el audio
		slider.id="barraVolumen"
		slider.value="0.5"; //Valor inicial
		padre.appendChild(slider);

		//ponemos el boton volumen a la escucha con change para que cuando cambie el volumen obtener sus valores
		slider.addEventListener("change",cambiarVolumen);

		//Crearemos un div para ver el tiempo transcurrido dinámicamente
		var padre=document.getElementById("seccionVideo");
		div=document.createElement("div");
		div.id="duracionVideo";
		div.style.display="inline-block";
		padre.appendChild(div);


		//Para mostrar el tiempo de reproducción
		mivideo1.addEventListener("timeupdate",duracionVideo);
}
