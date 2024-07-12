/*

// Metodo Put  (Actualizar )


fetch ('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        tittle: 'Nuevo titulo',
        body: 'Nueva descripcion',
    })

})


.then(respuesta => respuesta.json())
.then( data => console.log(data))
.catch(error => console.error('Error: ',error));




// Metodo DELETE (Eliminar)


fetch ('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'DELETE',


})


.then(respuesta => respuesta.json())
.then( data => console.log(data))
.catch(error => console.error('Error: ',error));





// Metodo PATCH (Modificar una parte del registro) ---------------



fetch ('https://jsonplaceholder.typicode.com/posts/5', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        tittle: 'Esteban', // Modificar el titulo por el nombre mio
       
    })

})


.then(respuesta => respuesta.json())
.then( data => console.log(data))
.catch(error => console.error('Error: ',error));+





// Autentificacion con usuario y contraseña  Basic


let usuario = 'Esteban';
let password = '123456';


fetch ('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    credentials:'include',  //Debe mostrar las cr5edenciales
    headers:{
        'Authorization':'Basic'+btoa(usuario+ ':'+ password),  // Debo crear ds variables para autentificar
        'Content-Type': 'application/json'
    }
})


.then(respuesta => respuesta.json())
.then( data => console.log(data))
.catch(error => console.error('Error: ',error));.





// Autentificacion con  Bearer no se necesita usuario ni contraseña



let token = 'MiToken'


fetch ('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    credentials:'include',  //Debe mostrar las cr5edenciales
    //cache: 'Default',
    //cache: 'no-cache',
    //cache: 'no-store', No va a almacenar una copia en el cache
    //cache: 'reload',
    //cache: 'force-cache', para generar una nueva copia
    cache: 'only-if-cached',
    //redirect:'follow', // El navegador sigue automaticamente 
    //redirect:'error', //No va aseguir la redireccion
    //redirect:'manual', //Devuelve el codigo de la redireccion
    
    
    headers:{
        'Authorization':'Bearer'+ token,  // Funciona con tokens
        'Content-Type': 'application/json'
    }
})


//Si se hace con redireccion manual  hay que modificar la romesa

/*

.then(response => {
    if(response.type =='opaqueredirect'){
        let nuevaUbicacion = response.headers.get('location');
        console.log('Redirigiendo a:' , nuevaUbicacion);
    }else{ 
        return response.json();

    }
   
})

*/
   
/*
.then(respuesta => respuesta.json())
.then( data => console.log(data))
.catch(error => console.error('Error: ',error));

*/

