$(document).on("ready", inicio);
function inicio ()
{
	$("#personalizar").on("click", transicion);
	$("#cancelar").unbind("click", transicion);
}
function transicion ()
{
	//objeto javascript: JSON
	var cambios = {
		margin: 0,
		overflow: "hidden",
		padding: 0,
		width: 0
	};
	var cambios2 = {
		overflow: "visibility",
		display: "inline-block"
	};
	$("#historia").css(cambios);
	$("#personalizacion").css(cambios2);
	$("#listanav").html('<li><a href="#" id="cancelar">Cancelar</a></li>');
	$("#color div").on("click", cambiarColor);
}
function cambiarColor (datos) 
{
	var col = datos.currentTarget.id;
	$("#cochecito img").attr("src", "c"+ col +".jpg");
	$("#AutoColor").html(col);
}