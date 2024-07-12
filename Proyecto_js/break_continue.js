/*
for (let f = 0; f < 10; f++) {
    document.write(f);
    document.write('<br>');
    if (f==3) {
        document.write('Aqui es la vuelta ',f);
        document.write('<br>');
        break;
    }
    
}
*/

let palabra = 'murcielago';
let resultado = '';


for (let f in palabra) {
    if (palabra[f] =='a' || palabra[f] =='e' ||
        palabra[f] =='i' || palabra[f] =='o' ||
        palabra[f] =='u'){
            continue;      
    } else{
        resultado += palabra[f];
    }
}


document.write(resultado);