//CARGA DE UN ARCHIVO
if (window.File && window.FileReader && window.FileList) {
	console.log('Todas las APIs soportadas');
} else {
	alert('La API de FILE no es soportada en este navegador.');
}



function handleFileSelect(e) {
	var files = e.target.files;
	var output = [];
	for (var i = 0,f; f = files[i]; i++) {
		output.push('<li><strong>', escape(f.name), '</strong>(', f.type || 'n/a', ') - ', f.size, ' bytes, last modified: ', f.lastModifiedDate.toLocaleDateString(), '</li>');
	}
	list.innerHTML = '<ul>' + output.join('') + '</ul>';
}



//LECTURA DE ARCHIVOS
function handleFileSelect(evt) {
	var files = evt.target.files; // FileList object
	// Loop through the FileList and render image files as 	thumbnails.
	for (var i = 0, f; f = files[i]; i++) {
		// Only process image files.
		if (!f.type.match('image.*')) {
		continue;
	}
	
	var reader = new FileReader();
	reader.onload = (function (theFile) {
		return function (e) {
			var span = document.createElement('span');
			span.innerHTML = ['<img class="thumb" src="',e.target.result,'" title="', escape(theFile.name),'"/>'].join('');
		document.getElementById('list').insertBefore(span, null);
		};
	})(f);
	
	reader.readAsDataURL(f);
	}
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);
