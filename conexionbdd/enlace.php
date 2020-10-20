
<?php
$enlace = pg_connect("host=localhost port=5432 dbname=Tickets user=postgres password=a");

//$enlace = pg_connect("host=localhost, port=5433, user=postgres,password=12345, dbname=Prueba_chatbot1");

if(!$enlace)
echo "<p><i>No me conecte</i></p>";
else
echo "<p><i>Me conecte</i></p>";
?>