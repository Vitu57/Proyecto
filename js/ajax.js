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
        //ajax2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	//ajax2.send("userid="+userid);
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
                            tabla += '<td><a href="" title="Modificar contacto" style="display:inline;"><img src="imagenes_pag/edit.png" width="16" height="16"></a><a href="" title="Borrar contacto" style="display:inline;"><img src="imagenes_pag/borrar.png" width="20" height="20"></a></td>';
                            tabla += '</tr>';
                            var buscar = document.getElementById('buscar').style.display = "block";
                        }
                        tabla+='</thead></table>';
			divResultado.innerHTML=tabla;
		}
	}
}


