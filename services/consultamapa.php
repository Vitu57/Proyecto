<?php
  include "conexion.php";
  
  $userid=$_REQUEST["userid"];
  
  
 
        $sql = mysqli_query($conn, "SELECT U.latitud1, U.longitud1,U.latitud2, U.longitud2, U.id_contacto, U.nombre_contacto, U.apellidos_contacto, U.telefono_contacto, U.email_contacto, U.direccion1_contacto, U.direccion2_contacto, U.imagen_contacto FROM tbl_contacto U INNER JOIN tbl_usuario C ON C.id_user=U.fk_id_user WHERE C.id_user=$userid");
  

  $contactos=array();
  while($row = mysqli_fetch_assoc($sql)){
    $contactos[]=$row;
  }
  print json_encode($contactos);
?>