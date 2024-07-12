let resultado

function suma(a , b){
    resultado = a + b;
    return resultado;

}

document.write(suma(40, 200));
document.write('<br>');



function saludar(){
    return 'Hola a todos';
}

var mensaje = saludar();
document.write(mensaje);



function verColor(valor){
    valor = parseInt(prompt('Ingrese valor 1 /3 '));

    switch (valor) {
        case 1:
            return 'Rojo';
            break;
        case 2:
            return 'Verde';
        case 3:
                return 'Amarillo';       
    
        default:
            return 'Valor incorecto';
            break;
    }



}


alert(verColor());



