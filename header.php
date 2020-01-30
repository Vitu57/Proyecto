<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
    <?php 
    //Mantengo la sesion. Por ende puedo utilizar la variable $_SESSION anteriormente configurada
    session_start();
    if (isset($_SESSION['email_user'])) {
        $user_name = $_SESSION['email_user'];
        include 'services/conexion.php';
        //Foto de perfil
        /*$sql = mysqli_query($conn, "SELECT U.img_perf FROM users U WHERE user='$user_name'");
        while ($res = mysqli_fetch_array($sql)) {
            echo '<div style="text-align: right; position: absolute; top:2%; left:93%;"><a href="foto_perf.php" title="Cambiar foto de perfil">' . '<img class="avatar2" src="' . $res["img_perf"] . '">' . '</a></div>';
        }*/
        //echo '<div style="text-align: right; position: absolute; top:2%; left:73%;">';
        echo "<ul>";
        echo "<nav>";
        echo "<li><a href='logout.php'>Cerrar sesion de " . $_SESSION['nombre_user'] . "</a>&nbsp;&nbsp;</li></li></ul>";
        //} else {
            //echo '<div style="text-align: right; position: absolute; top:2%; left:84%;">';
        //}
        echo "</ul>";
        echo "</nav>";
    } else {
        header("Location: index.php");
    }
    ?>
	</div> 
</body>
</html>