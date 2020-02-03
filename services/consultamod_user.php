<?php
  include "conexion.php";
  
  $userid=$_REQUEST["userid"];
  
 
  $sql = mysqli_query($conn, "SELECT * FROM tbl_usuario WHERE id_user=$userid");

  $user=array();
  while($row = mysqli_fetch_assoc($sql)){
    $user[]=$row;
  }
  print json_encode($user);
?>