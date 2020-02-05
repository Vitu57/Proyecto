<?php
//Conectar con base de datos
require_once 'services/conexion.php';
//Declarar variables y encriptar contraseña
$email_usuario = $_REQUEST["username"];
$pass = $_REQUEST["password"];
$hash = md5($pass);

if (isset($_REQUEST["username"])) {
    $q = mysqli_query($conn, "SELECT * FROM tbl_usuario WHERE email_user = '$email_usuario' AND password_user = '$hash'");
    while ($res = mysqli_fetch_array($q)) {
            $userid=$res["id_user"];
            $nombre=$res["nombre_user"];
    }
    $row_cnt = mysqli_num_rows($q);
}

//Comprobar que el usuario está registrado
    if ($row_cnt == 1) {
            session_start();
            $_SESSION['iduser']=$userid;
            $_SESSION['nombre']=$nombre;
            header("Location: home.php");
        }else{
            
            header('Refresh:0; url = index.php?us='.$email_usuario); 
        }
