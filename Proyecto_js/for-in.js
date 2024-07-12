/*let palabra = 'Esteban';  //El bucle depende de la cantidad de caracteres en una palabra


for (let f in palabra) {
    document.write(palabra[f]);
    //document.write('<br>');
} */



// Contador de vocales


let palabra = 'murcielago';
let vocal =0;


for (let f in palabra) {
    if (palabra[f]=='a' || palabra[f]=='e' ||
    palabra[f]=='i' || palabra[f]=='o' ||  palabra[f]=='u')
        { vocal++;
                
    }
}

document.write('La cantidad de vocales es : ',vocal);



