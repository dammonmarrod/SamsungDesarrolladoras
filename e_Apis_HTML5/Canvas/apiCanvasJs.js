window.onload = function() {
	//Se dibujan dos rectángulos superpuestos. 
	var canvas = document.getElementById("ejemplo1");
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "rgb(300,0,0)";
		ctx.fillRect (10, 30, 55, 150);
		ctx.fillStyle = "green";
		ctx.fillRect (30, 60, 80, 150);
	}
	//Se dibujan cuadrados uno dentro de otro. 
	var canvas = document.getElementById("ejemplo2");
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "pink";
		ctx.fillRect(25, 25, 100, 100);
		ctx.clearRect(45, 45, 60, 60);
		ctx.strokeRect(50, 50, 50, 50);
	}
	//Líneas: lineTo
	var canvas = document.getElementById("ejemplo3");
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");
		ctx.beginPath();
		ctx.fillStyle = "red";
		ctx.moveTo(25, 25);
		ctx.lineTo(105, 25);
		ctx.lineTo(25, 105);
		ctx.closePath();
		ctx.fill();
		ctx.beginPath();
		ctx.moveTo(125, 125);
		ctx.lineTo(125, 45);
		ctx.lineTo(45, 125);
		ctx.closePath();
		ctx.stroke();
	}

	//Arcos
	var canvas = document.getElementById("ejemplo4");
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");
		ctx.beginPath();
		var x = 100; // coordenada x
		var y = 150; // coordenada y
		var radius = 20; // radio del arco
		var startAngle = 0; // punto inicial del círculo
		var endAngle = Math.PI; // punto final
		var anticlockwise = true;
		ctx.arc(x,y,radius,startAngle,endAngle, anticlockwise);
		ctx.closePath;
		ctx.stroke();
	}

	//Colores
	var canvas = document.getElementById("ejemplo4");
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");
		ctx.beginPath();
		
	}

	//Colores y formas
	var canvas = document.getElementById("ejemplo5");
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "pink";
		ctx.strokeStyle= "blue";
		ctx.beginPath();
		var x = 100; // coordenada x
		var y = 150; // coordenada y
		var radius = 50; // radio del arco
		var startAngle = 0; // punto inicial del círculo
		var endAngle = Math.PI; // punto final
		var anticlockwise = true;
		ctx.arc(x,y,radius,startAngle,endAngle, anticlockwise);
		ctx.closePath;
		ctx.fill();
		ctx.stroke();
	}

	//Degradados
	var canvas = document.getElementById("ejemplo6");
	var ctx = canvas.getContext('2d');
	var gradient = ctx.createLinearGradient(0, 0, 0,
	canvas.height);
	gradient.addColorStop(0, '#fce1fc');
	gradient.addColorStop(1, '#b619b6');
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	//Transparencias
	var canvas = document.getElementById("ejemplo7");
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		ctx.beginPath();
		var x = 100; // coordenada x
		var y = 150; // coordenada y
		var radius = 50; // radio del arco
		var startAngle = 0; // punto inicial del círculo
		var endAngle = Math.PI; // punto final
		var anticlockwise = true;
		ctx.arc(x,y,radius,startAngle,endAngle, anticlockwise);
		ctx.closePath;
		ctx.globalAlpha = 0.2;
		ctx.fill();
		ctx.stroke();
		ctx.beginPath();
		var x = 50; // coordenada x
		var y = 50; // coordenada y
		var radius = 50; // radio del arco
		var startAngle = 0; // punto inicial del círculo
		var endAngle = Math.PI; // punto final
		var anticlockwise = true;
		ctx.arc(x,y,radius,startAngle,endAngle, anticlockwise);
		ctx.closePath;
		ctx.globalAlpha = 1;
		ctx.fill();
		ctx.stroke();
	}

	//Patrones
	var canvas = document.getElementById('ejemplo8');
	var ctx = canvas.getContext('2d');
	var img = document.createElement('img');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	img.onload = function () {
	ctx.fillStyle = ctx.createPattern(this, 'repeat');
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	};
	img.src = 'https://i.pinimg.com/474x/49/aa/d7/49aad7536501adbb6edb600c339791c9.jpg';


};

