<?php
include "conexion.php";
  $userid=$_REQUEST["userid"];
  $mail=$_REQUEST["mail"];
  $nombre=$_REQUEST["nombre"];
  $pass=$_REQUEST["pass"];
  $pass_ant=$_REQUEST["pass_ant"];
  
  if($pass!=''){
    $hash=md5($pass);
    $hash_ant=md5($pass_ant);
    $sql_verify=mysqli_query($conn, "SELECT password_user FROM tbl_usuario WHERE id_user=$userid");
    if($res = mysqli_fetch_array($sql_verify)){
        $result=$res["password_user"];
    }
    if($result==$hash_ant){
        $sql= mysqli_query($conn, "UPDATE `tbl_usuario` SET `nombre_user`='$nombre', `password_user`='$hash', `email_user`='$mail' WHERE id_user=$userid");
        print json_encode("1");
    }else{
        print json_encode("0");
    }
  }else{
    $sql= mysqli_query($conn, "UPDATE `tbl_usuario` SET `nombre_user`='$nombre', `email_user`='$mail' WHERE id_user=$userid");
    print json_encode("1");
  }
	