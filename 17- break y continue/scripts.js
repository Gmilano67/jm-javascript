/* **********     Curso JavaScript: 17. break & continue - #jonmircha     ********** */

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for (let i = 0; i < numero.length; i++) {
    if (i === 5) { //CUANDO I VALSA 5 QUE ENTONCES SE SALGA DEL FOR
        break;
    }
    //IMPRIME DEL 1 AL 5 PORQUE FUE LO QUE LE INDICAMOS YA QUE EL BREAK HACE QUE SE SALTE LAS OTRAS LINEAS AL CUMPLIRSE LA FUNCION
    console.log(numero[i])
}

//CON CONTINUE SE IMPRIME TODO PERO SE SALTA EL VALOR QUE VENIA A CONTINUACION DEL 5, QUE SERIA EL 6
for (let i = 0; i < numero.length; i++) {
    if (i === 5) {
        continue;
    }
    console.log(numero[i])
}

