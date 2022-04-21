/* **********     Curso JavaScript: 6. Template Strings - #jonmircha     ********** */
        
        let nombre = "Jon";
        let apellido = "MirCha";
 
        // Concatenación
        let saludo = "Hola mi nombre es " + nombre + " " + apellido + ".";
        console.log(saludo); 

        // Interpolción de variables
        //Template String
        let saludo2 = `Hola mi nombre es ${nombre} ${apellido}.`;
        console.log(saludo2); 

        // CON TEMPLATE STRINGS NOR PERMITE HACER UNA LISTA CON ESPACIOS
        let ul2 = `
            <ul>
                <li>Primavera</li>
                <li>Verano</li>
                <li>Otoño</li>
                <li>Invierno</li>
            </ul>
        `;
        console.log(ul2); 
        