document.getElementById('btnCalcular').onclick = function() {

	var valor1 = parseFloat(document.getElementById('valor1').value);
	var valor2 = parseFloat(document.getElementById('valor2').value);

	alert(valor1 + valor2);
}