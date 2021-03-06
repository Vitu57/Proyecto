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
    $id_user=$_GET["id"];
    ?>
    <body onload="RellenarModificar(<?php echo $id_user; ?>)">
        <div style="position: relative; margin: auto; width: 50%;">
            <a href="home.php" style="float: right;"><button>Volver</button></a>
            <form id='modificar' method='post' accept-charset='UTF-8' onsubmit = "ValidacionModificar(<?php echo $id_user; ?>); return false;">
                <label>Nombre:</label><br>
                <input type="text" name="nombre" id="nombre"><br>
                <label>Apellidos:</label><br>
                <input type="text" name="apellidos" id="apellidos"><br>
                <label>Teléfono:</label><br>
                <input type="text" name="telefono" id="telefono"><br>
                <label>Email:</label><br>
                <input type="email" name="email" id="email"><br>
                <label>Foto de perfil(opcional)</label><br>
                <input type="file" name="foto" id="foto"><br>
                <label>Dirección 1</label><br>
                <input type="text" name="dir1" id="dir1"><br>
                <label>Direccion 2</label><br>
                <input type="text" name="dir2" id="dir2"><br><br>
                <button>Actualizar Datos</button>
            </form>
        </div>
    </body>
</html>