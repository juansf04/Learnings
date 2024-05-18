var time = 25 * 60;
var timerInterval;
var currentMode;
var MODES = {
    pomodoro: 25,
    short: 5,
    long: 15,
}


document.querySelectorAll("#modes button")
    .forEach(button => {
        button.addEventListener('click', handleModeButtons)
    });

function handleModeButtons(event) {
    switchMode(event.target.dataset.modeId);
}

function updateControlButtons(isrunning) {
    var start_button = document.querySelector(".timer-control.start");
    var pause_button = document.querySelector(".timer-control.pause");

    if(isrunning) {
        start_button.disabled = true;
        pause_button.disabled = false;     
    } else {
        start_button.disabled = false;
        pause_button.disabled = true;
    }
}

function switchMode(mode) {

    currentMode = mode;
    document.documentElement.style.backgroundColor = "var(--" + mode + ")"
    resetTimer();
}


function startTimer() {
    timerInterval = setInterval(updateTimer, 1000)
    updateControlButtons(true);
}
function pauseTimer() {
    clearInterval(timerInterval);
    updateControlButtons(false);
}

function updateTimer() {

    var minutes = Math.floor(time / 60); // 2
    var seconds = time % 60; // 5

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("timer").textContent = minutes + ":" + seconds;
    if(time <= 0) {
        pauseTimer();
        alert("Time's up!");
        nextMode();
        resetTimer();
    }
    time -= 1;

}

function nextMode() {
    if (currentMode == "pomodoro") {
        totalBreaks += 1;
        if (totalBreaks % 4 == 0) {
            switchMode("long");
        } else {
            switchMode("short");
        }
    } else {
        switchMode("pomodoro");
    }
}

function resetTimer() {
    time = MODES[currentMode] * 60;
    clearInterval(timerInterval);
    updateTimer();
    updateControlButtons(false);
}
