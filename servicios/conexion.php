<?php
	$conn = @new mysqli('localhost', 'root','','elite'); //Desarrollo
	//$conn = @new mysqli('localhost', 'amarilla_admin','Developer2016','amarilla_data'); //Produccion
	$acentos = $conn->query("SET NAMES 'utf8'");
?>