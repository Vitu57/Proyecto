<?php
include "conexion.php";
  $userid=$_REQUEST["userid"];
  $mail=$_REQUEST["mail"];
  $nombre=$_REQUEST["nombre"];
  $pass=$_REQUEST["pass"];
  if($pass!=''){
    $hash=md5($pass);
    $sql= mysqli_query($conn, "UPDATE `tbl_usuario` SET `nombre_user`='$nombre', `password_user`='$hash', `email_user`='$mail' WHERE id_user=$userid");
  }else{
    $sql= mysqli_query($conn, "UPDATE `tbl_usuario` SET `nombre_user`='$nombre', `email_user`='$mail' WHERE id_user=$userid");
  }
	