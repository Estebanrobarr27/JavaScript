/*let boton = document.getElementById('boton1');
let div1 = document.getElementById('div1');
let enlace = document.getElementById('enlace1');


function bloqueoEnlace(event){
    event.preventDefault();
    swal('Enlace deshabilitado');

}



/* 

//Funcion anonima
/*
boton.addEventListener('click', function(){
    swal('Presionnaste el boton');
});




// 

Eventos


Funcion  con nombre


function muestramensaje(){
    swal ('Aprieta el boton');
}

boton.addEventListener('click', muestramensaje);


function mensaje2(){
    swal('Soy otro gato');
}

boton.addEventListener('mouseover', mensaje2);
boton.addEventListener('click', muestramensaje);





function mostrarMensaje(event){
    alert(event.target);
    alert(event.currentTarget);
}


div1.addEventListener('click', mostrarMensaje);

enlace1.addEventListener('click', bloqueoEnlace);





// Eventos Teclado



let texto1 = document.getElementById('mitexto');



function verificaNumero(event){
    if (event.keyCode < 48 || event.keyCode >57 ) {
        event.preventDefault();
        

        
    };

};



texto1.addEventListener('keydown', verificaNumero);

texto1.addEventListener('keyup', function(event){
    console.log('Entrada del usuario: ' + event.target.value)

});

texto1.addEventListener('keypress', function( event){
console.log('Caracter ingresado'+ event.key);


});




// Eventos Mouse

let menu = document.getElementById('mimenu');
let boton = document.getElementById('miboton');


/* boton.addEventListener('click', function(){
    menu.style.display = 'block'; 



    // Mostrar y desaparecer cuando se pone el mouse por encima de un boton 



    boton.addEventListener('mouseover', function(){
        menu.style.display = 'block';
    
});


boton.addEventListener('mouseout', function(){
    menu.style.display = 'none';

});


document.addEventListener('mousemove', function(event){
    console.log('Poscicion X: '+ event.clientX + 
    ' - Poscicion Y: '+ event.clientY);
    

});



// Eventos en tiempo real.


let socket = new WebSocket('ws://localhost:8080');
let mensajeingresado = document.getElementById('MensajeIngresado');
let botonEnviar = document.getElementById('botonenviar');

function MostrarMensajes(contenido){
    let contenedorMensajes = document.getElementById('mensajesChat');
    let elementoMensaje = document.createElement('p');
    elementoMensaje.innerText = contenido;
    contenedorMensajes.appendChild(elementoMensaje);

}

botonEnviar.onclick = function(){
    let mensaje = mensajeingresado.value;
    MostrarMensajes(mensaje);
    socket.send(mensaje);
    
};

socket.onmessage = function(event){
    let mensaje = event.data;
    MostrarMensajes(mensaje);

}



// Volver a mirar el video







// Eventos personalizados


let audio = document.getElementById('audio');
let listacanciones = document.getElementById('listaCanciones');



listacanciones.addEventListener('change', cambiarCancion);

function  cambiarCancion(){
    let cancionElejida = listacanciones.value; 
    audio.src = cancionElejida;
    audio.play();
    let evento = new CustomEvent('Cambiodecancion');
    audio.dispatchEvent(evento);
}


audio.addEventListener('Cambiodecancion', mostrarCancion);

function mostrarCancion(){
console.log('Cancion Actual'+ listacanciones.value);

}



*/




