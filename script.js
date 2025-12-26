let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let lapCount = 0;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const lapBtn = document.getElementById("lapBtn");
const laps = document.getElementById("laps");
const toggleBtn = document.getElementById("darkModeToggle");


function formatTime(time) {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
}

function updateDisplay() {
    elapsedTime = Date.now() - startTime;
    display.textContent = formatTime(elapsedTime);
}

startBtn.onclick = () => {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateDisplay, 10);
    startBtn.disabled = true;
    stopBtn.disabled = false;
    lapBtn.disabled = false;
};

stopBtn.onclick = () => {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    stopBtn.disabled = true;
};

resetBtn.onclick = () => {
    clearInterval(timerInterval);
    elapsedTime = 0;
    lapCount = 0;
    display.textContent = "00:00.00";
    laps.innerHTML = "";
    startBtn.disabled = false;
    stopBtn.disabled = true;
    lapBtn.disabled = true;
};

lapBtn.onclick = () => {
    lapCount++;
    const lapTime = document.createElement("div");
    lapTime.textContent = `Lap ${lapCount}: ${formatTime(elapsedTime)}`;
    laps.prepend(lapTime);
};
toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");

        // Change button text
        if (document.body.classList.contains("dark-mode")) {
            toggleBtn.textContent = "☀️";
        } else {
            toggleBtn.textContent = "🌙";
        }
    });