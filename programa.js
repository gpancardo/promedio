// Dado un arreglo A donde todos sus elementos son enteros
//encontrar el elemento menor y regresar su indice. Asumir
//que todos los elementos son unicos.

let A=[];

function agregarElemento(){
    let p;
    let resultado;
    let nuevoElemento = document.getElementById("entradaNuevoElemento").value;
    let htmlArrayProceso=document.getElementById("mostrarArregloProceso");
    nuevoElemento=parseInt(nuevoElemento);
    if (Number.isInteger(nuevoElemento)){
        p=nuevoElemento;
        console.log(nuevoElemento);
        A.push(p);
        resultado=0;
        let arrayTexto=A.toString();
        htmlArrayProceso.innerHTML = arrayTexto;
        console.log(resultado);
        return resultado;
    }
    else{
        p="Error, no es un numero";
        console.log("No es un numero");
        resultado=2003;
        console.log(resultado);
        return resultado;
    }
}



function encontrarPromedio(){
    let htmlPromedio=document.getElementById("mostrarPromedio");
    let promedio;
    let sumaTotal = 0;
    let l = A.length;
    for (let i = 0; i < l; i++){
        sumaTotal= sumaTotal+A[i];
    }
    promedio=sumaTotal/l;
    htmlPromedio.innerHTML=("El promedio es "+promedio);
    return 0;
}