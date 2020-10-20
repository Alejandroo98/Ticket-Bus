<?php
require 'enlace.php';


$usuario = $_GET['usuario'];
$pass = $_GET['pass'];

$query = "select * from usuarios where nombre = '$usuario' and contrasena = '$pass'";
$Consulta = pg_query($enlace, $query);
$filas = pg_num_rows($Consulta);

if ($filas > 0) {
    echo ('hay datos');
    header('Location: ../html/welcome.html');
} else //No hay filas para retornar
{
    echo ('No hay datos');
    header('Location: ../index.html');
}
