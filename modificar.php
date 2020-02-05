<!DOCTYPE html>
<html style="background-color: #fcfaf2">
    <head>
        <title>MyContacts</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="css/estilos.css">
        <link rel="icon" type="image/png" href="img/logo/Logo-MyContacts.png">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <!-- Load Leaflet from CDN -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"
    integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
    crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
    integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og=="
    crossorigin=""></script>


    <!-- Load Esri Leaflet from CDN -->
    <script src="https://unpkg.com/esri-leaflet@2.3.2/dist/esri-leaflet.js"
    integrity="sha512-6LVib9wGnqVKIClCduEwsCub7iauLXpwrd5njR2J507m3A2a4HXJDLMiSZzjcksag3UluIfuW1KzuWVI5n/cuQ=="
    crossorigin=""></script>


    <!-- Load Esri Leaflet Geocoder from CDN -->
    <link rel="stylesheet" href="https://unpkg.com/esri-leaflet-geocoder@2.3.2/dist/esri-leaflet-geocoder.css"
        integrity="sha512-IM3Hs+feyi40yZhDH6kV8vQMg4Fh20s9OzInIIAc4nx7aMYMfo+IenRUekoYsHZqGkREUgx0VvlEsgm7nCDW9g=="
        crossorigin="">
    <script src="https://unpkg.com/esri-leaflet-geocoder@2.3.2/dist/esri-leaflet-geocoder.js"
        integrity="sha512-8twnXcrOGP3WfMvjB0jS5pNigFuIWj4ALwWEgxhZ+mxvjF5/FBPVd5uAxqT8dd2kUmTVK9+yQJ4CmTmSg/sXAQ=="
        crossorigin=""></script>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/1.4.0/gpx.min.js"></script>
    </head>
    <script type="text/javascript" src="js/codigo.js">
    </script>
    <script type="text/javascript" src="js/ajax.js">
    </script>
    <script src="https://kit.fontawesome.com/8876df5dfb.js"></script>

    <header></header><br>
    <?php 
    include 'header.php';
    include 'services/conexion.php';
    $id_user=$_GET["id"];

    $sqlimg = "SELECT imagen_contacto FROM tbl_contacto WHERE id_contacto LIKE $id_user;"; 
    $consulta=mysqli_query($conn,$sqlimg);
    $row=mysqli_fetch_array($consulta);

    ?>
    <body class="modificar-contacts-body" onload="RellenarModificar(<?php echo $id_user; ?>)">
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <div style="position: relative; margin: auto; width: 50%;">
            <a href="home.php" style="float: right;"><button>Volver</button></a>
            <form id='modificar' method='post' accept-charset='UTF-8' onsubmit = "ValidacionModificar(<?php echo $id_user; ?>); return false;">
                
                <!-- <input type="" name="imagen-perfil" id="imagen-perfil"> -->

                <label for="foto" class=""><center><img style="object-fit: cover; margin-bottom: 30%" src="./img/<?php echo $row['imagen_contacto']?>"></center></label>
                <!-- <label>Nombre:</label><br> -->
                <input type="text" name="nombre" id="nombre" placeholder="Nombre"><br>
                <!-- <label>Apellidos:</label><br> -->
                <input type="text" name="apellidos" id="apellidos" placeholder="Apellidos"><br>
                <!-- <label>Teléfono:</label><br> -->
                <input type="text" name="telefono" id="telefono" placeholder="Teléfono"><br>
                <!-- <label>Email:</label><br> -->
                <input type="email" name="email" id="email" placeholder="Email">
                <!-- <label>Foto de perfil(opcional)</label><br> -->
                <input type="file" name="foto" id="foto"><br>
                <!-- <label>Dirección 1</label><br> -->
                <input type="text" name="dir1" id="dir1" placeholder="Dirección 1"><i class="fas fa-map-marked-alt" style="color:red;"></i><br>
                <!-- <label>Direccion 2</label><br> -->
                <input type="text" name="dir2" id="dir2" placeholder="Dirección 2"><i class="fas fa-map-marked-alt"></i><br><br>
                <input type="hidden" name="foto_def" id="foto_def">
                <input type="text" hidden="" name="latitud1" id="latitud1">
                <input type="text" hidden="" name="latitud2" id="latitud2">
                <input type="text" hidden="" name="longitud1" id="longitud1">
                <input type="text" hidden="" name="longitud2" id="longitud2">
                <button class="btn-rosa">Actualizar Datos</button>
                <div id="map"></div>
                 <script type="text/javascript">cargarcontactomapa()</script>
            </form>
        </div>
    </body>
</html>