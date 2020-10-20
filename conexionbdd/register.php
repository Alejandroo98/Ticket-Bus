<?php
require 'enlace.php';


$usuario = $_GET['usuario'];
$email = $_GET['email'];
$cedula = $_GET['cedula'];
$pass = $_GET['pass'];

echo "Variable $usuario: $usuario <br>n";

echo $usuario, $cedula, $email, $pass;

$sql = "INSERT INTO usuarios (nombre, cedula, email, contrasena) VALUES
('$usuario', '$cedula', '$email', '$pass');";



//$result = pg_query($enlace, $sql);

if ($result = pg_query($enlace, $sql)== TRUE) {
echo " record created successfully";
header('Location: ../index.html');
} else {
echo "Error: " . $sql . "<br>" . $enlace->error;
}
