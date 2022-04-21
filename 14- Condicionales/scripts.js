/* **********     Curso JavaScript: 14. Condicionales - #jonmircha     ********** */
        /* if - else */

        // let edad = 19;

        /* 
        if(edad > 17) {
            console.log("Eres mayor de edad")
        }else{
            console.log("Eres menor de edad")
        }

        if(edad >= 18) {
            console.log("Eres mayor de edad")
        }else{
            console.log("Eres menor de edad")
        }

        if(edad < 18) {
            console.log("Eres menor de edad")
        }else{
            console.log("Eres mayor de edad")
        }

        if(edad <= 18) {
            console.log("Eres menor de edad")
        }else{
            console.log("Eres mayor de edad")
        } 
        */

        /* if - else if - else */
        /*
        Déjame Dormir - 0hrs - 5hrs
        Buenos dias 6hrs - 11hrs
        Buenas tardes 12hrs - 18hrs
        Buenas noches 19hrs - 23hrs
        */

         let hora = 19;

        if(hora >=0 && hora <= 5) {
            console.log('Dejame Dormir')
        }else if(hora >=6 && hora <=11){
            console.log("Buenos Dias")
        }else if(hora >=12 && hora <=18){
            console.log("Buenas Tardes")
        }else{ //como ya es el ultimo lo mandamos asi, cualquier otra opcion 
            console.log("Buenas Noches")
        }

        if(hora < 6) { //en los operadores simples esta demas colocar hora <0 por eso se deja asi
            console.log('Dejame Dormir')
        }else if(hora >5 && hora <12){
            console.log("Buenos Dias")
        }else if(hora >11 && hora <19){
            console.log("Buenas Tardes")
        }else{ 
            console.log("Buenas Noches")
        }
        

        /* Operador Ternario (condición) ? verdadero : falsa */
        /*
        console.log("Operador Ternario")
        let eresMayor = (edad >=18) 
        ? "Eres Mayor de Edad" 
        : "Eres Menor de Edad";

        console.log(eresMayor)
        */

        /* switch - case */

        /*
        domingo -0
        lunes - 1
        martes - 2
        miércoles - 3
        jueves - 4
        viernes - 5
        sábado - 6
        */

        let dia= 10;

        switch (dia) {
            case 0:
                console.log("Domingo")
                break;
            case 1:
                console.log("Lunes")
                break;
            case 2:
                console.log("Martes")
                break;
            case 3:
                console.log("Miercoles")
                break;
            case 4:
                console.log("Jueves")
                break;
            case 5:
                console.log("Viernes")
                break;
            case 6:
                console.log("Sabado")
                break;
        
            default:
                console.log("El dia no existe")
                break;
        }
        