//Validar si los campos no estan rellenos
function ValidacionLogin(){
	var user = document.getElementById('username').value;
	var pass = document.getElementById('password').value;
	if(user=='' && pass==''){
		document.getElementById('alerta').innerHTML = 'El campo usuario y contraseña son obligatorios';
                document.getElementById('username').style.border = '2px solid red';
                document.getElementById('password').style.border = '2px solid red';
		document.getElementById('alerta').style.display = 'block';
		return false;
	}else if(user == ''){
		document.getElementById('alerta').innerHTML = 'El campo usuario es obligatiorio';
                document.getElementById('username').style.border = '2px solid red';
                document.getElementById('password').style.border = '1px solid #ccc';
		document.getElementById('alerta').style.display = 'block';
		return false;
	}else if(pass == ''){
		document.getElementById('alerta').innerHTML = 'El campo contraseña es obligatiorio';
                document.getElementById('username').style.border = '1px solid #ccc';
                document.getElementById('password').style.border = '2px solid red';
		document.getElementById('alerta').style.display = 'block';
		return false;
	}else{
		return true;
	}
	
}

// Botón desplegable añadir contactos

function desplegable() {
	var element = document.getElementById("despl-add-contactos");
		element.classList.add("desp-activado");
		element.classList.remove("desp-desactivado");

	// if(document.getElementsByClassName("desp-activado")) {
	// 	element.classList.add("desp-desactivado");
	// 	element.classList.remove("desp-activado");
	// 	alert('DESACTIVANDO');	
	// }else {
	// 	element.classList.add("desp-activado");
	// 	element.classList.remove("desp-desactivado");	
	// 	alert('ACTIVANDO');
	// }
  }