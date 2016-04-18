<?php
	$conn = @new mysqli('localhost', 'root','','elite'); //Desarrollo
	$acentos = $conn->query("SET NAMES 'utf8'");
?>