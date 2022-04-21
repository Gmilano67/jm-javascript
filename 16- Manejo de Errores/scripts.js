/* **********     Curso JavaScript: 16. Manejo de Errores - #jonmircha     ********** */

try {
    console.log("En el try se agrega el codigo a evaluar")
    //SI HAY ALGUN ERROR LO CAPTURA EL CATCH 
    noExiste; //esto es una varible que se creo sin declarar para dar el ejemplo del error
    console.log("segundo mensaje en el try")
} catch (error) {
    console.log("Catch, captura cualquier error surgido o lanzado en el try")
    console.log(error)
}finally{
    console.log("El bloque finally se ejecutara siempre al final de un bloque try-catch")
}

try {
    let numero = 10;

    //isNaN es una funcion que le pasamos un numero y si no es un numero me regresa true y sino regresa false
    if (isNaN) { 
        throw new Err("El carcater intriducido no es un numero") //ESTA ES UNA MANERA DE MANEJAR EL ERROR
    }
    console.log(numero * numero)
} catch (error) {
    console.log(`Se produjo el siguiente error: ${error}`)
}
//TENGO QUE ESTAR PENDIETE DE LAS COMILLAS DOBLES "" ESTAS SON PARA MOSTRAR EL MENSAJE TAL CUAL COMO LO ESCRIBIMOS
//LAS QUE SE USAN JUNTO A LOS TEMPLATE STRING ES PARA MOSTRAR EL MENSAJE, PERO CUANDO CONCATENAMOS ${ERROR} POR EJEMPLO, HAY QUE COLOCAR LAS INVERTIDAS `` ASI SE MUESTRA EL MENSAJE PERO TAMBIA LO QUE HAY DENTRO DE LO QUE CONCARENAMOS
