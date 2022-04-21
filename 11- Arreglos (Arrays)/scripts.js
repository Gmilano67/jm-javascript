/* **********     Curso JavaScript: 11. Arreglos (Arrays) - #jonmircha     ********** */

                    
            const a = [];
            const b = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];
            console.log(a);
            console.log(b);
            console.log(b.length);
            console.log(b[2]); //imprimir Hola que esta en su posicion 2
            console.log(b[0]);
            console.log(b[3]);

            //la posicion 3 es el arreglo a,b,c y le decimos que imprima la letra c que su posicion seria la 2
            console.log(b[3][2]); 
            console.log(b[3][3][0]); //imprimir el 1 que esta dentro de arreglo a,b,c

            const c = Array.of("X", "Y", "Z", 9, 8, 7); //el of nos da el tipo al que pertenece
            console.log(c);

            // array de 100 posiciones
            //arreglo que tiene 100 posiciones y todas fueron inicializadas con el valor de false
            const d = Array(100).fill(false); 
            console.log(d);
        
            //YA NO SE USA
            const e = new Array();
            console.log(e);

            //YA NO SE USA
            const f = new Array(1, 2, 3, true, false);
            console.log(f);

            const colores = ["Rojo", "Verde", "Azul"];
            console.log(colores);
            colores.push("Negro"); //agregar un nuevo elemento al final
            console.log(colores);
            colores.pop();  //quita el ultimo elemento
            console.log(colores);
             
            colores.forEach(function (el, index) {
            console.log(`<li id="${index}">${el}</li>`); //con el index se agrego los id a cada elemento
            }); 
            