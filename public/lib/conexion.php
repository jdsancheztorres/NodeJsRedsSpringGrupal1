<?php
	/**Parametros configuracion de base de datos MySQL**/
	define ("DIRECCION_HOST", "localhost");
	define ("USUARIO_BD", "root");
	define ("CONTRASENA_BD", "");
	define ("NOMBRE_BASE_DE_DATOS", "fusm2018");

	//funcion utilizada para la conexion a la base de datos MySQL.
	$conexion =  new mysqli(DIRECCION_HOST, USUARIO_BD, CONTRASENA_BD, NOMBRE_BASE_DE_DATOS);
	if($conexion->connect_error) {
		die('Error en la conexion a la base de datos '.$conexion->connect_error);
	}
?>