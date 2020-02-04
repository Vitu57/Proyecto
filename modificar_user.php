<!DOCTYPE html>
<html>
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
    <body class="modificar-users-body" onload="RellenarModificarUser(<?php echo $userid;?>)">
        <div style="position: relative; margin: auto; width: 50%;">
            <a href="home.php" style="float: right;"><button class="btn-rosa" style="width: 100%;">Volver</button></a><br><br><br>
            <form id='modificar' method='post' accept-charset='UTF-8' onsubmit = "ValidacionModificarUser(<?php echo $userid; ?>); return false;">
                <p id="alerta" style="display: none;"></p>
                <!-- <label>Email:</label><br> -->
                <input type="email" name="mail-user" id="mail-user" placeholder="Introduce tu E-Mail..."><br>
                <!-- <label>Nombre:</label><br> -->
                <input type="text" name="nombre" id="nombre" placeholder="Nombre..."><br>
                <!-- <label>Contraseña Anterior:</label><br> -->
                <input type="password" name="pass_ant" id="pass_ant" placeholder="Contraseña anterior..."><br>
                <!-- <label>Contraseña:</label><br> -->
                <input type="password" name="pass" id="pass" placeholder="Introduce nueva contraseña..."><br>
                <!-- <label>Verificar Contraseña:</label><br> -->
                <input style="margin-bottom: 50px" type="password" name="pass-verify" id="pass-verify" placeholder="Vuelve a introducir la contraseña..."><br><br>
                <button class="btn-rosa" style="margin-right: 1%;">Actualizar Datos</button>
                <a onclick="EliminarCuenta(<?php echo $userid;?>); return false" style="width: 48%; margin-left: 1%"><button class="btn-rojo" style="width: 100%;">Eliminar Cuenta</button></a>
            </form>
        </div>
    </body>
</html>
	