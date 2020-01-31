<!DOCTYPE html>
<html style="background-color: #fcfaf2">
    <head>
        <title>MyContacts</title>
        <meta charset="UTF-8">
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

    <style>
        body { margin:0; padding:0; }
        #map { position: absolute; top:20px; bottom:0; right:0; left:0; min-height:300px;max-height: 400px; margin-top: 20%;}
    </style>
    </head>
    <script type="text/javascript" src="js/codigo.js">
    </script>
    <script type="text/javascript" src="js/ajax.js">
    </script>
    <script type="text/javascript" src="js/maps.js">
    </script>
     <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-gpx/1.4.0/gpx.min.js"></script>
    <header><h1><center>Mis Contactos</center></h1></header><br>
    <?php 
    include 'header.php'
    ?>
    <body>
        <div id="buscar" style="display: none">
            <form style="padding: 20px 10px; float: right;" onsubmit="CrearTabla(); return false">
			<input type="text" id="contacto" autofocus placeholder="Buscar contacto..." onkeyup="CrearTabla(<?php echo $userid;?>, this.value)">
            </form>
        </div>
        <div style="position: relative; margin: auto; width: 50%;">
            <button onclick="CrearTabla(<?php echo $userid;?>); return false;">Mostrar tus contactos</button><br><br>
            <div id="resultado"></div>
            <div id="map"></div>
        </div>
    </body>
</html>