<?php
	include "conexion.php";



if (isset($_REQUEST['nombre'])) {
		$nombre=$_REQUEST['nombre'];
	$aceptar=1;


		if (isset($_REQUEST['password'])) {
		$password=$_REQUEST['password'];
		$pass=md5($password);


		if (isset($_REQUEST['email'])) {
		$email=$_REQUEST['email'];


		$query = mysqli_query($conn, "SELECT email_user FROM tbl_usuario");
		while($row = mysqli_fetch_array($query)){
		if ($email == $row['email_user']) {
			header("location:../registro.php");
			exit;
		}
	}
			
		if ($aceptar==1) {
			$Insertar = mysqli_query($conn, "INSERT INTO tbl_usuario(nombre_user, password_user, email_user) VALUES ('$nombre','$pass','$email')");
		}
		header("location:../index.php");
		exit;
}else{
	header("location:../index.php");
	exit;
}

}else{
	header("location:../index.php");
	exit;
}
}else{
	header("location:../index.php");
	exit;
}
	