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
  if($foto!=''){
    move_uploaded_file($foto, "img/$foto");
    $destino="$foto";
  }else{
    $destino="default.png"; 
  }
  
  $sql= mysqli_query($conn, "INSERT INTO `tbl_contacto`(`nombre_contacto`, `apellidos_contacto`, `telefono_contacto`, `email_contacto`, `imagen_contacto`, `direccion1_contacto`, `direccion2_contacto`, `fk_id_user`) VALUES ('$nombre','$apellidos','$telef','$mail','$destino','$dir1','$dir2','$userid')");