<!DOCTYPE html>

    <head>
        <title>Registro</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="css/estilos.css">
        <link rel="icon" type="image/png" href="img/logo/Logo-MyContacts.png">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <script src="https://kit.fontawesome.com/8876df5dfb.js"></script>
    <script type="text/javascript" src="js/codigo.js">

    </script>
    <body class="login">
        <div class="contenido-login">
            <span title="Volver al login" style="margin-left: 100%;"><a href="index.php"><i class="fas fa-reply" style="color:white;"></i></a></span>
    <header><h1 class="titulo-blanco"><center>Registrarse</center></h1></header><br>
   <p id="alerta" class="alerta" style='text-align: center' ></p>
        <!Formulario-->
          <div class="cont-formulario">
        <form id='registro' action='./services/registrar.proc.php' method='post' accept-charset='UTF-8' onsubmit = "return ValidacionRegistro()">
                <input type="email" placeholder="Introduce el email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" id="email" maxlength="50"/>
                    
                        <input type='text' placeholder="Introduce el nombre" name='nombre' id='nombre' maxlength="50"/>
                    
                        <input type='password' placeholder="Introduce contraseña" name='password' id='password' maxlength="50"/>
                    
                        <input type='password' placeholder="Repite la contraseña" name='password_verify' id='password_verify' maxlength="50"/>
                    
                        
                        <button style="align-self: center;" class="button btn-amarillo" type="submit">Registrar</button>
                    </div>
                    
            </form>
        </div>
        </div>
            </body>


