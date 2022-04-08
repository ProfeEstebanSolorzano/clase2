const colors = ['black', 'silver', 'gray', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua', 'orange', 'aliceblue', 'antiquewhite', 'aquamarine', 'azure', 'beige', 'bisque', 'blanchedalmond', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon'];

const letras = ['a', 'g', 'h', 'u', 't', 'j', 'p', 'l', 'a', 'e', 'v', 'a', 'm', 'q', 'w', 'i', 'a', 'p', 'f', 's', 'l', 'v', ];
//Ejercicios para practicar
/*
1. Contar una letra, reciba por parámetro.
2. Contar cual letra se repite más
3. Ordenar alfabeticamente los elementos
4. Cuales letras del afabeto faltan
*/

const contarLetras = (letra) => {

}

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const pizarra = document.querySelector('#division3');

const numeroDeEstudiantes = getRandomInt(6, 25); //6

pizarra.textContent = numeroDeEstudiantes;

const notas = [];
for (let index = 0; index < numeroDeEstudiantes; index++) {
    notas.push(getRandomInt(45, 100));
}

pizarra.textContent += `***${notas}`;


const sumatoria = (listaNotas) => {
    let sumaTotal = 0;
    for (let index = 0; index < listaNotas.length; index++) {
        sumaTotal += listaNotas[index];
    }
    return sumaTotal;
}

const promedio = (listaNotas) => {
    return sumatoria(listaNotas) / listaNotas.length;
}

pizarra.textContent += `***El promedio es: ${Math.round(promedio(notas).toFixed(2))}`;

//Ejercicio, crear una funcion que me cuente las notas mayores o iguales a 70
const cuentaLosQuePasaron = (listaNotas) => {
    let cantidadDePasados = 0;
    for (let index = 0; index < listaNotas.length; index++) {
        if (listaNotas[index] >= 70) {
            cantidadDePasados++;
        }
    }
    return cantidadDePasados;
}

//console.log(cuentaLosQuePasaron(notas));

document.querySelector('body').style.backgroundColor = '#2f9b59';

console.log((getRandomInt(0, 256)).toString(16));
console.log((155).toString(16));
console.log((89).toString(16));

/*
R   G   B
00
01
02
03
04
05
06
07
08
09
0A
0B
0C
0D
0E
0F
10
11
12
13
14
15
16
17
18
19
1A
1B
1C
1D
1E
1F
*/