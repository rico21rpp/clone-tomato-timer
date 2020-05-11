// set global variable
var timer;
var isTimerOn = false;

var minutes = 25;
var seconds = 0;
var minuteStr = "25";
var secondStr = "00";

var counter = document.querySelector('#counter');

const btnPomodoro = document.querySelector('.btn__timer--pomodoro');
const btnShortBreak = document.querySelector('.btn__timer--short');
const btnLongBreak = document.querySelector('.btn__timer--long');

const btnStart = document.querySelector('.btn__action--start');
const btnStop = document.querySelector('.btn__action--stop');
const btnReset = document.querySelector('.btn__action--reset');

// set timer counter displayed on the screen
const setCounter = () => {
    minuteStr = getTimeStr(minutes)
    secondStr = getTimeStr(seconds)
    counter.innerHTML = `${minuteStr}:${secondStr}`;
}

// get time value in string format
const getTimeStr = (counterNumber) => counterNumber < 10 ? `0${counterNumber}` : counterNumber.toString();

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
                setCounter();
                minutes = 25;
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
}

const resetTimer = () => {
    clearInterval(timer);
    isTimerOn = false;
    minutes = 25;
    seconds = 0;
    setCounter();
}

const changeAndStartTimer = (newMinutes) => {
    minutes = newMinutes;
    seconds = 0;
    setCounter();
    startTimer();
}

const startPomodoro = () => changeAndStartTimer(25);
const startShortBreak = () => changeAndStartTimer(5);
const startLongBreak = () => changeAndStartTimer(10);

btnStart.addEventListener('click', startTimer);
btnStop.addEventListener('click', stopTimer);
btnReset.addEventListener('click', resetTimer);

btnPomodoro.addEventListener('click', startPomodoro);
btnShortBreak.addEventListener('click', startShortBreak);
btnLongBreak.addEventListener('click', startLongBreak);

/*
NOTES

JS Feature
[ ] Tombol reset harusnya mereset sesuai jenis timernya, bukan selalu reset ke 25 menit
[x] code untuk jenis timer menyalahi prinsip DRY, revisi! 
*/