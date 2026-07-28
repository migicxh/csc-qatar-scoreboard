
let seconds = 0;

function updateTimer() {
    seconds++;

    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    document.getElementById("timer").textContent =
        String(mins).padStart(2, "0") + ":" +
        String(secs).padStart(2, "0");
}

setInterval(updateTimer, 1000);
