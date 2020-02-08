/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var divisor;//numero divisor
    var dividendo;// numero dividiendo
    var resto;// resultado.

    divisor = document.getElementById("numeroDivisor").value;//las comillas son de texto.
    divisor = parseInt(divisor);//le sacamos las comillas para el numero.
    
    dividendo = document.getElementById("numeroDividendo").value;
    dividendo = parseInt(dividendo);
    
    
    resto = divisor / dividendo;

    alert("el resto es " + resto);
   ;


	
}
