/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
  nombre = prompt("cual es tu nombre");//variable es un espacio en memoria.
  document.getElementById("elNombre").value;//ingreso de datos.

  alert(" bienvenido "+ nombre);//mostrar mensaje por pantalla.

}

