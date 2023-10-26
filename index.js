var numPartidas;
var numHumanos;
var puntuacionJ1 = 0;
var puntuacionJ2 = 0;
var puntuacionJ3 = 0;
var rondaActual = 1;

var clickadoJ1;
var clickadoJ2;
var clickadoJ3;

$( document ).ready(function() {
    $('#puntuacionJ1').text(puntuacionJ1);
    $('#puntuacionJ2').text(puntuacionJ2);
    $('#puntuacionJ3').text(puntuacionJ3);
    $('.Global').hide();
    $('.FichaJugador1').css("background-color", "red");
});

function EmpezarJuego(){
    numPartidas =  document.getElementById("numPartidas").value;
    numHumanos =  document.getElementById("numHumanos").value;

    $('#rondaActual').text("Ronda:" + rondaActual + "/" + numPartidas);

    $('.Global').show();
    $('.Ganador').hide();
    $('.Pista').hide();
    $('.SiguientePartida').hide();
    $('.Reset').hide();

    if(numHumanos == 0){
        var cont = 0;
        for(var i = 1; i <=numPartidas; i++){
            var eleccionM1 = Math.floor(Math.random() * (2 - 1 + 1) + 1);
            var eleccionM2 = Math.floor(Math.random() * (5 - 4 + 1) + 4);
            var eleccionM3 = Math.floor(Math.random() * (8 - 7 + 1) + 7);
            
            setTimeout(function(){
                $( "#"+eleccionM1 ).click();
            }, 2000+cont);
            
            setTimeout(function(){
                $( "#"+eleccionM2 ).click();
            }, 4000+cont);
            
            setTimeout(function(){
                $( "#"+eleccionM3 ).click();
            }, 6000+cont);
    
            if(i != numPartidas){
                setTimeout(function(){
                    SiguientePartida();                
                }, 10000+cont);    
            }
           
            cont = cont+10000;
       }
    }else if(numHumanos == 1){
        $('.Pista').show();

        var eleccionM1 = Math.floor(Math.random() * (2 - 1 + 1) + 1);
        var eleccionM2 = Math.floor(Math.random() * (5 - 4 + 1) + 4);
        cont = 0;

        setTimeout(function(){
            $( "#"+eleccionM1 ).click();
        }, 2000+cont);
        
        setTimeout(function(){
            $( "#"+eleccionM2 ).click();
        }, 4000+cont);

        
    }
}

function moverManoJ1(mano){
    $('.FichaJugador1').css("background-color", "white");
    $('.Jugador2').css("background-color", "red");

    clickadoJ1 =  parseInt(mano.id, 10);
}

function moverManoJ2(mano){
    $('.Jugador2').css("background-color", "white");
    $('.Jugador3').css("background-color", "red");

    clickadoJ2 =  parseInt(mano.id, 10);
}

function moverManoJ3(mano){
    $('.Jugador3').css("background-color", "white");

    clickadoJ3 =  parseInt(mano.id, 10);
    
    if(clickadoJ1==1){
        document.getElementById("manoJ1").src = "./Recursos/uno.png";
    }else if(clickadoJ1==2){
        document.getElementById("manoJ1").src = "./Recursos/dos.png";
    }

    if(clickadoJ2==4){
        document.getElementById("manoJ2").src = "./Recursos/uno.png";
    }else if(clickadoJ2==5){
        document.getElementById("manoJ2").src = "./Recursos/dos.png";
    }

    if(clickadoJ3==7){
        document.getElementById("manoJ3").src = "./Recursos/uno.png";
    }else if(clickadoJ3==8){
        document.getElementById("manoJ3").src = "./Recursos/dos.png";
    }

    //alert(clickadoJ1);
    //alert(clickadoJ2);
    //alert(clickadoJ3);

    if(clickadoJ1 == 1 && (clickadoJ2 == 5 && clickadoJ3 == 8)){
        $("#Ganador").text("Ganador de esta ronda: Jugador 1");
        puntuacionJ1++;
        $('#puntuacionJ1').text(puntuacionJ1);
    }else if(clickadoJ2 == 4 && (clickadoJ1 == 2 && clickadoJ3 == 8)){
        $("#Ganador").text("Ganador de esta ronda: Jugador 2");
        puntuacionJ2++;
        $('#puntuacionJ2').text(puntuacionJ2);
    }else if(clickadoJ3 == 7 && (clickadoJ1 == 2 && clickadoJ2 == 5)){
        $("#Ganador").text("Ganador de esta ronda: Jugador 3");
        puntuacionJ3++;
        $('#puntuacionJ3').text(puntuacionJ3);
    }

    if(clickadoJ1 == 2 && (clickadoJ2 == 4 && clickadoJ3 == 7)){
        $("#Ganador").text("Ganador de esta ronda: Jugador 1");
        puntuacionJ1++;
        $('#puntuacionJ1').text(puntuacionJ1);
    }else if(clickadoJ2 == 5 && (clickadoJ1 == 1 && clickadoJ3 == 7)){
        $("#Ganador").text("Ganador de esta ronda: Jugador 2");
        puntuacionJ2++;
        $('#puntuacionJ2').text(puntuacionJ2);
    }else if(clickadoJ3 == 8 && (clickadoJ1 == 1 && clickadoJ2 == 4)){
        $("#Ganador").text("Ganador de esta ronda: Jugador 3");
        puntuacionJ3++;
        $('#puntuacionJ3').text(puntuacionJ3);
    }

    if((clickadoJ1 == 1 && clickadoJ2 == 4 && clickadoJ3 == 7) || (clickadoJ1 == 2 && clickadoJ2 == 5 && clickadoJ3 == 8)){
        $("#Ganador").text("Empate todos han mostrado la misma mano");
    }

    $('.Ganador').show();
    $('.SiguientePartida').show();
    rondaActual++;

    if(rondaActual > numPartidas){
        if((puntuacionJ1 > puntuacionJ2) && (puntuacionJ1 > puntuacionJ3)){
            $("#Ganador").text("El ganador final es el jugador 1");
        }else if((puntuacionJ2 > puntuacionJ1) && (puntuacionJ2 > puntuacionJ3)){
            $("#Ganador").text("El ganador final es el jugador 2");
        }else if((puntuacionJ3 > puntuacionJ1) && (puntuacionJ3 > puntuacionJ2)){
            $("#Ganador").text("El ganador final es el jugador 3");
        }else{
            $("#Ganador").text("Existe empate");
        }

        //$('.Ganador').show();
        $('.SiguientePartida').hide();
        $('.Reset').show();
    }
}

function SiguientePartida(){
    $('.Ganador').hide();
    $('.SiguientePartida').hide();
    document.getElementById("manoJ1").src = "./Recursos/Interrogante.jpg";
    document.getElementById("manoJ2").src = "./Recursos/Interrogante.jpg";
    document.getElementById("manoJ3").src = "./Recursos/Interrogante.jpg";
    $('#rondaActual').text("Ronda:" + rondaActual + "/" + numPartidas);

    if(numHumanos == 1){
        $('.Pista').show();

        var eleccionM1 = Math.floor(Math.random() * (2 - 1 + 1) + 1);
        var eleccionM2 = Math.floor(Math.random() * (5 - 4 + 1) + 4);
        cont = 0;
        
        setTimeout(function(){
            $( "#"+eleccionM1 ).click();
        }, 2000+cont);
        
        setTimeout(function(){
            $( "#"+eleccionM2 ).click();
        }, 4000+cont);
    }
}

function Reset(){
    location.reload(true);
}

function Pista(){
    if(clickadoJ1==1){
        document.getElementById("manoJ1").src = "./Recursos/uno.png";
    }else if(clickadoJ1==2){
        document.getElementById("manoJ1").src = "./Recursos/dos.png";
    }

    if(clickadoJ2==4){
        document.getElementById("manoJ2").src = "./Recursos/uno.png";
    }else if(clickadoJ2==5){
        document.getElementById("manoJ2").src = "./Recursos/dos.png";
    }

    $('.Pista').hide();
}