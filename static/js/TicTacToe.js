/**
 * Created by 63160 on 11/2/2017.
 */


var hour, minute,second;
hour=minute=second=0;
var millisecond=0
var int;
function Reset()
{
    window.clearInterval(int);
    millisecond=hour=minute=second=0;
    document.getElementById('timer').innerText='00:00:00';
}

function start()
{
    int=setInterval(timer,50);
}

function timer()
{
    millisecond=millisecond+50;
    if(millisecond>=1000)
    {
        millisecond=0;
        second=second+1;
    }

    if(second>=60)
    {
        second=0;
        minute=minute+1;
    }
    if(minute>=60)
    {
        minute=0;
        hour=hour+1;
    }

    document.getElementById('timer').innerText=(hour<10?'0'+hour:hour) +':'+(minute<10?'0'+minute:minute)+':'+(second<10?'0'+second:second);

}

function stop()
{
    window.clearInterval(int);
}




var gameChart = [0,0,0,0,0,0,0,0,0];
var gamebtn = document.getElementsByClassName("gamebtn");

var playBtnListener = function () {
    for (var i of gamebtn){
        i.innerText = '';
        i.removeAttribute("disabled");
        i.style.backgroundColor = '#FFF';
    }
    gameChart = [0,0,0,0,0,0,0,0,0];
    $('#difficulty')[0].innerText = $('select')[0].value;
    Reset();
    start();
};


$(document).ready(function(){
    for (var i of gamebtn){
        i.setAttribute("disabled","")
        i.style.backgroundColor = '#e6e6e6';
    }
    $("#modal-win").iziModal({
        width: 600,
        height: 290,
        autoOpen: false,
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        onOpened: function() {
            console.log('onOpened');
        },
        onClosed: function() {
            gameChart = [0,0,0,0,0,0,0,0,0];
            for (var i of gamebtn){
                i.innerText = '';
                i.removeAttribute("disabled");
                i.style.backgroundColor = '#FFF';
            }
            Reset();
            start();
            console.log('onClosed');
        }
    });
});

$('#playBtn')[0].addEventListener('click', playBtnListener);


var easyListener = function () {
    let currentBtn = event.target;
    currentBtn.innerText = 'X';
    currentBtn.setAttribute("disabled","")
    currentBtn.style.backgroundColor = '#e6e6e6';
    var id = (event.target.id)[3];
    gameChart[id] = -1;
    if((gameChart[0]===-1&&gameChart[1]===-1&&gameChart[2]===-1)||
        (gameChart[3]===-1&&gameChart[4]===-1&&gameChart[5]===-1)||
        (gameChart[6]===-1&&gameChart[7]===-1&&gameChart[8]===-1)||
        (gameChart[0]===-1&&gameChart[3]===-1&&gameChart[6]===-1)||
        (gameChart[1]===-1&&gameChart[4]===-1&&gameChart[7]===-1)||
        (gameChart[2]===-1&&gameChart[5]===-1&&gameChart[8]===-1)||
        (gameChart[0]===-1&&gameChart[4]===-1&&gameChart[8]===-1)||
        (gameChart[2]===-1&&gameChart[4]===-1&&gameChart[6]===-1)
    ){
        stop();
        $('#winner')[0].innerText = 'X';
        $('#winner-state')[0].innerText = 'WINNER';
        $('#modal-win').iziModal('open');
        for (var i of gamebtn){
            i.setAttribute("disabled","")
        }
        gameChart = [0,0,0,0,0,0,0,0,0];
    }else if(gameChart[0]!==0 && gameChart[1]!==0 && gameChart[2]!==0
        && gameChart[3]!==0 && gameChart[4]!==0 && gameChart[5]!==0
        && gameChart[6]!==0 && gameChart[7]!==0 && gameChart[8]!==0){
        stop();
        $('#winner')[0].innerText = 'X      O';
        $('#winner-state')[0].innerText = 'DRAW';
        $('#modal-win').iziModal('open');
        gameChart = [0,0,0,0,0,0,0,0,0];
    } else {
        while(true){
            var rand = Math.floor(Math.random()*9);
            if(gameChart[rand]===0) break;
        }
        setTimeout(function () {
            gamebtn[rand].innerText = 'O';
            gamebtn[rand].setAttribute("disabled","");
            gamebtn[rand].style.backgroundColor = '#e6e6e6';
            gameChart[rand] = 1;
            if((gameChart[0]===1&&gameChart[1]===1&&gameChart[2]===1)||
                (gameChart[3]===1&&gameChart[4]===1&&gameChart[5]===1)||
                (gameChart[6]===1&&gameChart[7]===1&&gameChart[8]===1)||
                (gameChart[0]===1&&gameChart[3]===1&&gameChart[6]===1)||
                (gameChart[1]===1&&gameChart[4]===1&&gameChart[7]===1)||
                (gameChart[2]===1&&gameChart[5]===1&&gameChart[8]===1)||
                (gameChart[0]===1&&gameChart[4]===1&&gameChart[8]===1)||
                (gameChart[2]===1&&gameChart[4]===1&&gameChart[6]===1)
            ){
                stop();
                $('#winner')[0].innerText = 'O';
                $('#winner-state')[0].innerText = 'WINNER';
                $('#modal-win').iziModal('open');
                for (var i of gamebtn){
                    i.setAttribute("disabled","")
                }
                gameChart = [0,0,0,0,0,0,0,0,0];
            }
        },200);
    }

};


for (var i of gamebtn){
    i.addEventListener("click", easyListener)
}