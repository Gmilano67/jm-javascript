/* **********     Curso JavaScript: 7. Números (Numbers) - #jonmircha     ********** */
        
        let a = 2;
        let b = new Number(1);
        let c = 7.19;
        let d = "5.6";

        console.log(a, b);

        //toFixed me dice cuantos decimales va a tener el valor
        console.log(c.toFixed(1));
        console.log(c.toFixed(5));

        // parseInt me devuelve solo el valor entero
        console.log(parseInt(c));
        console.log(parseFloat(c)); //nos da la parte decimal del valor
         
        //el typeof nos dice de que tipo de dato es una variable
        //en este caso nos dice que el valor c es un numero y el valor d es un string o una cadena de texto
        console.log(typeof c, typeof d); 
        console.log(a + b);

        //como el valor d es un tipo cadena, hay que convertirlo, hacer un cambio de tipo de dato
        //se hace con parseInt y de esa manera se puede hacer la suma
        console.log(c + parseInt(d));
        
        //con parseFloat hace la suma entera, sin todos los decimales que tiene
        console.log(c + parseFloat(d));
        console.log(c + Number.parseInt(d));
        console.log(c + Number.parseFloat(d)); 