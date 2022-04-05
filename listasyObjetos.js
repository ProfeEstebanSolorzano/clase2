const notas1 = [61, 87, 90, 95, 65, 40, 75, 73, 100, 75, 85, 100, 95, 71, 65, 45];
const notas2 = [60, 87, 90, 95, 65, 40, 75, 95, 71, 65, 45];



const calculaPromedio = (listaNotas) => {
    let sumaDeNotas = 0;
    for (let i = 0; i < listaNotas.length; i++) {
        sumaDeNotas += listaNotas[i];
    }
    return sumaDeNotas / listaNotas.length;
}

const calculaPromedio2 = (listaNotas) => {
    let sumaDeNotas = 0;
    listaNotas.map(nota => { sumaDeNotas += nota });
    return sumaDeNotas / listaNotas.length;
}

console.log("el promedio de notas1 es: ", calculaPromedio2(notas1));

const cuantosPasaron = (listaNotas) => {
    let aprobados = 0;
    for (let i = 0; i < listaNotas.length; i++) {
        if (listaNotas[i] >= 70) {
            aprobados++
        }
    }
    return aprobados;
}

const notas3 = [60, 87, 90, 95, 65, 40, 75, 95, 71, 65, 45, 11, 15, 20, 25, 30];
const cuantosPasaron2 = (listaNotas) => {   
    return listaNotas.filter(nota=>nota>=70).length;
}

console.log("el numero de aprobados es: ", cuantosPasaron2(notas3));

