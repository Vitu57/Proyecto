<!DOCTYPE html>
<html style="background-color: #fcfaf2">
    <head>
        <title>MyContacts</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="css/estilos.css">
        <link rel="icon" type="image/png" href="img/logo/Logo-MyContacts.png">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <script type="text/javascript" src="js/codigo.js">
    </script>
    <script type="text/javascript" src="js/ajax.js">
    </script>
    <header></header><br>
    <?php 
    include 'header.php';
    ?>
    <body onload="RellenarModificarUser(<?php echo $userid;?>)">
        <div style="position: relative; margin: auto; width: 50%;">
            <a href="home.php" style="float: right;"><button>Volver</button></a>
            <form id='modificar' method='post' accept-charset='UTF-8' onsubmit = "ValidacionModificarUser(<?php echo $userid; ?>); return false;">
                <p id="alerta" style="display: none;"></p>
                <label>Email:</label><br>
                <input type="email" name="mail-user" id="mail-user"><br>
                <label>Nombre:</label><br>
                <input type="text" name="nombre" id="nombre"><br>
                <label>Contraseña Anterior:</label><br>
                <input type="password" name="pass_ant" id="pass_ant"><br>
                <label>Contraseña:</label><br>
                <input type="password" name="pass" id="pass"><br>
                <label>Verificar Contraseña:</label><br>
                <input type="password" name="pass-verify" id="pass-verify"><br><br>
                <button>Actualizar Datos</button>
                <a onclick="EliminarCuenta(<?php echo $userid;?>); return false" style="float: right;"><button>Eliminar Cuenta</button></a>
            </form>
        </div>
    </body>
</html>
	