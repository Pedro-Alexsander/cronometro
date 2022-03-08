var min = 0;
var seg = 0;
var mili = 0;
var tempo = 1000;
var cron;

function iniciar(){
    cron = setInterval(function(){
        mili++;
        if(mili == 60){
           mili = 0;
           seg++
           
           if(seg == 60){
               seg = 0
               min++
           }
        }


        let formato = (min<10 ? "0"+ min : min) + ":" + (seg<10 ? "0" + seg : seg) + ":" + ( mili < 10 ? "0" + mili : mili)
        document.getElementById("formato").innerText = formato;
    },tempo)
}