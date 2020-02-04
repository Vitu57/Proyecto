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
	var paso=1;
	var m="";
	 			document.getElementById('password').style.border = '1px solid #ccc';
                document.getElementById('nombre').style.border = '1px solid #ccc';
                document.getElementById('password_verify').style.border = '1px solid #ccc';
                document.getElementById('email').style.border = '1px solid #ccc';
	if(nombre=='' && pass=='' && pass_verify=='' && email==''){
		m = 'Todos los campos son obligatorios';
                document.getElementById('nombre').style.border = '2px solid red';
                document.getElementById('password').style.border = '2px solid red';
                document.getElementById('password_verify').style.border = '2px solid red';
                document.getElementById('email').style.border = '2px solid red';
		document.getElementById('alerta').style.display = 'block';
		paso=0;
	}else {
	 if(nombre == ''){
		m=m+'El campo nombre es obligatiorio.';
                document.getElementById('nombre').style.border = '2px solid red';
		document.getElementById('alerta').style.display = 'block';
		paso=0;
	}
	 if(pass == ''){
		m=m+'El campo contraseña es obligatiorio.';
                document.getElementById('password').style.border = '2px solid red';
		document.getElementById('alerta').style.display = 'block';
		paso=0;
	}
	 if(pass_verify == ''){
		m=m+'El campo confirmar contraseña es obligatiorio.';
                document.getElementById('password_verify').style.border = '2px solid red';
		document.getElementById('alerta').style.display = 'block';
		paso=0;
	}
	 if(email == ''){
		m=m+'El campo email es obligatorio';
                document.getElementById('email').style.border = '2px solid red';
		document.getElementById('alerta').style.display = 'block';
		paso=0;
	}
	if(pass_verify != pass){
				m=m+'El campo contraseña y confirmar contraseña han de ser iguales.';
                document.getElementById('password_verify').style.border = '2px solid red';
                document.getElementById('password').style.border = '2px solid red';
		document.getElementById('alerta').style.display = 'block';
		paso=0;

	}
}
	if(paso==1){
		return true;
	}else{
		document.getElementById('alerta').innerHTML = m;
		return false;
	}
  }