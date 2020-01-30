<!DOCTYPE html>

    <head>
        <title>Login</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <script type="text/javascript" src="js/codigo.js">
    </script>
    <header><h1><center>Login</center></h1></header><br>
    <p id="alerta" class="alerta" style='text-align: center' ></p>
        <!Formulario-->
            <form id='login' action='login.proc.php' method='post' accept-charset='UTF-8' onsubmit = "return ValidacionLogin()">
                <table class="tabla">
                    <tr>
                        <th colspan="2">Login</th>
                    </tr>
                    <tr>
                        <th><label for='username' >Nombre de Usuario:</label></th>
                        <th><input type="email" placeholder="Introduce el email" name="username" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" id="username" value="<?php 
                                if (isset($_GET['us'])) {
                                    $user=$_GET['us'];
                                    echo "$user";
                                }
                        ?>" maxlength="50"/></th>
                    </tr>
                    <tr>
                        <th><label for='password' >Contraseña:</label></th>
                        <th><input type='password' placeholder="Introduce contraseña" name='password' id='password' maxlength="50"/></th>
                    </tr>
                    <tr>
                        <th colspan="2"><button class="button" type="submit">Entrar</button></th></th>
                    </tr>
                </table>
            </form>
            

