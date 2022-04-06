//Ejercicio1 
//1.cambiar el texto del h1 a "Segundo Trabajo en clase"
//2. Agregar estilo css sin usar clases ni ids

const ejercicio1 = document.createElement('button');
ejercicio1.textContent = 'Ejercicio 1';
ejercicio1.onclick = () => {
    const titulo = document.querySelector('h1');
    titulo.textContent = 'Segundo Trabajo en clase';
    titulo.style.color = '#FF00FF';
}

document.querySelector('#division3').appendChild(ejercicio1);

//Ejercicio2
//1. Borrar el elemento en posicion 1 de la lista de li
//2. Crear un elemento nuevo li en posicion 2 que diga 'Elemento 4 de lista'

const ejercicio2 = document.createElement('button');
ejercicio2.textContent = 'Ejercicio 2';
ejercicio2.onclick = () => {

}

document.querySelector('#division3').appendChild(ejercicio2);