/* **********     Curso JavaScript: 5. Cadenas de Texto (Strings) - #jonmircha     ********** */
        //Cadenas de Texto aka Strings
        
        let nombre = "Jon";
        let apellido = 'MirCha';
        let saludo = new String("Hola Mundo");

        let lorem = "       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, et dolorum. Adipisci sequi, voluptates accusamus earum magnam non pariatur odit consequuntur dicta modi. Quam soluta aliquid nam ea quod dolore.      ";

        console.log(nombre, apellido, saludo);
        console.log(
          nombre.length,
          apellido.length,
          saludo.length,
          nombre.toUpperCase(), //para mayusculas
          apellido.toLowerCase(), //para minusculas
          lorem.includes("amet"), //con incluide buscamos en el texto si esa palabra existe
          lorem.includes("jon"),
          lorem,
          lorem.trim(), //con trim quitamos los espacios en blanco que tenemos en el lorem

          //convierte a cada palabra en un arreglo (" ") separamos cada palabra con espacio
          lorem.split(" "), 
          lorem.split(",") //separamos cada palabra con ,
        );
        