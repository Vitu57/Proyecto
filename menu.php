<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" href="https://dev-style.agentfirecdn.com/bootstrap.client.css">
	<link rel="stylesheet" href="https://dev-style.agentfirecdn.com/bootstrap.admin.css">
	<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'>
	<link rel="stylesheet" href="css/estilo_menu.css">
</head>
<body>
<!-- Empieza el menu con distintos div para agrupar cada elemento -->
<div class="simple-admin">
	<div data-component="sidebar">
    	<div class="sidebar">
      		<!-- Comienzo de la tabla para las imagenes del menu -->
      		<ul class="list-group flex-column d-inline-block first-menu">
      			<!-- Primera opcion -->
        		<li class="list-group-item py-2">
                                <!-- Redireccionamiento correspondiente al elemento -->
        			<a href="logout.php">
        				<!-- Imagen del menu y texto que se muestra cuando se desplega -->
                                        <img src="imagenes_pag/modificar_user.png" height="40" class="mr-4"><span>Modificar Perfil</span>
        			</a>
        		</li> <!-- Final de la tercera opcion -->
                        <!-- Segunda opcion -->
        		<li class="list-group-item py-2">
                                <!-- Redireccionamiento correspondiente al elemento -->
        			<a href="logout.php">
        				<!-- Imagen del menu y texto que se muestra cuando se desplega -->
            			<img src="imagenes_pag/logout.png" height="40" class="mr-4"><span>Cerrar sesión de <?php echo $_SESSION['nombre'];?></span>
        			</a>
        		</li> <!-- Final de la tercera opcion --> 
    		</ul>
    	</div>
	</div>
</div>
<!-- Scripts necesarios para el menu -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"></script>
</body>
</html>
