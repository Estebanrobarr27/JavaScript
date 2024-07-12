
/*
//Metodo Get

axios.get('https//jsonplaceholder.typicode.com/posts')
.then(respuesta => console.log(respuesta.data))
.catch(error => console.log(error))


// Metodo POST


let datos = {
    title: 'Nuevo Titulo',
    body: 'mI CONTENIDO'
}



axios.post('https://jsonplaceholder.typicode.com/posts', datos)
.then(respuesta => console.log('El post Fue creado con exito',respuesta.data))
.catch(error => console.log('Error al publicar',error))


*/


// Metodo ALL


let datos = {
    title: 'Nuevo Titulo',
    body: 'mI CONTENIDO'
}


let miToken = 'Este es mi Token'; 
axios.interceptors.request(
(config)=>{
    confing.headers.Authorizatiion = 'Bearer $(mitoken)';
    return config;
}, (error) =>{
    return Promise.reject(error);
}
)

axios.interceptors.response.use(
    (respuesta) =>{
        respuesta.data.customField ='Nuevo campo';
    },(error) =>{
        return Promise.reject(error);
    }
)



let pedido1 = axios.get('https://api.ejemplo.com/data1');
let pedido2 = axios.get('https://api.ejemplo.com/data2');
let pedido3 = axios.get('https://api.ejemplo.com/data3');


axios.all(pedido1,pedido2,pedido3)
.then(axios.spread((respuesta1, respuesta2,respuesta3) =>{

}))
.catch(error => {
    //Manejar errores
})