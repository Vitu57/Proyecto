<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
    <?php 
    //Mantengo la sesion. Por ende puedo utilizar la variable $_SESSION anteriormente configurada
    session_start();
    if (isset($_SESSION['iduser'])) {
        $userid=$_SESSION['iduser'];
        $nombre=$_SESSION['nombre'];
        include 'services/conexion.php';
        include 'menu.php';
        //Foto de perfil
        /*$sql = mysqli_query($conn, "SELECT U.img_perf FROM users U WHERE user='$user_name'");
        while ($res = mysqli_fetch_array($sql)) {
            echo '<div style="text-align: right; position: absolute; top:2%; left:93%;"><a href="foto_perf.php" title="Cambiar foto de perfil">' . '<img class="avatar2" src="' . $res["img_perf"] . '">' . '</a></div>';
        }*/
        //echo '<div style="text-align: right; position: absolute; top:2%; left:73%;">';
    } else {
        header("Location: index.php");
    }
    ?>
	</div> 
</body>
</html>