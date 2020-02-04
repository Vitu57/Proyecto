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
    <script src="https://kit.fontawesome.com/8876df5dfb.js"></script>
    <header></header><br>
    <?php 
    include 'header.php';
    $id_user=$_GET["id"];
 
    ?>
    <body onload="RellenarModificar(<?php echo $id_user; ?>)">
        <div style="position: relative; margin: auto; width: 50%;">
            <a href="home.php" style="float: right;"><button>Volver</button></a>
            <form id='modificar' method='post' accept-charset='UTF-8' action="./services/modificar_contacto.php">
                <label>Nombre:</label><br>
                <input type="text" name="nombre" id="nombre"><br>
                <label>Apellidos:</label><br>
                <input type="text" name="apellidos" id="apellidos"><br>
                <label>Teléfono:</label><br>
                <input type="text" name="telefono" id="telefono"><a onclick="AñadirTlf() "><i class="fas fa-plus-circle" style="color:blue;" ></i></a><br>
                <div id="telefonos"></div>
                <label>Email:</label><br>
                <input type="email" name="mail" id="mail"><br>
                <label>Foto de perfil(opcional)</label><br>
                <input type="file" name="foto" id="foto"><br>
                <label>Dirección 1</label><br>
                <input type="text" name="dir1" id="dir1"><br>
                <label>Direccion 2</label><br>
                <input type="text" name="dir2" id="dir2"><br><br>
                <button>Actualizar Datos</button>
                <input type="text" value="1" hidden="" id="contador" name="contador">
                <input type="text" value="<?php echo $id_user ?>" hidden="" id="userid" name="userid">
                
            </form>
        </div>
    </body>
</html>