<?php
  include "conexion.php";
  
  $userid=$_REQUEST["userid"];
  
 
  $sql = mysqli_query($conn, "SELECT * FROM tbl_contacto WHERE id_contacto=$userid");

  $contactos=array();
  while($row = mysqli_fetch_assoc($sql)){
    $contactos[]=$row;
  }
  
  while($row = mysqli_fetch_assoc($sql)){
    $telefonos[]=$row;
  }
  print json_encode($contactos);
?>