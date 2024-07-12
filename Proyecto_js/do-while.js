/*let valor;
let suma =0;


do {
    valor = parseInt(prompt('Ingrese 1 para terminar'));
    document.write('Ingreso valor ', valor);
    document.write('<br>');
    suma = valor+suma;

} while (valor !=1);

document.write(suma); */


let usuario, clave, control;


control =0;
usuario = prompt('Ingrese su usuario');
clave = prompt('Ingrese su contraseña');


do {
    if(clave != 'Esteban'){
        clave = prompt('Contraseña Incorrecta\n'+
        'Intente de nuevo');
        control =0;
    } else {
        control = 1;
    }
} while (control !=1);

document.write('Bienvenido al Bullying');