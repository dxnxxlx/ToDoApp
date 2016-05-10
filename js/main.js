function getInputValue(){
	var inputBox = document.getElementById("inputBox");
	return inputBox.value; 
}
function tarea(){
	var inputBoxValue = getInputValue();
	if(inputBoxValue !== ""){
		createTarea(inputBoxValue);
		clean();
	}
}
function createTarea(textoTarea) {
	var tareas = document.getElementById("tareas");
	//crear elemento
	var elemento = document.createElement("div");
	elemento.className="singleTarea";
	elemento.innerHTML = textoTarea;
	tareas.appendChild(elemento);
	//AGREGAR ELEMENTOS O TWEETS
	tareas.appendChild(elemento);
	//agrgar tachito
	var trash = document
}
function clean() {
	var inputBox = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}