let selector = document.getElementById('miSelector');
let input = document.getElementById('miInput');
let boton = document.getElementById('miBoton');
let lista = document.getElementById('miListado');


let archivo = 'peliculas.json';

selector.addEventListener('change', cambiarArchivo);
selector.addEventListener('Cambiomodo', mensajemodo);
input.addEventListener('keydown', verificaInput);
boton.addEventListener('click', buscar);


function cambiarArchivo(){
    archivo = selector.value;
    let evento = new CustomEvent('Cambiomodo');
    selector.dispatchEvent(evento);


}


function mensajemodo(){
    swal.fire('El archivo de busqueda ahora es '+ selector.value);

}


function verificaInput(evento){
    if ((evento.keyCode < 65 || evento.keyCode > 90) &&
          evento.keyCode != 32 && evento.keyCode != 8){
            evento.preventDefault();
        
    }

}

function buscar(){
    lista.innerHTML = '';
    fetch(archivo)
    .then(respuesta => respuesta.json())
    .then(function(salida){
        for(let item of salida.data){
            if (item.nombre.startsWith(input.value.toUpperCase())) {
               let p = document.createComment('p');
               p.id =item.nombre;
               p.innerHTML = item.sinopsis;
               p.style.display = "none";


               let li = document.createElement('li');
               li.innerHTML = item.nombre;
               li.addEventListener('mouseover', function(){
                let p = document.getElementById(item.nombre);
                p.style.display = block;
                
               });
               li.addEventListener('mouseout', function(){
                let p = document.getElementById(item.nombre);
                p.style.display = 'none';

               });
               li.appendChild(p);
               lista.appendChild(li);




            }
        }

    })


    .catch(function(error){
        console.log(error);

    });
}




