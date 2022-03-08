let min = 0;
let seg = 0;
let mili = 0;
let tempo = 1000;
let cron;

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

function parar(){
    clearInterval(cron)
}