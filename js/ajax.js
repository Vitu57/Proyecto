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
                            tabla += '<td>' + respuesta2[i].telefono_contacto+ '<a style="padding-left:5px;" title="Teléfonos adicionales" href="#myModal" onclick="RellenarTlf('+respuesta2[i].id_contacto+');"><i class="fas fa-plus-circle" style="color:blue;" ></i></a></td>';
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
                        //'C:\fakepath\\' + respuesta2[i].imagen_contacto;
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
                        document.getElementById('pass_ant').value="";
                        document.getElementById('pass').value="";
                        document.getElementById('pass-verify').value="";
                        
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
        document.getElementById('mail-user').style.border = '1px solid #ccc';
        document.getElementById('pass').style.border = '1px solid #ccc';
        document.getElementById('pass-verify').style.border = '0.1px solid #ccc';
        document.getElementById('alerta').style.display = 'block';
        document.getElementById('alerta').innerHTML = 'Introduce los datos solicitados';
    }else if(email == ''){
        document.getElementById('nombre').style.border = '1px solid #ccc';
        document.getElementById('mail-user').style.border = '2px solid red';
        document.getElementById('pass').style.border = '1px solid #ccc';
        document.getElementById('pass-verify').style.border = '0.1px solid #ccc';
        document.getElementById('alerta').style.display = 'block';
        document.getElementById('alerta').innerHTML = 'Introduce los datos solicitados';
    }else if(pass != pass_verify){
        document.getElementById('nombre').style.border = '1px solid #ccc';
        document.getElementById('mail-user').style.border = '1px solid #ccc';
        document.getElementById('pass').style.border = '2px solid red';
        document.getElementById('pass-verify').style.border = '2px solid red';
        document.getElementById('alerta').style.display = 'block';
        document.getElementById('alerta').innerHTML = 'Las contraseñas no coinciden';
    }else{
        ActualizarUser(userid);
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
        ajax2.send("userid="+userid+"&nombre="+nombre+"&mail="+mail+"&pass="+pass+"&pass_ant="+pass_ant);
	ajax2.onreadystatechange=function() {
		if (ajax2.readyState==4 && ajax2.status==200) {
                    var respuesta=JSON.parse(this.responseText);
                    if(respuesta==1){
                        alert("Actualizacion con exito");
                        RellenarModificarUser(userid);
                    }else{
                        alert("La contraseña anterior no coincide");
                        RellenarModificarUser(userid);
                    }
                    //document.getElementById('alerta').innerHTML = 'Actualización con éxito';  
                }
            }
    
}

//Mapa:

//Activa o Desactiva el div del mapa
function ActivarMapa(userid){
    var mostrar = document.getElementById('bot_mostrar').value;
    if (mostrar==0){
        document.getElementById('bot_mostrar').innerHTML = "Ocultar Mapa";
        var buscar = document.getElementById('map').style.display = "block";
        document.getElementById('bot_mostrar').value=1;
        CargarMapa(userid);
    }else{
       document.getElementById('bot_mostrar').innerHTML = "Mostrar Mapa";
       var buscar = document.getElementById('map').style.display = "none";
        document.getElementById('bot_mostrar').value=0; 
    }
}

function CargarMapa(userid) {
    // inicializamos el mapa en el div "mapid" en las coordenadas dadas y a zoom 13
     var map = L.map('map').setView([41.353, 2.107058], 13);
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                 attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                 }).addTo(map);
    var ajax2=objetoAjax();
    ajax2.open("POST", "services/consultamapa.php", true);
    
        ajax2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax2.send("userid="+userid);


ajax2.onreadystatechange=function() {
 if (ajax2.readyState==4 && ajax2.status==200) {
     var res=JSON.parse(ajax2.responseText);
           
           
                
                

            for(var i=0;i<res.length;i++) {

                 L.marker([res[i].latitud1,res[i].longitud1], {
                                    title: res[i].direccion1_contacto,
                                    draggable:false,
                                    opacity: 1
                }).bindPopup("<p style='text-align:center;'><b>"+res[i].nombre_contacto+"</b></p>"+res[i].direccion1_contacto)
                .addTo(map);
                 L.marker([res[i].latitud2,res[i].longitud2], {
                                    title: res[i].direccion2_contacto,
                                    draggable:false,
                                    opacity: 1
                }).bindPopup("<p style='text-align:center;'><b>"+res[i].nombre_contacto+"</b></p>"+res[i].direccion2_contacto)
                .addTo(map);
            }
            }
        }

    
  var searchControl = L.esri.Geocoding.geosearch().addTo(map);

  var results = L.layerGroup().addTo(map);

  searchControl.on('results', function (data) {
    results.clearLayers();
    
    //  results.addLayer(L.marker([41.353, 2.107058]));
    
  });
}
//Eliminar una cuenta de usuario
function EliminarCuenta(userid){
    var confirmacion = confirm("Estas seguro de eliminar tu cuenta? Todos tus contactos se perderán");
    if (confirmacion == true){
        var ajax2=objetoAjax();
	ajax2.open("POST", "services/eliminar_user.php", true);
        ajax2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax2.send("userid="+userid);
	ajax2.onreadystatechange=function() {
            if (ajax2.readyState==4 && ajax2.status==200) {
                alert("Eliminación de cuenta con éxito")
                location.href='logout.php';
            }
        }
    }
}

//Telefonos
function RellenarTlf(userid){
    divTelefonos = document.getElementById('telefonos');
    divFin = document.getElementById('fin');
    var ajax2=objetoAjax();
	ajax2.open("POST", "services/consulta_telefonos.php", true);
        ajax2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax2.send("userid="+userid);
        var formulario = '<h2 style="text-align:center;">Teléfonos</h2>';
        formulario += '<form method="post" accept-charset="UTF-8"">';
        ajax2.onreadystatechange=function() {
		if (ajax2.readyState==4 && ajax2.status==200) {
                    var respuesta2=JSON.parse(this.responseText);
                    for (var i = 0; i < respuesta2.length; i++) {
                        formulario += "<br><select id='tipo_tlf'><option value='telefono'>Tlf</option><option value='movil'>Móvil</option><option value='fax'>FAX</option><option value='otros'>Otros</option></select>";
                        formulario += '<input id="tlf" type="text" value="'+respuesta2[i].num_telefono+'">';
                        //respuesta2[i].tipo_telefono
                    }
                    formulario += '<input id="contador" type="hidden" value="1">';
                    formulario += '<a style="padding-left:5px; color:blue;" onclick="AñadirTlf(); return false;"<i class="fas fa-plus-circle"></i></a></form>';
                    divTelefonos.innerHTML=formulario;
                    divFin.innerHTML='<a onclick="InsertarTlf('+userid+'); return false;"><button>Actualizar Teléfonos</button><a>';
                }
            }
}

function AñadirTlf(){
   divTelefonosNew = document.getElementById('telefonos_nuevos');
   var contador = document.getElementById('contador').value;
   var contador2=2;
   var telefonos = "";
   for (var i = 0; i < contador; i++) {
       telefonos=telefonos+"<select id='tipo_tlf"+contador2+"'><option value='telefono'>Tlf</option><option value='movil'>Móvil</option><option value='fax'>FAX</option><option value='otros'>Otros</option></select><input type='text' name='telefono"+contador2+"' id='telefono"+contador2+"'><br>";
       contador2++;
   }
   var numero=parseInt(contador);
   divTelefonosNew.innerHTML = telefonos;
   var contenido = document.getElementById('resultadoContent');
   var height = contenido.offsetHeight;
   var newHeight = height + 8;
   contenido.style.height = newHeight + 'px';
   document.getElementById('contador').value = numero+1;
}

function InsertarTlf(userid){
    var contador = document.getElementById('contador').value;
    var tipo_tlf = document.getElementById('tipo_tlf'+contador).value;
    var tlf = document.getElementById('telefono'+contador).value;
    var ajax2=objetoAjax();
	ajax2.open("POST", "services/insertar_tlf.php", true);
        ajax2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax2.send("userid="+userid+"&tipo="+tipo_tlf+"&tlf="+tlf);
	ajax2.onreadystatechange=function() {
		if (ajax2.readyState==4 && ajax2.status==200) {
                    alert("Telefonos adicionales actualizados");
                }
            }
}
 

