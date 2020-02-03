<!DOCTYPE html>
<html style="background-color: #fcfaf2;">
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
    <script type="text/javascript" src="js/maps.js">
    </script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/1.4.0/gpx.min.js"></script>
    <!-- <header><h1 class="titulo-negro">Mis Contactos</h1></header><br> -->
    <?php 
    include 'header.php'
    ?>
    <body onload="CrearTabla(<?php echo $userid;?>); return false;">
        
        <div class="logo">
            <img src="img/logo/Logo-MyContacts.png">
        </div>
    
        <!-- Buscador -->
        <div id="buscar" >
            <form onsubmit="CrearTabla(); return false">
			<input type="text" id="contacto" autofocus placeholder="Buscar contacto..." onkeyup="CrearTabla(<?php echo $userid;?>, this.value)">
            </form>
        </div>
        <!-- Tabla contactos -->
        <div class="cont-tabla-contactos">
            <div id="resultado" style="overflow-y:auto; max-height: 450px;" class="resultado-tabla"></div><br>
            <button id="bot_mostrar" value="0" class="btn-rosa" style="width: 15%; margin-top: 1%;" onclick="ActivarMapa(); return false;">Mostrar Mapa</button><br><br>
            <div id="map" style="display: none;"></div>
        </div>

        <!-- Formulario Desplegable Añadir Contactos -->
        <div id="despl-add-contactos" class="despl-add-contactos desp-desactivado">
            <form action="#" onsubmit="ValidacionInsertar(<?php echo $userid;?>); return false;" >
                <input class="inp" type="text" id="nombre-contacto" placeholder="Nombre">
                <input class="inp" type="text" id="apellidos-contacto" placeholder="Apellidos">
                <input class="inp" type="text" id="tlf-contacto" placeholder="Teléfono">
                <input class="inp" type="file" id="img-contacto">
                <input class="inp" type="text" id="mail-contacto" placeholder="E-mail">
                <input class="inp" type="text" id="direccion-1-contacto" placeholder="Dirección 1">
                <input class="inp" type="text" id="direccion-2-contacto" placeholder="Dirección 2"><br>
                <input type="submit" class="btn-rosa" width="20%!important">
            </form>
        </div>
        
        <!-- Botón añadir contactos -->
        <button id="btndespl" class="btn-despl-rosa" onclick="desplegable(); return false">+</a>
    </body>
    
</html>