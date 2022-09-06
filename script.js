function encriptar (){
    
    var texto = document.querySelector("#inputTexto").value;
	if(controlLetras(texto) && texto != ""){
		var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
		document.querySelector("#textInputSalida").value = textoCifrado;
		document.querySelector("#inputTexto").value;
		muestraTexto();
		}else{
			if(texto == ""){
				alert("Escriba algo en el campo 'Ingrese el texto aqui'");
			}else{
				alert("Solo letras minúsculas y sin acentos");
			}
		}
}
function controlLetras(texto){
var vector = separador(texto);
	for(var i=0;i<vector.length;i++){
		if((vector[i].charCodeAt()<123 && vector[i].charCodeAt()>96)){
			return true;
		}else{
			return false;
			break;
		}
	}
	
}
            
function separador(texto) {
	var vector = texto.split('');
	return vector;
}
function muestraTexto(){
	document.querySelector("#textInputSalida").style.display = "block";
    document.querySelector("#textInputSalida").style.visibility = "visible";
    document.querySelector("#muneco").style.display = "none";
    document.querySelector("#pUno").style.display = "none";
    document.querySelector("#pDos").style.display = "none";
    document.querySelector("#btnCopy").style.display = "block";
    document.querySelector("#btnCopy").style.visibility = "visible";
}
    
function ocultaTexto(){
	document.querySelector("#textInputSalida").style.display = "none";
    document.querySelector("#muneco").style.display = "block";
	document.querySelector("#muneco").style.visibility = "visible";
    document.querySelector("#pUno").style.display = "block";
	document.querySelector("#pUno").style.visibility = "visible";
    document.querySelector("#pDos").style.display = "block";
	document.querySelector("#pDos").style.visibility = "visible";
    document.querySelector("#btnCopy").style.display = "none";
}
var boton1 = document.querySelector("#btnEncriptar"); 
boton1.onclick = encriptar;

function desencriptar (){ 
  var texto = document.querySelector("#inputTexto").value; 
  if(controlLetras(texto) && texto != ""){
	  var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
	  document.querySelector("#textInputSalida").value = textoCifrado; 
	  document.querySelector("#inputTexto").value;
	  muestraTexto();
  }else{
		if(texto == ""){
			alert("Escriba algo en el campo 'Ingrese el texto aqui'");
		}else{
			alert("Solo letras minúsculas y sin acentos");
		}
	}
}

var boton2 = document.querySelector("#btnDesencriptar"); boton2.onclick = desencriptar;

function limpiarTexto(){
	
	document.querySelector("#inputTexto").value = "";
	
}
function copiar(){
  var aux = document.createElement("input");
  aux.setAttribute("value", document.querySelector("#textInputSalida").value);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  limpiarTexto();
  document.querySelector("#inputTexto").focus();
  ocultaTexto();


} 

var boton3 = document.querySelector("#btnCopy"); boton3.onclick = copiar;