function geoFindMe() {
	var output = document.getElementById("out");
	if (!navigator.geolocation) {
		output.innerHTML = "<p>La geolocalización no está soportada por el navegador</p>";
		return;
	}

	output.innerHTML = "<p>Localizando</p>";
	navigator.geolocation.getCurrentPosition(function success(position) {
		var latitude = position.coords.latitude;
		var longitude = position.coords.longitude;
		output.innerHTML = '<p>Latitud es ' + latitude + '° <br>Longitud es ' + longitude + '°</p>';
	}, 
		function error(err) {
				output.innerHTML = "No se puede recuperar la localización";
				console.log(err);
		}
	);
}//end geoFindMe
