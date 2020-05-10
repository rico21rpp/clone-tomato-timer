// set global variable
var timer;
var minutes = 25;
var seconds = 0;
var isTimerOn = false;

var minuteStr = "25";
var secondStr = "00";

var counter = document.querySelector('#counter');

const btnPomodoro = document.querySelector('.btn__timer--pomodoro');
const btnShortBreak = document.querySelector('.btn__timer--short');
const btnLongBreak = document.querySelector('.btn__timer--long');

const btnStart = document.querySelector('.btn__action--start');
const btnStop = document.querySelector('.btn__action--stop');
const btnReset = document.querySelector('.btn__action--reset');

const setCounter = () => {
    minuteStr = minutes.toString();
    setSecondStr();
    counter.innerHTML = `${minuteStr}:${secondStr}`;
}

function setSecondStr() {
    if (seconds < 10) {
        secondStr = `0${seconds}`;
    }
    else {
        secondStr = seconds.toString();
    }
}

const startTimer = () => {
    if (isTimerOn == false) {
        isTimerOn = true;
        timer = setInterval(function() {
            if (minutes > 0 && seconds == 0) {
                minutes--;
                seconds = 60;
            }
            else if (minutes == 0 && seconds == 0) {
                clearInterval(timer);
                isTimerOn = false;
                minutes = 25;
                setCounter();
                return;
            }
            seconds--;
            setCounter();
        }, 1000);
    }
}

const stopTimer = () => {
    clearInterval(timer);
    isTimerOn = false;
    return;
}

const resetTimer = () => {
    clearInterval(timer);
    isTimerOn = false;
    minutes = 25;
    seconds = 0;
    setCounter();
}

btnStart.addEventListener('click', startTimer);
btnStop.addEventListener('click', stopTimer);
btnReset.addEventListener('click', resetTimer);