 /* **********     Curso JavaScript: 15. Ciclos (Loops) - #jonmircha     ********** */

 let contador = 0;
 
 while (contador < 10) {
    console.log("while" +contador);
    contador ++;
}

do {
    console.log("do while" +contador)
    contador ++;
}while(contador < 10);

/* for (inicialización de variable; condición; decremento o incremento) {
      sentencias que ejecuta el for
      sentencias que ejecuta el for
      sentencias que ejecuta el for
    } */

    for(let i = 0; i < 10; i++){
        console.log("for" +i)
    }

    let numeros =[10, 20, 30, 40, 50, 60, 70, 80, 90]

    for(let i = 0; i < numeros.length; i++){
        console.log(numeros[i])
    }

    const juan = {
        nombre: "Juan",
        apellido: "Vizcaino",
        edad: 27
    }

    for (const propiedad in juan) { 
        //EL CICLO FOR IN ME PERMITE RECORRER ITERAR TODAS LAS PROPIEDADES DE UN ARREGLO
        //PARA ACCEDER AL VALOR DE UN ARREGLO SE DEBE USAR LOS []
        console.log(`key: ${propiedad} value: ${juan[propiedad]}`)
    }

    //EL CICLO FOR OF ME PERMITE RECORRER TODOS LOS ELEMENTOS DE CUALQUIER OBJETO QUE SEA ITERABLE EN JAVASCRIPT
    //TOMAMOS EL OBJETO NUMEROS
    //AQUI LE ESTAMOS DICIENDO, RECCORRE CADA ELEMENTO QUE SE ENCUENTRE DENTRO DE NUMERO
    for (const elemento of numeros) {
        console.log(elemento)
    }

    let cadena = "Hola Mundo"

    //RECORRE CADA UNO DE LOS CARACTER DE LA VARIABLE CADENA
    for (const caracter of cadena) {
        console.log(caracter)
    }

