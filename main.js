// set global variable
var timer;
let minutes = 1;
let seconds = 0;
let isTimerOn = false;

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
                seconds = 10;
            }
            else if (minutes == 0 && seconds == 0) {
                clearInterval(timer);
                return;
            }
            seconds--;
            console.log({minutes, seconds});
        }, 1000);
    }
}

const stopTimer = () => {
    clearInterval(timer);
    return;
}

btnStart.addEventListener('click', startTimer);
btnStop.addEventListener('click', stopTimer);

// console.log(btnPomodoro);
// console.log(btnShortBreak);
// console.log(btnLongBreak);