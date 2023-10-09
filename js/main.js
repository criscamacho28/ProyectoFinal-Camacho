/*
    Cristian Camacho

    Para el Proyecto Final Elegi:
    Calcular la nota final de un Alumno ingresados:

    Esto es todo lo que aprendi profe, muchas gracias.
*/

Swal.fire({
    title: 'Bienvenido',
    text: 'Vamos a calcular las notas de un Alumno (Siga los Pasos y pulse Enter para continuar)',
    confirmButtonText: 'Continuar',
})

//Variables
let nota = 0, cant_notas = 0, suma_nota = 0, cant_nota_aprobado = 0, cant_nota_desaprobado = 0;
let promedio = 0;
let i = 0, y = 0, j = 0; //Para recorrer el bucle

/*Para el DOM y los Eventos*/
const boton_valor = document.getElementById("boton_valor");
const boton_calcular = document.getElementById("boton_calcular"); //Para el boton calcular
const cantidad_notas = document.getElementsByClassName("cantidad_notas"); //Leo el input
const mostrar_texto = document.getElementsByClassName("mostrar_texto");
const nombre_profesor = document.getElementsByClassName("nombre_profesor");
const apellido_profesor = document.getElementsByClassName("apellido_profesor");
const edad_profesor = document.getElementsByClassName("edad_profesor");

//Para los obj
const yo ={
    nombre: "Cristian Camacho"
}

boton_valor.onclick = mostrar_inputs;  //Cuando doy Click al boton y ejecutar una funcion
boton_calcular.onclick = calcular; //Cuando clickeo el boton calcular

function calcular(){
    let div = document.createElement("div");
    for(i = 0; i <= cantidad_notas[0].value; i += 1){
        j += 1;
        //let input = document.createElement("input"); //Para crear inputs
        div = document.createElement("div");
        div.innerHTML = `    
        <label for="cantidad_alumnos">Ingrese la Nota: ${j}</label>
        <input type="number" placeholder="Ingrese aqui..." class="notas">
        `;
        document.body.appendChild(div); 
    }   
    div.innerHTML = `
        <button id="boton_notas">Calcular</button>
    `
    const notas = document.getElementsByClassName("notas"); //Lectura de los inputs y su boton creados
    boton_seguir(); //Cuando se da click al boton Calcular
}

function mostrar_inputs_seguir(){ //Para ver el valor de los inputs y calcular cuando se da click en el boton Calcular
    const notas = document.getElementsByClassName("notas"); //Leo el boton Calcular de las Notas Ingresadas
    for(let c = 0; c <= cantidad_notas[0].value; c += 1){
        console.log("los valores de los inputs son:" + Number(notas[c].value));
        
        if(Number(notas[c].value) >= 6){ //si la nota es mayor a 6
            cant_nota_aprobado += 1;
        }else{
            cant_nota_desaprobado += 1;
        }
        suma_nota = parseInt(suma_nota + Number(notas[c].value)); //Para sumar todas la notas
        promedio = suma_nota / cantidad_notas[0].value;
    }
}

function boton_seguir(){ //Cuando se da Click en el boton Calcular
    boton_notas.onclick = mostrar_inputs_seguir;
}

function mostrar_inputs(){
    mostrar_texto[0].innerText = "El Nombre del Profesor es: " + nombre_profesor[0].value;
    mostrar_texto[0].innerText = "El Apellido del Profesor es: " + apellido_profesor[0].value;
    mostrar_texto[0].innerText = "La Edad del Profesor es: " + edad_profesor[0].value;
    mostrar_texto[0].innerHTML = `
        <p>El Nombre del Profesor es: ${nombre_profesor[0].value}</p>
        <p>El Apellido del Profesor es: ${apellido_profesor[0].value}</p>
        <p>La edad del Profesor es: ${edad_profesor[0].value}</p>
        <p>Notas Aprobadas del Alumno: ${cant_nota_aprobado}; Notas Desaprobados: ${cant_nota_desaprobado}</p>
        <p>El Promedio del Alumno es ${promedio} del Profesor ${nombre_profesor[0].value} ${apellido_profesor[0].value}</p>
        <p>Pagina realizada por ${yo.nombre}</p>
    `;

    //Para Storage
    localStorage.setItem("nombre profesor", nombre_profesor[0].value);
    localStorage.setItem("apellido profesor", apellido_profesor[0].value);
    localStorage.setItem("edad profesor", edad_profesor[0].value);
    const nombre_profesor_storage = localStorage.getItem("nombre profesor");
    const apellido_profesor_storage = localStorage.getItem("nombre profesor");
    const edad_profesor_storage = localStorage.getItem("nombre profesor");

    localStorage.setItem("profesor", profesor);
    const en_json = JSON.stringify(profesor);
    console.log(en_json);

}

//Funcion para el reinicio
function reset(){
    suma_nota = 0;
    cant_nota_aprobado = 0;
    cant_nota_desaprobado = 0;
}