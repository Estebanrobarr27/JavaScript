

class Persona{
    nombre = 'Homero';
    apellido = 'Simpson';
    direccion = 'Ave Siempreviva 742';
    telefono = '5553472';
    email = 'amantedelacomida@aol.com';
    
    
    trabajar(){
        return 'Trabaja en la planta nuclear';
    }

    estudiar(){
        return 'Escuela primaria de Springfield';
    }
}


const homero = new Persona();
const bart = new Persona();
const lenny = new Persona();

document.write(homero.nombre+' '+homero.apellido);
document.write('<br>');
document.write(homero.trabajar());
document.write('<br>');
document.write('<br>');
document.write('Bart ',bart.apellido);
document.write('<br>');
document.write('Bart estudia en ',bart.estudiar());
document.write('<br>');
document.write('<br>');
document.write('<br>');



document.write('Lenny ',lenny.trabajar());