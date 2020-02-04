<?php
include "conexion.php";
  $userid=$_REQUEST["userid"];
  

$sql_delete_contactos=mysqli_query($conn,"DELETE FROM `tbl_contacto` WHERE fk_id_user=$userid");
$sql_delete_user=mysqli_query($conn,"DELETE FROM `tbl_usuario` WHERE id_user=$userid");
	