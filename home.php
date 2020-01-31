<!DOCTYPE html>
<html style="background-color: #fcfaf2">
    <head>
        <title>MyContacts</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <script type="text/javascript" src="js/codigo.js">
    </script>
    <script type="text/javascript" src="js/ajax.js">
    </script>
    <header><h1><center>Mis Contactos</center></h1></header><br>
    <?php 
    include 'header.php'
    ?>
    <body>
        <div style="position: relative; margin: auto; width: 50%;">
            <button onclick="CrearTabla(<?php echo $userid;?>); return false;">Mostrar tus contactos</button><br><br>
            <div id="resultado"></div>
        </div>
    </body>
</html>