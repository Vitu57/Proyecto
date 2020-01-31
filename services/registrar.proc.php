<?php
	include "conexion.php";



if (isset($_REQUEST['nombre'])) {
		$nombre=$_REQUEST['nombre'];



		if (isset($_REQUEST['password'])) {
		$password=$_REQUEST['password'];
		$pass=md5($password);


		if (isset($_REQUEST['email'])) {
		$email=$_REQUEST['email'];



		
		$Insertar = mysqli_query($conn, "INSERT INTO tbl_usuario(nombre_user, password_user, email_user) VALUES ('$nombre','$pass','$email')");
}else{
	header("location:../home.php");
	exit;
}

}else{
	header("location:../home.php");
	exit;
}
}else{
	header("location:../home.php");
	exit;
}
	