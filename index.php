<!DOCTYPE html>
<html>
    <head>
        <title>Login</title>
        <link rel="stylesheet" type="text/css" href="css/estilos.css">
        <link rel="icon" type="image/png" href="img/logo/Logo-MyContacts.png">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script type="text/javascript" src="js/codigo.js"></script>
    </head>

    <body class="login">

    <div class="contenido-login">
        <header>
                <!-- <img src="./img/logo/Logo-MyContacts.png" style="width: 15%;"> -->
                <h1 class="titulo-blanco">Inicia sesión</h1>
        </header>
        <br>
        <p id="alerta" class="alerta" style='text-align: center' ></p>

            <!-- ///// FORMULARIO /////-->

            <!-- Div contenedor formulario -->
            <div class="cont-formulario">
                <?php
                    if (isset($_GET['us'])) {
                        echo "<p style='text-align:center; color:red;'>Nombre o contraseña incorrectos</p>";
                    }
                    ?>
                    
                <form id='login' action='login.proc.php' method='post' accept-charset='UTF-8' onsubmit = "return ValidacionLogin()">
                    
                    <input type="email" placeholder="Introduce el email" name="username" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" id="username" value="<?php 
                        if (isset($_GET['us'])) {
                            $user=$_GET['us'];
                            echo "$user";
                        }
                    ?>" maxlength="50"/>
                    
                    
                    <input type='password' placeholder="Introduce contraseña" name='password' id='password' maxlength="50"/>   
                    
                    <div class="botones-login">
                        <button class="button btn-rosa" type="submit" style="margin-right: 2%">Entrar</button>
                        <button class="button btn-amarillo" type="button" style="margin-left: 2%" onclick="location.href='registro.php'">Registrarse</button>
                    </div> 
                
            </div>
    </div>
    
</body>
</html>   

