// set global variable
var timer;
var minutes = 1;
var seconds = 0;
var isTimerOn = false;

const btnPomodoro = document.querySelector('.btn__timer--pomodoro');
const btnShortBreak = document.querySelector('.btn__timer--short');
const btnLongBreak = document.querySelector('.btn__timer--long');

const btnStart = document.querySelector('.btn__action--start');
const btnStop = document.querySelector('.btn__action--stop');
const btnReset = document.querySelector('.btn__action--reset');

const startTimer = () => {
    if (isTimerOn == false) {
        isTimerOn = true;
        timer = setInterval(function() {
            if (minutes > 0 && seconds == 0) {
                minutes--;
                seconds = 59;
            }
            else if (minutes == 0 && seconds == 0) {
                clearInterval(timer);
                isTimerOn = false;
                minutes = 25;
                return;
            }
            seconds--;
            console.log({minutes, seconds});
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
}

btnStart.addEventListener('click', startTimer);
btnStop.addEventListener('click', stopTimer);
btnReset.addEventListener('click', resetTimer);

// console.log(btnPomodoro);
// console.log(btnShortBreak);
// console.log(btnLongBreak);