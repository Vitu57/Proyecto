<?php
include "conexion.php";

$usuario=$_REQUEST['user'];

$query = "DELETE FROM `tbl_contacto` WHERE id_contacto=$usuario";

$sql= mysqli_query($conn, $query);