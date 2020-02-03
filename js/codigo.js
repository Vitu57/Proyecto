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
	var botondes = document.getElementById('btndespl');
	

	if(document.getElementsByClassName("desp-activado")[0]) {
		element.classList.add("desp-desactivado");
		element.classList.remove("desp-activado");
		botondes.innerHTML="+";
		botondes.style.padding="10px 17px";
	}else {
		element.classList.add("desp-activado");
		element.classList.remove("desp-desactivado");
		botondes.innerHTML="-";
		botondes.style.padding="10px 20px";
	}
  }

  function ValidacionRegistro() {
  	var email = document.getElementById('email').value;
	var pass = document.getElementById('password').value;
	var pass_verify = document.getElementById('password_verify').value;
	var nombre = document.getElementById('nombre').value;
	if(nombre=='' && pass=='' && pass_verify=='' && email==''){
		document.getElementById('alerta').innerHTML = 'Todos los campos son obligatorios';
                document.getElementById('nombre').style.border = '2px solid red';
                document.getElementById('password').style.border = '2px solid red';
                document.getElementById('password_verify').style.border = '2px solid red';
                document.getElementById('email').style.border = '2px solid red';
		document.getElementById('alerta').style.display = 'block';
		return false;
	}else if(nombre == ''){
		document.getElementById('alerta').innerHTML = 'El campo nombre es obligatiorio';
                document.getElementById('nombre').style.border = '2px solid red';
                document.getElementById('password').style.border = '1px solid #ccc';
                document.getElementById('password_verify').style.border = '1px solid #ccc';
                document.getElementById('email').style.border = '1px solid #ccc';
		document.getElementById('alerta').style.display = 'block';
		return false;
	}else if(pass == ''){
		document.getElementById('alerta').innerHTML = 'El campo contraseña es obligatiorio';
                document.getElementById('password').style.border = '2px solid red';
                document.getElementById('nombre').style.border = '1px solid #ccc';
                document.getElementById('password_verify').style.border = '1px solid #ccc';
                document.getElementById('email').style.border = '1px solid #ccc';
		document.getElementById('alerta').style.display = 'block';
		return false;
	}else if(pass_verify == ''){
		document.getElementById('alerta').innerHTML = 'El campo confirmar contraseña es obligatiorio';
                document.getElementById('password_verify').style.border = '2px solid red';
                document.getElementById('nombre').style.border = '1px solid #ccc';
                document.getElementById('password').style.border = '1px solid #ccc';
                document.getElementById('email').style.border = '1px solid #ccc';
		document.getElementById('alerta').style.display = 'block';
		return false;
	}else if(email == ''){
		document.getElementById('alerta').innerHTML = 'El campo email es obligatiorio';
                document.getElementById('email').style.border = '2px solid red';
                document.getElementById('nombre').style.border = '1px solid #ccc';
                document.getElementById('password_verify').style.border = '1px solid #ccc';
                document.getElementById('password').style.border = '1px solid #ccc';
		document.getElementById('alerta').style.display = 'block';
		return false;
	}else{
		return true;
	}
  }