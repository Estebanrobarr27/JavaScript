
// Declaracion de arreglos
let numeros = [];  
numeros =[15,80,650,50.30,10,-30];

document.write('elementos: ',numeros);
document.write('<br> ');
document.write('Primer elemento: ',numeros[0]);
numeros[0]=14; // Cambiar el elemento del array segun la poscicion

document.write('<br> <br>--------------------------');

let frutas =['Manzanas','peras','naranjas','mangos'];
document.write('<br> ');
document.write('frutas: ',frutas);
document.write('<br> <br>--------------------------');
document.write('<br> ');


// Metodos de los Arrays


// Ver Cantidad de elementos

document.write('Cantidad de frutas: ', frutas.length);
document.write('<br> <br>--------------------------');
document.write('<br> ');


// Saber el ultimo elemento
document.write('Ultimo elemento frutas:  ', frutas[frutas.length-1]);
document.write('<br> <br>--------------------------');
document.write('<br> ');


// Arrays de tipo numero a tipo texto
document.write('En String: ',numeros.toString())
document.write('<br> ');

// Unir dos arreglos

let letras =['a','b','c'];
let numeros2 = [1,2,3];
document.write('Alfanumericos: ', letras.concat(numeros2,numeros));
document.write('<br> ');


// Eliminar el ultimo elemento

numeros.pop();
document.write(numeros);
document.write('<br> ');


// Agregar a  el ultimo elemento

numeros.push(-30);
document.write(numeros);
document.write('<br> ');


// Eliminar el primer elemento

numeros.shift();
document.write(numeros);
document.write('<br> ');

// Agregar a  el ultimo elemento

numeros.unshift(1000);
document.write(numeros);
document.write('<br> ');


// Eliminar desde cierto punto

numeros.splice(2,4);
document.write(numeros);
document.write('<br> ');


// Copiar un array
let cantidades = [100,200,500,600,800];
let copia = cantidades.slice(1,4);
document.write('Array copia: ', copia);
document.write('<br> ');


// Organizar en orden alfabetico
let objetos = ['carros','botella','planeta','zorro'];
document.write('Orden Real: ',objetos,'<br>','Orden Alfabetico: ',objetos.sort());
document.write('<br> ');


// Organizar en orden alfabetico reverso
document.write('Orden Alfabetico reverso: ',objetos.reverse());
document.write('<br> ');


// Para que no se pueda alterar debe realizarse con la funcion const










