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


//Recibe el contenido del input y crea un elemento contenedor para el en #tareas, incluyendo ademas el tachar y eliminar
function createTarea(textoTarea) {
	//tomar #tareas
	var tareas = document.getElementById("tareas");
	//crear caja de tarea
	var caja = document.createElement("div");
	caja.className="singleTarea";
	//crear span para el texto y dar clases
	var pTexto = document.createElement("p");
	pTexto.className="texto-tarea"
	pTexto.innerHTML=textoTarea
	//crear boton tacho
	var btnTacho = document.createElement("button");
	btnTacho.className="btn-tacho";
	var iconTacho = document.createElement("i");
	iconTacho.className="fa fa-trash";
	//AL hacer click en elbtnTrash se eliminara toda la caja
	btnTacho.onclick= function(){
		tareas.removeChild(caja);
	}
	//crear input type checkbox para tachar el texto
	var check= document.createElement("input");
	check.className="check";
	check.type="checkbox";
	//hacer que cuando se marque el checkbox el texto se tache
	check.onchange= function(){
		if(check.checked==true){
			pTexto.innerHTML=textoTarea.strike();
			caja.className="singleTarea";
		}else{
			pTexto.innerHTML=textoTarea;
		}
	}
	//crear boton estrella
	var estrella=document.createElement("button");
	estrella.className="btn-estrella";
	var iconEstrella=document.createElement("i");
	iconEstrella.className="fa fa-star"
	estrella.onclick= function(){
		if(caja.className=="singleTarea"){
			caja.className="singleTarea caja-resaltada";
		}else{
			caja.className="singleTarea";
		}
	}


/*
	//crear elemento
	var elemento = document.createElement("div");
	elemento.className="singleTarea";
	elemento.innerHTML = textoTarea;
	tareas.appendChild(elemento);
	//AGREGAR ELEMENTOS O TWEETS
	tareas.appendChild(elemento);
*/
//iconTacho dentro de btnTacho
btnTacho.appendChild(iconTacho);
//check dentro de caja
caja.appendChild(check);
//iconEstrella dentro de estrella
estrella.appendChild(iconEstrella);
//spanTexto dentro de caja
caja.appendChild(pTexto);
//bntTacho dentro de caja
caja.appendChild(btnTacho);
//estrella dentro de caja
caja.appendChild(estrella);
//agregar caja a #tareas
tareas.appendChild(caja);
}
function clean() {
	var inputBox = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}


//
//
//
