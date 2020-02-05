<?php
  include "conexion.php";
  
  $userid=$_REQUEST["userid"];
  $tipo=$_REQUEST["tipo"];
  $tlf=$_REQUEST["tlf"];
  
  $sql= mysqli_query($conn, "INSERT INTO `tbl_telefono`(`num_telefono`, `tipo_telefono`, `fk_id_contacto`) VALUES ('$tlf','$tipo','$userid')");