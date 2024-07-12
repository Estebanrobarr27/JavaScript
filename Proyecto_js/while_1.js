/*let k=1;

while (k <= 10) {

    document.write('2 x ',k,'= ',k*2);
    document.write('<br>');
    k++;
    
}*/



let k =1;
let suma =0;
let valor;

while (k<=5) {

    valor = parseInt(prompt('Ingrese el numero '+k));
    suma = suma + valor;
    k++;
    
    document.write(valor);
    document.write('<br>');
}
document.write('<br>');

document.write('El total es: ', suma);