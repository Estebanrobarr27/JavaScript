let elementotextoAlarma = document.getElementById ("textoalarma");
let elementoSonidoAlarma = document.getElementById("AudioAlarma");

function comenzarTiempo() {
    let elementoSegundos = document.getElementById("tiempoelegido").value;
    setTimeout(tiempocumplido, 1000*elementoSegundos);

}


function tiempocumplido(){
    // swal('Hora del Bullying');

    //elementotextoAlarma.textContent = "ENCENDIDO";
    elementotextoAlarma.style.color = "green";
    elementoSonidoAlarma.play();

}



function ComenzarReloj(){
    setInterval(tictac, 1000)

}


function tictac(){
    let tiempoactual = new Date();
    let hora = tiempoactual.getHours();
    let minutos = String(tiempoactual.getMinutes()).padStart(2, "0");
    let segundos = String(tiempoactual.getSeconds()).padStart(2, "0");
    let textoHora = hora + ':' + minutos + ':' + segundos;
    elementotextoAlarma.textContent = textoHora;


}
