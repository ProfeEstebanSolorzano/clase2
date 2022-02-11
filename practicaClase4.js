//ejercicio 1
/*
1. Cambiar el texto del <p> por "Lista de mis grupos de música favoritos" --- DONE!
2. Vamos a cambiar el texto de todos los li por los nombres de mis grupos favoritos --- DONE!
3. Vamos a crear un nuevo elemento li dentro del ul, para poner nuestro 4to grupo favorito
*/

const boton = document.querySelector('#boton_principal');

boton.onclick = () => {
    const parrafo = document.querySelector('p');
    parrafo.textContent = "Lista de mis grupos de música favoritos";

    const list = document.querySelectorAll('li');

    // const grupos = ["Dream Theather", "Opeth", "Dj Blyatman"];

    // list.forEach((li, indice) => {
    //     li.textContent = grupos[indice];
    // });

    list[0].textContent = "Dream Theather";
    list[1].textContent = "Opeth";
    list[2].textContent = "Dj Blyatman";

    //crear un elemento de html nuevo
    /*
    paso 1 es crear el elemento, createElemenent
    paso 2 es crear contenido para el elemento
    paso 3 pegar ese elemento al DOM append
        _ Primero tengo el elemento padre en la mano
        _Pego el elemento nuevo
    */

    const nuevoLi = document.createElement('li');
    nuevoLi.textContent = "LuisMi";
    nuevoLi.classList.add('lista');
    document.querySelector('ul').appendChild(nuevoLi);
};


/*
Ejercicio 2
1. Vamos a crear un boton nuevo
    -Texto del boton = "Peliculas"
    -crear una funcion onclick
2. Crear un div con id division3 
3. La funcion onclick va a hacer lo siguiente:
    -Crear un h2 que diga "Mis peliculas favoritas"
    -Crear un ol
    -Crear 3 lis
    -cada li va a contener el nombre de una pelicula favorita
    -El primer li va a ser de texto color rojo
    -El ultimo li va ser de texto colo amarillo
4. El ul lo vamos a pegar en el div division 3    
*/

//Primero crear div division 3

const divNuevo = document.createElement('div');
divNuevo.id = 'division3';
document.querySelector('body').appendChild(divNuevo);

//creo el boton
const botonNuevo = document.createElement('button');
botonNuevo.textContent = "Peliculas"

document.querySelector('#division3').appendChild(botonNuevo);
//crear el onclick
botonNuevo.onclick = () => {
    //crear h2
    const titulo = document.createElement('h2');
    titulo.textContent = "Mis peliculas favoritas";

    //crear ol
    const listaOrdenada = document.createElement('ol');

    //crear liUno
    const liUno = document.createElement('li');
    liUno.textContent = 'Fight Club';
    liUno.setAttribute('style', 'color: red;');

    //crear liDos
    const liDos = document.createElement('li');
    liDos.textContent = 'Matrix';

    //crear liTres
    const liTres = document.createElement('li');
    liTres.textContent = 'Back to the Future';
    liTres.setAttribute('style', 'color: yellow;');

    listaOrdenada.appendChild(liUno);
    listaOrdenada.appendChild(liDos);
    listaOrdenada.appendChild(liTres);

    divNuevo.appendChild(titulo);
    divNuevo.appendChild(listaOrdenada);
}