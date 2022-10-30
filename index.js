var numPartidas;
var numHumanos;
var puntuacionJ1 = 0;
var puntuacionJ2 = 0;
var puntuacionJ3 = 0;

$( document ).ready(function() {
    $('#puntuacionJ1').text(puntuacionJ1);
    $('#puntuacionJ2').text(puntuacionJ2);
    $('#puntuacionJ3').text(puntuacionJ3);
});

function EmpezarJuego(){
    numPartidas =  document.getElementById("numPartidas").value;
    numHumanos =  document.getElementById("numHumanos").value;

    alert(numPartidas);
    alert(numHumanos);
}