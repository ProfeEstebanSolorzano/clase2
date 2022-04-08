const colors = ['black', 'silver', 'gray', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua', 'orange', 'aliceblue', 'antiquewhite', 'aquamarine', 'azure', 'beige', 'bisque', 'blanchedalmond', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon'];
const letras = ['a', 'g', 'h', 'u', 't', 'j', 'p', 'l', 'a', 'e', 'v', 'a', 'm', 'q', 'w', 'i', 'a', 'p', 'f', 's', 'l', 'v', ];

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
const cuentaLosQuePasaron = () => {

}