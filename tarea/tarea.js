//div titulo
//meter h1
//texto del h1 "Mis peliculas favoritas"
//dentro del div crear un boton
//crear el evento onclick

//1 crear elemento, 2 modificar, 3 append

const contenedorTitulo = document.createElement('div');
contenedorTitulo.id = 'titulo';
//contenedorTitulo.setAttribute('id', 'titulo');

//crear h1
const textoTitulo = document.createElement('h1');
textoTitulo.textContent = 'Mis peliculas favoritas';
contenedorTitulo.appendChild(textoTitulo);

//crear boton
const botonRojo = document.createElement('button');
botonRojo.textContent = 'Rojo';
botonRojo.onclick = () => {
    document.querySelector('h1').classList.add('rojo');
}

contenedorTitulo.appendChild(botonRojo);

document.querySelector('body').appendChild(contenedorTitulo);


//crear un div clase lista
// crear un ol
// crear 3 li con texto de mis pelis favoritas
//crear boton azul para cambiar texto de posicion 2

const contenedorLista = document.createElement('div');
contenedorTitulo.classList.add('lista');

const listaOrdenada = document.createElement('ol');

const peli1 = document.createElement('li');
peli1.textContent = 'Matrix'

const peli2 = document.createElement('li');
peli2.textContent = 'American History X'

const peli3 = document.createElement('li');
peli3.textContent = 'Fight Club'

listaOrdenada.appendChild(peli1);
listaOrdenada.appendChild(peli2);
listaOrdenada.appendChild(peli3);

contenedorLista.appendChild(listaOrdenada);

const botonAzul = document.createElement('button');
botonAzul.textContent = 'Azul';
botonAzul.onclick = () => {
    //document.querySelectorAll('li')[2].classList.add('azul');
    document.querySelector('ol').children[2].classList.add('azul');
}

contenedorLista.appendChild(botonAzul);

document.querySelector('body').appendChild(contenedorLista);