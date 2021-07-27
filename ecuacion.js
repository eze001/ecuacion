var resolver=function(){
	var a=parseFloat(document.getElementById("a").value);
	var b=parseFloat(document.getElementById("b").value);
	var solucion=document.getElementById("solucion");
	
	if((a>0||a<0)&&(b>=0||b<0)){
		var x=b/a;
		
		solucion.textContent="x = "+x;
	}else{
		alert("Ingrese en la primera entrada un número real distinto a cero y en la segunda entrada un número real cualquiera");
	}
}

var boton=document.getElementById("boton");
boton.addEventListener("click",resolver);