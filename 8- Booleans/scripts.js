/* **********     Curso JavaScript: 8. Booleans - #jonmircha     ********** */
        
        let verdadero = true;
        let falso = false;
        let v = Boolean(true);
        let f = Boolean(false);
        console.log(verdadero, falso, v, f);
        console.log(typeof verdadero, typeof falso);
        console.log(Boolean(0));
        console.log(Boolean(-7)); //un numero negativo tiende a verdadero
        console.log(Boolean("")); //una cadena de texto vacia tiende a falso
        //cualquier cadena de texto con algun caracter, aunque sea un espacio en blanco da true
        console.log(Boolean(" ")); 
        