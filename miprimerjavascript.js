//primer paso crear el elemento y asignarlo a una variable
const p = document.createElement("p");
//paso 2: crear contenido del elemento
p.textContent = "Este es el nuevo parrafo";
//paso 3: append / pegar el elemento creado al dom
//un elemento padre, el elemento a instar, el elemento ancla
document.querySelector('#division2').insertBefore(p,document.querySelector('form') );


//como crear un elemento li en una lista
const elemLista = document.createElement('li');

elemLista.textContent = "Nuevo texto!!";

document.querySelector('ul').appendChild(elemLista);


//como agregar funcionalidad al boton
const boton = document.querySelector('input[type="button"]');

boton.onclick = (e)=>{
    const color = prompt('escriba un color en ingles');
    //document.querySelector('h1').setAttribute('style', 'background-color:'+color+';');
    document.querySelector('h1').setAttribute('style', `background-color: ${color};`);
}


// const listaLi = document.querySelectorAll('input[type="text"]');
// for(let x = 0; x < listaLi.length; x++){
//     listaLi[x].value = prompt();
// }













