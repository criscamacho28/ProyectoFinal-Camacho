/*
    Cristian Camacho
    
    Para el Proyecto Final elegi:
    Calcular la nota final de alumnos ingresados:

*/
alert("Vamos a calcular la nota final de los Alumnos y la nota promedio del curso: (Pulse Enter para continuar)");

//Para los obj
const profesor ={}
//profesor.nombre = prompt("Ingrese su Nombre Profesor: ");
//profesor.apellido = prompt("Ingrese su Apellido: ");
//profesor.edad = prompt("Ingrese su edad: ");
profesor.cant_alumnos = parseInt(prompt("Ingrese la CANTIDAD de Alumnos del Curso:")); //Variable para saber la cantidad de alumnos


/*Para el DOM y los Eventos*/
const boton_valor = document.getElementById("boton_valor");
boton_valor.onclick = mostrar_inputs;

const mostrar_texto = document.getElementsByClassName("mostrar_texto");
const nombre_profesor = document.getElementsByClassName("nombre_profesor");
const apellido_profesor = document.getElementsByClassName("apellido_profesor");
const edad_profesor = document.getElementsByClassName("edad_profesor");
    
function mostrar_inputs(){

    /* Para ver los Valores por consola
    console.log("el valor del imput nombre es: " + nombre_profesor[0].value);
    console.log("el valor del imput profesor es: " + apellido_profesor[0].value);
    console.log("el valor del imput edad es: " + edad_profesor[0].value);
    */
    
    mostrar_texto[0].innerText = "El Nombre del Profesor es: " + nombre_profesor[0].value;
    mostrar_texto[0].innerText = "El Apellido del Profesor es: " + apellido_profesor[0].value;
    mostrar_texto[0].innerText = "La Edad del Profesor es: " + edad_profesor[0].value;

    mostrar_texto[0].innerHTML = `
        <p>El Nombre del Profesor es: ${nombre_profesor[0].value}</p>
        <p>El Apellido del Profesor es: ${apellido_profesor[0].value}</p>
        <p>La edad del Profesor es: ${edad_profesor[0].value}</p>
        <p>Alumnos Aprobados: ${alumnos_aprobados}; Alumnos Desaprobados: ${alumnos_desaprobados}</p>
        <p>El Promedio del curso es ${promedio_total} del Profesor ${nombre_profesor[0].value} ${apellido_profesor[0].value}</p>
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


//Variables
//let cant_alumnos = parseInt(prompt("Ingrese la CANTIDAD de Alumnos del Curso:")); //Variable para saber la cantidad de alumnos
let nota = 0, cant_notas = 0, suma_nota = 0, cant_nota_aprobado = 0, cant_nota_desaprobado = 0, alumnos_aprobados = 0, alumnos_desaprobados = 0;
let promedio = 0, promedio_total = 0, promedio_suma = 0;
let i = 0, y = 0, j = 0; //Para recorrer el bucle
let array_alumnos_promedio = []; //Array para guardar el promedio de los alumnos


//Funcion para el reinicio
function reset(){
    suma_nota = 0;
    cant_nota_aprobado = 0;
    cant_nota_desaprobado = 0;
}

//console.log("El curso del Profesor " + profesor.nombre + " " + profesor.apellido + " tiene " + profesor.cant_alumnos + " Alumnos");

for(i=0; i < profesor.cant_alumnos; i+=1){

    j += 1; //Para que el valor del primer elemeto del array sea 1
    console.log("Alumno " + j + ":");

    cant_notas = prompt("Ingrese La CANTIDAD DE Notas que tuvo el Alumno " + j);
    console.log("El Alumno " + j + " tuvo " + cant_notas + " notas");

    for(y=1; y <= cant_notas; y+=1){
        nota = prompt("Ingrese la Nota Numero " + y + ":");
        nota = parseInt(nota);
        while(nota > 10 || nota == 0){
            alert("No ingreso la nota " + y + " correctamente (No debe ser mayor 10 o igual a 0)");
            nota = parseFloat(prompt("Ingrese nuevamente la nota numero " + y + " del Alumno " + i + ":"));
        }
        //Para saber la cantidad de notas aprobadas o desaprobadas
        if(nota >= 6){
            cant_nota_aprobado += 1;
        }else{
            cant_nota_desaprobado += 1;
        }
        suma_nota = parseInt(suma_nota + nota);
    }
    //Calculo el promedio de notas del alumno
    promedio = suma_nota / cant_notas;
    array_alumnos_promedio.push(promedio); //Agrego el promedio al array

    //Calculo para saber si el alumno aprobo o no
    if(promedio >= 6){
        alumnos_aprobados += 1;
    }else{
        alumnos_desaprobados += 1;
    }

    //Calculo para el promedio total del curso
    promedio_suma += promedio;

    console.log("EL Alumno " + j + " tuvo " + cant_nota_aprobado + " notas Aprobadas y " + cant_nota_desaprobado + " Desaprobadas");

    reset();

    console.log("------------------------------------");
}

j = 0;
//Recorro todo el array e indico si aprobo o no el Alumno
for(i = 0; i < array_alumnos_promedio.length; i += 1){
    j += 1;
    if(array_alumnos_promedio[i] >= 6){
        console.log("El Promedio del Alumno " + j + " es: " + array_alumnos_promedio[i] + " Aprobo");
    }else{
        console.log("El Promedio del Alumno " + j + " es: " + array_alumnos_promedio[i] + " Desaprobo");
    }
}

//Para el calculo del promedio del curso
promedio_total = promedio_suma / profesor.cant_alumnos;
console.log("Alumnos Aprobados: " + alumnos_aprobados + " ,Alumnos Desaprobados: " + alumnos_desaprobados);
//console.log("El Promedio del curso es: " + promedio_total + " del Profesor " + profesor.nombre + " " + profesor.apellido);
console.log("El Promedio del curso es: " + promedio_total);
