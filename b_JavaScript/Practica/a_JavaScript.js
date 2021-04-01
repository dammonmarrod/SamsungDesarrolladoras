window.onload=function(){
	//Damos función a los botones
	document.getElementById("mostrarValoracion").onclick=mostrarValoracion;
	document.getElementById("mostrarCuenta").onclick=mostrarCuenta;
	document.getElementById("mostrarDiaSemana").onclick=mostrarDiaSemana;

	//Establecemos el foco en el nombre para empezar el formulario
	document.getElementById("name").focus();

	//Establezcola fecha de cumplimentación por defecto
	document.getElementById("fechaCumplimentado").value="2019-01-01"

}

	
//El botón “Mostrar Valoración” indicará en pantalla el valor que el usuario ha seleccionado en el elemento rango
function mostrarValoracion(){
	//recojo en la variable comoValoro su valor y lo muestro con un alert en pantalla
	var comoValoro=document.getElementById("rangoValor").value;
	alert("Has valorado con " + comoValoro + " puntos.");
	
}
//El botón “Mostrar Cuenta” indicará en pantalla la cuenta bancaria introducida por el usuario.
function mostrarCuenta(){
	controlIBAN=document.getElementById("controlIBAN").value;
	entidad=document.getElementById("entidad").value;
	dc=document.getElementById("dc").value;
	cuenta=document.getElementById("cuenta").value;

	if (document.getElementById("controlIBAN").validity.valid && document.getElementById("entidad").validity.valid && document.getElementById("dc").validity.valid && document.getElementById("cuenta").validity.valid) {
		alert("Le informamos que su cuenta bancaria es:" + "ES" +  controlIBAN + "-" + entidad + "-" + dc + "-" + cuenta );
	}
    else {
    	alert("Debe rellenar todos los datos para mostrar la cuenta.");
    }

	
}

//El botón “Mostrar Día Semana” indicará qué día de la semana (Lunes a Domingo) corresponde la fecha introducida.
function mostrarDiaSemana(){
	
	if (document.getElementById("fechaCumplimentado").validity.valid && document.getElementById("fechaCumplimentado").value !=("2019-01-01") ) {
		//Recogemos en una variable la fecha de cumplimentación del formulario
			diaRellenado=document.getElementById("fechaCumplimentado").value;
			// Pasamos su valor como argumento a un objeto tipo Date
			var fechaCumplimentado= new Date(diaRellenado);
			var dia=fechaCumplimentado.getDay();//devuelve el número del día de la semana (0 para Domingo, 1 para Lunes, ..., 6 para Sábado)
			//Creamos un array con los dias de la semana
			var diasSemana=new Array();
			diasSemana=['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sabado'];
			//muestra el día al que se corresponde la fecha de cumplimentación
			diaMostrar=diasSemana[dia];//buscamos en el array la posición correspondiente y la mostramos con un alert
			alert("La fecha de cumplimentacion del cuestionario fue: " + diaRellenado +" que fue un " + diaMostrar)
	}
    else {
    	alert("Debe introducir una fecha diferente a la mostrada.");
    }




	
}
