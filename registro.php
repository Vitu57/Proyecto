<!DOCTYPE html>

    <head>
        <title>Login</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <script type="text/javascript" src="js/codigo.js">
    </script>
    <header><h1><center>Registrarse</center></h1></header><br>
    <p id="alerta" class="alerta" style='text-align: center' ></p>
        <!Formulario-->
        <form id='login' action='registro.proc.php' method='post' accept-charset='UTF-8'> <!onsubmit = "return ValidacionRegistro()"-->
                <table>
                    <tr>
                        <th><input type="email" placeholder="Introduce el email" name="username" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" id="username" maxlength="50"/></th>
                    </tr>
                    <tr>
                        <th><input type='text' placeholder="Introduce el nombre" name='nombre' id='nombre' maxlength="50"/></th>
                    </tr>
                    <tr>
                        <th><input type='password' placeholder="Introduce contraseña" name='password' id='password' maxlength="50"/></th>
                    </tr>
                    <tr>
                        <th><input type='password' placeholder="Repite la contraseña" name='password_verify' id='password_verify' maxlength="50"/></th>
                    </tr>
                    <tr>
                        <th colspan="2"><button class="button" type="submit">Registrar</button></th></th>
                    </tr>
                </table>
            </form>
            

