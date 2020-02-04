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

  

if($foto!=''){
    move_uploaded_file($foto, "img/$foto");
    $destino="$foto";
  }else{
    $destino="default.png"; 
  }
  
  $sql= mysqli_query($conn, "UPDATE `tbl_contacto` SET `nombre_contacto`='$nombre',`apellidos_contacto`='$apellidos',`telefono_contacto`='$telef',`email_contacto`='$mail',`imagen_contacto`='$destino',`direccion1_contacto`='$dir1',`direccion2_contacto`='$dir2' WHERE id_contacto=$userid");
  //Añadir y borrar telefonos del contacto
   $delete=mysqli_query($conn,"DELETE FROM `tbl_telefono` WHERE fk_id_contacto=$userid");
  for($i=0; $i<($contador-1); $i++){
    echo "entra";
    $telefono="telefono".$i;
    $tipo_telefono="tipo_tlf".$i;
 
  $update=mysqli_query($conn,"INSERT INTO `tbl_telefono`(`num_telefono`, `tipo_telefono`, `fk_id_contacto`) VALUES (".$_REQUEST[$telefono].",'".$_REQUEST[$tipo_telefono]."',$userid)");
}
 