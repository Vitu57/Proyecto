<?php
include "conexion.php";
  $userid=$_REQUEST["userid"];
  $nombre=$_REQUEST["nombre"];
  $apellidos=$_REQUEST["apellidos"];
  $telef=$_REQUEST["telefono"];
  $foto=$_REQUEST["foto"];
  $mail=$_REQUEST["mail"];
  $dir1=$_REQUEST["dir1"];
  $dir2=$_REQUEST["dir2"];
  $contador=$_REQUEST['contador'];
  $contacto=$_REQUEST['contacto'];
  $latitud1=$_REQUEST['latitud1'];
  $longitud1=$_REQUEST['longitud1'];

if($foto!=''){
    move_uploaded_file($foto, "img/$foto");
    $destino="$foto";
    $sql= mysqli_query($conn, "UPDATE `tbl_contacto` SET `nombre_contacto`='$nombre',`apellidos_contacto`='$apellidos',`telefono_contacto`='$telef',`email_contacto`='$mail',`imagen_contacto`='$destino',`direccion1_contacto`='$dir1',`direccion2_contacto`='$dir2',`latitud1`='$latitud1',`longitud1`='$longitud1' WHERE id_contacto=$userid");
  }else{
    $sql= mysqli_query($conn, "UPDATE `tbl_contacto` SET `nombre_contacto`='$nombre',`apellidos_contacto`='$apellidos',`telefono_contacto`='$telef',`email_contacto`='$mail',`direccion1_contacto`='$dir1',`direccion2_contacto`='$dir2',`latitud1`='$latitud1',`longitud1`='$longitud1' WHERE id_contacto=$userid"); 
  }
  
  
  //Añadir y borrar telefonos del contacto
 