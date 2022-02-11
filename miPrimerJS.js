//pasos para resolver ejercicios
//1.Tener elemento en la mano
//2. Modificar
//3. Probar

//console.log(prompt('Escriba su nombre'));

//const campoNombre = document.querySelector('input[name="nombre"]');

//campoNombre.value = prompt('Escriba su nombre');

const boton = document.querySelector('#boton_principal');

// boton.onclick = () => {
//     const campoNombre = document.querySelector('input[name="nombre"]');
//     campoNombre.value = prompt('Escriba su nombre');
// };


//Ejercicio, sacar el valor del input nombre que tiene un color, cambiar el fondo de HTML a ese color

boton.onclick = () => {
    //paso 1 tener el input en la mano
    const campoNombre = document.querySelector('input[name="nombre"]');
    //paso 2 obtener el color y guardarlo
    const color = campoNombre.value;
    //paso 3 probar
    console.log(color);
    //paso 4 tener el elemento HTML en la mano
    const html = document.querySelector('html');
    html.setAttribute('style', `background-color: ${color}`);
    //probar
};

// boton.onclick = () => {
//     const body = document.querySelector('#division1');
//     body.classList.add('rojo');
// };