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
    <header></header><br>
    <?php 
    include 'header.php'
    ?>
    <body>
        <div style="position: relative; margin: auto; width: 50%;">
            <form id='modificar' method='post' accept-charset='UTF-8' onsubmit = "return ValidacionModificar()">
                <input type="text" placeholder="Introduce el nombre" name="username">
            </form>
        </div>
    </body>
</html>