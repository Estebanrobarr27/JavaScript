let nombre, edad;

nombre = prompt('INGRESE SU NOMBRE');
edad = prompt('INGRESE SU EDAD');
edad = parseInt(edad);

if (edad >= 18) {
    
    document.write(nombre,' es mayor de edad');

} else {
    if (edad < 18) {
        document.write(nombre,' Es menor de edad')
    }

    else{
        document.write('No ingreso datos');
}
    
}

