// codigo para manejar el modo dia y noche

var modo = leerModoActual(); // definir con var nombre=funcion

if(modo=="dia"){
    ponerModoDia();
}else{
    ponerModoNoche();
}
function leerModoActual() {
    //grabar algo window.localStorage.setItem("modoGuardado","noche");
   // window.localStorage.removeItem("modoGuardado"); ya np sirve, es para borrar lo que haya guardado
   //LEER MODO GUARDADO: Devolvera modo dia si no hay modo guardado
    let modo = window.localStorage.getItem("modoGuardado");
    if (!modo) { //saber si algo esta guardado directamente preguntar por la variable
        // alert("hay modo guardado: "+modo)
        return "dia";
    }
    return modo;
}

function ponerModoDia(){
    // poner el modo dia poniento letra oscura sobre fonfo blanco
    let todo=document.getElementById("todo");
    todo.style.color="black";
    todo.style.backgroundColor="white";
    window.localStorage.setItem("modoGuardado","dia");
    //ocultar dia
    let iconoDia= document.getElementById("dia");
    iconoDia.style.display="none";
    //mostrar luna
    let iconoNoche= document.getElementById("noche");
    iconoNoche.style.display="block";


}
function ponerModoNoche(){
    // poner el modo noche poniento letra blanca sobre fonfo negro
    let todo=document.getElementById("todo");
    todo.style.color="white";
    todo.style.backgroundColor="black";
    window.localStorage.setItem("modoGuardado","noche");
    //mostar dia
    let iconoDia= document.getElementById("dia");
    iconoDia.style.display="block";
    //ocultar luna
    let iconoNoche= document.getElementById("noche");
    iconoNoche.style.display="none";


}