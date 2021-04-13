window.onload=function(){

	//o make an element draggable, set the draggable attribute to true
	document.getElementById("drag1").style.draggable=true;
	//Then, specify what should happen when the element is dragged.
	document.getElementById("drag1").ondragstart=drag;




	//The ondragover event specifies where the dragged data can be dropped.
	document.getElementById("div1").ondragover=allowDrop;
	document.getElementById("div1").ondrop=drop;
	

	//The ondragover event specifies where the dragged data can be dropped.
	document.getElementById("div2").ondragover=allowDrop;
	document.getElementById("div2").ondrop=drop;
	


}
//In this case, the data type is "text" and the value is the id of the draggable element ("drag1").
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log(ev.target);
}


//By default, data/elements cannot be dropped in other elements. 
//To allow a drop, we must prevent the default handling of the element.
function allowDrop(ev) {
  ev.preventDefault();
}



//When the dragged data is dropped, a drop event occurs.
//In the example above, the ondrop attribute calls a function, drop(event):
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
