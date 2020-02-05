<?php
  include "conexion.php";
  
  $userid=$_REQUEST["userid"];
  
 
  $sql = mysqli_query($conn, "SELECT * FROM tbl_telefono WHERE fk_id_contacto=$userid");

  $telefonos=array();
  while($row = mysqli_fetch_assoc($sql)){
    $telefonos[]=$row;
  }
  print json_encode($telefonos);
?>