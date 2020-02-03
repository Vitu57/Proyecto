function objetoAjax(){
	var xmlhttp=false;
	try {
		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
 
		try {
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		} catch (E) {
			xmlhttp = false;
		}
	}
 
	if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
	  xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}
//Crear la tabla donde el usuario visualizara sus contactos
function CrearTabla(userid){
    divResultado = document.getElementById('resultado');
    contacto = document.getElementById('contacto').value;
    var ajax2=objetoAjax();
	ajax2.open("POST", "services/consulta.php", true);
        if(contacto!='' || contacto!=null){
		ajax2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax2.send("userid="+userid+"&q="+contacto);
	}else{
                ajax2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax2.send("userid="+userid);
	}
	ajax2.onreadystatechange=function() {
		if (ajax2.readyState==4 && ajax2.status==200) {
			var respuesta2=JSON.parse(this.responseText);
			var tabla='<table><thead>';
                        tabla +='<tr><td style="visibility:hidden;"></td><td>Nombre</td><td>Apellidos</td><td>Teléfono</td><td>Email</td><td>Direccion 1</td><td>Dirección 2</td><td>Opciones</td></tr>';
			for(var i=0;i<respuesta2.length;i++) {
                            tabla += '<tr>';
                            tabla += '<td>' + '<img style="width: 60px; height: 60px; object-fit: cover; border-radius: 50%;" src="img/' + respuesta2[i].imagen_contacto + '">' + '</td>';
                            tabla += '<td>' + respuesta2[i].nombre_contacto+ "</td>";
                            tabla += '<td>' + respuesta2[i].apellidos_contacto+ "</td>";
                            tabla += '<td>' + respuesta2[i].telefono_contacto+ "</td>";
                            tabla += '<td>' + respuesta2[i].email_contacto+ "</td>";
                            tabla += '<td>' + respuesta2[i].direccion1_contacto+ "</td>";
                            tabla += '<td>' + respuesta2[i].direccion2_contacto+ "</td>";
                            tabla += '<td><a href="modificar.php?id='+respuesta2[i].id_contacto+'"title="Modificar contacto" style="display:inline;"><img src="imagenes_pag/edit.png" width="16" height="16"></a><a href="" onclick="eliminarContacto('+userid+','+respuesta2[i].id_contacto+'); return false;" title="Borrar contacto" style="display:inline;"><img src="imagenes_pag/borrar.png" width="20" height="20"></a></td>';
                            tabla += '</tr>';
                        }
                        tabla+='</thead></table>';
			divResultado.innerHTML=tabla;
		}
	}
}

function eliminarContacto(userid, iduser){
	// 3. Inicializamos el objeto XHR
	ajax=objetoAjax();
	// 4. Especificamos la solicitud
	ajax.open('POST', 'services/eliminar.proc.php', true);
	// 5. Configuramos el encabezado (POST)
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	// 6. Enviamos la solicitud
	ajax.send("user="+iduser);
	// 7. Definimos la funciÃ³n que se ejecutarÃ¡ cuando cambie la propiedad readyState
	ajax.onreadystatechange=function() {
	  	if (ajax.readyState==4) {
	// 8. Cambiamos el bloque del paso 2.
			CrearTabla(userid);
		}
            }
}

function ValidacionInsertar(userid){
    var nombre = document.getElementById('nombre-contacto').value;
    var telefono = document.getElementById('tlf-contacto').value;
    if(nombre == ''){
        document.getElementById('nombre-contacto').style.border = '2px solid red';
        document.getElementById('tlf-contacto').style.border = '1px solid #ccc';
        alert("Introduce un nombre para el contacto");
    }else if(telefono == ''){
        document.getElementById('nombre-contacto').style.border = '1px solid #ccc';
        document.getElementById('tlf-contacto').style.border= '2px solid red';
        alert("Introduce un telefono para el contacto");
    }else{
        InsertarContacto(userid);
    }
     
}

function InsertarContacto(userid){
    var nombre = document.getElementById('nombre-contacto').value;
    var apellidos = document.getElementById('apellidos-contacto').value;
    var telefono = document.getElementById('tlf-contacto').value;
    var mail = document.getElementById('mail-contacto').value;
    var dir1 = document.getElementById('direccion-1-contacto').value;
    var dir2 = document.getElementById('direccion-2-contacto').value;
    var foto = document.getElementById('img-contacto').value;
    var img_perf=foto.substr(12, foto.length);
    var ajax2=objetoAjax();
	ajax2.open("POST", "services/insertar.php", true);
        ajax2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax2.send("userid="+userid+"&nombre="+nombre+"&apellidos="+apellidos+"&foto="+img_perf+"&telefono="+telefono+"&mail="+mail+"&dir1="+dir1+"&dir2="+dir2);
	ajax2.onreadystatechange=function() {
		if (ajax2.readyState==4 && ajax2.status==200) {
                    CrearTabla(userid);
                    limpiar()
                }
            }
}

function limpiar(){
    var nombre = document.getElementById('nombre-contacto').value="";
    var apellidos = document.getElementById('apellidos-contacto').value="";
    var telefono = document.getElementById('tlf-contacto').value="";
    var mail = document.getElementById('mail-contacto').value="";
    var dir1 = document.getElementById('direccion-1-contacto').value="";
    var dir2 = document.getElementById('direccion-2-contacto').value="";
    var foto = document.getElementById('img-contacto').value="";
}

//Rellenar los campos de modificar
  function RellenarModificar(iduser){
    var ajax2=objetoAjax();
	ajax2.open("POST", "services/consultamod.php", true);
        ajax2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax2.send("userid="+iduser);
        ajax2.onreadystatechange=function() {
		if (ajax2.readyState==4 && ajax2.status==200) {
                    var respuesta2=JSON.parse(this.responseText);
                    for (var i = 0; i < respuesta2.length; i++) {
                        document.getElementById('nombre').value = respuesta2[i].nombre_contacto;
                        document.getElementById('apellidos').value = respuesta2[i].apellidos_contacto;
                        document.getElementById('telefono').value = respuesta2[i].telefono_contacto;
                        document.getElementById('email').value = respuesta2[i].email_contacto;
                        document.getElementById('dir1').value = respuesta2[i].direccion1_contacto;
                        document.getElementById('dir2').value = respuesta2[i].direccion2_contacto;
                    }
                }
            }
        }
        
//Actualizar datos de contacto
function ValidacionModificar(userid){
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;
    if(nombre == ''){
        document.getElementById('nombre').style.border = '2px solid red';
        document.getElementById('telefono').style.border = '1px solid #ccc';
        alert("Introduce un nombre para el contacto");
    }else if(telefono == ''){
        document.getElementById('nombre').style.border = '1px solid #ccc';
        document.getElementById('telefono').style.border= '2px solid red';
        alert("Introduce un telefono para el contacto");
    }else{
        ActualizarContacto(userid);
    }
}

function ActualizarContacto(userid){
    var nombre = document.getElementById('nombre').value
    var apellidos = document.getElementById('apellidos').value
    var telefono = document.getElementById('telefono').value
    var email = document.getElementById('email').value
    var foto = document.getElementById('foto').value
    var dir1 = document.getElementById('dir1').value
    var dir2 = document.getElementById('dir2').value
    var img_perf=foto.substr(12, foto.length);
    var ajax2=objetoAjax();
	ajax2.open("POST", "services/modificar_contacto.php", true);
        ajax2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax2.send("userid="+userid+"&nombre="+nombre+"&apellidos="+apellidos+"&telefono="+telefono+"&foto="+img_perf+"&mail="+email+"&dir1="+dir1+"&dir2="+dir2);
	ajax2.onreadystatechange=function() {
		if (ajax2.readyState==4 && ajax2.status==200) {
                    RellenarModificar(userid);
                }
            }
}

//Actualizar Usuario
function RellenarModificarUser(userid){
    var ajax2=objetoAjax();
	ajax2.open("POST", "services/consultamod_user.php", true);
        ajax2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax2.send("userid="+userid);
        ajax2.onreadystatechange=function() {
		if (ajax2.readyState==4 && ajax2.status==200) {
                    var respuesta2=JSON.parse(this.responseText);
                    for (var i = 0; i < respuesta2.length; i++) {
                        document.getElementById('mail-user').value = respuesta2[i].email_user;
                        document.getElementById('nombre').value = respuesta2[i].nombre_user;
                        
                    }
                }
            }
}

function ValidacionModificarUser(userid){
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('mail-user').value;
    var pass = document.getElementById('pass').value;
    var pass_verify = document.getElementById('pass-verify').value;
    if(nombre == '' && email == '' && pass == '' && pass_verify == ''){
        document.getElementById('nombre').style.border = '2px solid red';
        document.getElementById('mail-user').style.border = '2px solid red';
        document.getElementById('pass').style.border = '2px solid red';
        document.getElementById('pass-verify').style.border = '2px solid red';
        document.getElementById('alerta').style.display = 'block';
        document.getElementById('alerta').innerHTML = 'Introduce los datos solicitados';
    }else if(nombre == ''){
        document.getElementById('nombre').style.border = '2px solid red';
        document.getElementById('mail-user').style.border = '0.5px solid black';
        document.getElementById('pass').style.border = '0.5px solid black';
        document.getElementById('pass-verify').style.border = '0.5px solid black';
        document.getElementById('alerta').style.display = 'block';
        document.getElementById('alerta').innerHTML = 'Introduce los datos solicitados';
    }else if(email == ''){
        document.getElementById('nombre').style.border = '0.5px solid black';
        document.getElementById('mail-user').style.border = '2px solid red';
        document.getElementById('pass').style.border = '0.5px solid black';
        document.getElementById('pass-verify').style.border = '0.5px solid black';
        document.getElementById('alerta').style.display = 'block';
        document.getElementById('alerta').innerHTML = 'Introduce los datos solicitados';
    }else if(pass != pass_verify){
        document.getElementById('nombre').style.border = '0.5 solid black';
        document.getElementById('mail-user').style.border = '0.5 solid black';
        document.getElementById('pass').style.border = '2px solid red';
        document.getElementById('pass-verify').style.border = '2px solid red';
        document.getElementById('alerta').style.display = 'block';
        document.getElementById('alerta').innerHTML = 'Las contraseñas no coinciden';
    }else{
        ActualizarUser(userid);
        RellenarModificar(userid);
    }
}

function ActualizarUser(userid){
    var nombre = document.getElementById('nombre').value;
    var mail = document.getElementById('mail-user').value;
    var pass = document.getElementById('pass').value;
    var pass_ant = document.getElementById('pass_ant').value;
    var ajax2=objetoAjax();
	ajax2.open("POST", "services/modificar_user.php", true);
        ajax2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax2.send("userid="+userid+"&nombre="+nombre+"&mail="+mail+"&pass="+pass);
	ajax2.onreadystatechange=function() {
		if (ajax2.readyState==4 && ajax2.status==200) {
                  document.getElementById('alerta').innerHTML = 'Actualización con éxito';  
                }
            }
    
}

//Mapa
//Activa o Desactiva el div del mapa
function ActivarMapa(){
    var mostrar = document.getElementById('bot_mostrar').value;
    if (mostrar==0){
        document.getElementById('bot_mostrar').innerHTML = "Ocultar Mapa";
        var buscar = document.getElementById('map').style.display = "block";
        document.getElementById('bot_mostrar').value=1;
        CargarMapa();
    }else{
       document.getElementById('bot_mostrar').innerHTML = "Mostrar Mapa";
       var buscar = document.getElementById('map').style.display = "none";
        document.getElementById('bot_mostrar').value=0; 
    }
}
function CargarMapa() {
    // inicializamos el mapa en el div "mapid" en las coordenadas dadas y a zoom 13
 var map = L.map('map').setView([40.91, -96.63], 4);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var searchControl = L.esri.Geocoding.geosearch().addTo(map);

  var results = L.layerGroup().addTo(map);

  searchControl.on('results', function (data) {
    results.clearLayers();
    for (var i = data.results.length - 1; i >= 0; i--) {
      results.addLayer(L.marker(data.results[i].latlng));
    }
  });
  var popup = L.popup();
   function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent("Has clicado el mapa en " + e.latlng.toString())
        .openOn(map);
    }
    // aqui relacionamos el evento click con la funcion que acabamos de crear
    map.on('click', onMapClick);
}
 

