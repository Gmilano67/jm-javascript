/* **********     Curso JavaScript: 10. Funciones - #jonmircha     ********** */

        /*
        Una función es un bloque de código, autocontenido, que se puede definir una vez y ejecutar en cualquier momento. Opcionalmente, una función puede aceptar parámetros y devolver un valor.
        Las funciones en JavaScript son objetos, un tipo especial de objetos:
        Se dice que las funciones son ciudadanos de primera clase porque pueden asignarse a un valor, y pueden pasarse como argumentos y usarse como un valor de retorno.
        */

        //Declaración de función
        function estoEsUnaFuncion() {
            console.log("Uno");
            console.log("Dos");
            console.log("Tres");
            } 
    
            //PARA QUE LAS FUNCIONES SE EJECUTEN HAY QUE MANDARLA A LLAMAR
            //LAS FUNCIONES SIEMPRE TIENEN QUE IR CON SUS PARENTESIS
            
            //Invocación de función
            /* estoEsUnaFuncion();
            estoEsUnaFuncion();
            estoEsUnaFuncion();
            estoEsUnaFuncion(); */
    
            //CUANDO USAMOS UNA FUNCION QUE DEVUELVE UN VALOR SE DEBE USAR EL RETURN
            /*
            function unaFuncionQueDevuelveValor() {
            console.log("Uno");
            //SI SE COLOCA EL RETURN ANTES, LA FUNCION IGNORA TODO LO QUE HAY DEBAJO DEL RETURN
            return 19;
            console.log("Dos");
            console.log("Tres");
            return "La función ha retornado una Cadena de texto";
            } 
            //SE CREO UNA VARIABLE PARA LO QUE SE RETORNO DE LA FUNCION
            let valorDeFuncion = unaFuncionQueDevuelveValor();
    
            console.log(valorDeFuncion); 
            */
    
            // le podemos asignar un valor por defecto a los paarametros de una funcion
            function saludar(nombre = "Desconocido", edad = 0) {
            console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años.`);
            }
    
            saludar("kEnAi", 7);
            saludar(); 
            
    
            //Funciones declaradas VS funciones expresadas
    
            //funcionDeclarada();
    
            /* function funcionDeclarada() {
            console.log("Esto es un función declarada, puede invocarse en cualquier parte de nuestro código, incluso antes de que la función sea declarada");
            } */
    
            //funcionDeclarada();
    
            //funcionExpresada();
    
            //función anónima
            /* const funcionExpresada = function () {
            console.log("Esto es una función expresada, es decir, una función que se le ha asignado como valor a una variable, si invocamos esta función antes de su definición JS nos dirá 'Cannot access 'funcionExpresada' before initialization'")
            } */
    
            //funcionExpresada();