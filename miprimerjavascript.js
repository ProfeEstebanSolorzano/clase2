const boton = document.querySelector('#boton_principal');

boton.setAttribute('onclick', 'alert("hola mundo")')

boton.onclick = (e)=>{
    alert('hola mundo')
}

