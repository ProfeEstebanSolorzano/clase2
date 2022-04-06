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
    const liNuevo = document.createElement('li');
    liNuevo.textContent = 'Elemento 4 de lista';
    document.querySelector('ul').appendChild(liNuevo);

    // const oculto = document.querySelector('ul').children[1];
    // oculto.style.display = 'none';

    // const oculto = document.querySelector('ul').children[1];
    // oculto.remove();

    const deleteElement = document.querySelectorAll('li')[1];
    document.querySelector('ul').removeChild(deleteElement);

}

document.querySelector('#division3').appendChild(ejercicio2);

//Ejercicio3
//1.Obtener el valor del input nombre='apellido'
//2.Si el valor es vacío, enviar una alerta
//3.De lo contrario, agregar al texto del h2 el contenido del input

const ejercicio3 = document.createElement('button');
ejercicio3.textContent = 'Ejercicio 3';
ejercicio3.onclick = () => {
    //sacar el valor
    const valor = document.querySelector('input[name="apellido"]').value;
    if (valor === '') {
        alert('Campo vacío');
    } else {
        document.querySelector('h2').textContent += ` ${valor}`;
    }
}

document.querySelector('#division3').appendChild(ejercicio3);


//Ejercicio4
//1.Crear una estructura switch que cambie el texto de los li segun corresponda
//A. si Todos los inputs estan llenos, se cambian todos los textos de los li
//B. Si solo dos inputs están llenos, se cambian 2 li y se borra el tercero
//C. Si ningún input está lleno, se envía una alerta

const ejercicio4 = document.createElement('button');
ejercicio4.textContent = 'Ejercicio 4';
ejercicio4.onclick = () => {
    //sacar el valor
    const valor1 = document.querySelector('input[name="nombre"]').value;
    const valor2 = document.querySelector('input[name="apellido"]').value;
    const valor3 = document.querySelector('input[name="provincia"]').value;
    switch (true) {
        case (valor1 !== '' && valor2 !== '' && valor3 !== ''):
            document.querySelector('ul').children[0].textContent = valor1;
            document.querySelector('ul').children[1].textContent = valor2;
            document.querySelector('ul').children[2].textContent = valor3;
            break;
            // case (valor1 !== '' && valor2 !== ''):
            //     //llenar los li y borro1
            //     break;
            // case (valor1 !== '' && valor3 !== ''):
            //     //llenar los li y borro 1
            //     break;
            // case (valor2 !== '' && valor3 !== ''):
            //     //llenar los li y borro 1
            //     break;
        default:
            alert('Por favor llene los campos');
            break;
    }
}

document.querySelector('#division3').appendChild(ejercicio4);


// switch (true) {
//     case (valor1 !== '' && valor2 !== '' && valor3 !== ''):
//         //llenar los li
//         break;
//     case (valor1 !== '' && valor2 !== ''):
//         //llenar los li y borro1
//         break;
//     case (valor1 !== '' && valor3 !== ''):
//         //llenar los li y borro 1
//         break;
//     case (valor2 !== '' && valor3 !== ''):
//         //llenar los li y borro 1
//         break;
//     default:
//         //tirar alerta
//         break;
// }