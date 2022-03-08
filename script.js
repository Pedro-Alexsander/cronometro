let min = 0;
let seg = 0;
let mili = 0;
let tempo = 1000/60;
let cron;
let isVerificar = false



function iniciar(){
    if(isVerificar == false){
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
    isVerificar = true}
}

function parar(){
    clearInterval(cron)
    isVerificar = false
}
function zerar(){
    clearInterval(cron)
     min = 0;
    seg = 0;
    mili = 0;
    isVerificar = false
    document.getElementById("formato").innerText = "00:00:00"
}