
const state = {
    homeTeam: "HOME",
    awayTeam: "AWAY",
    homeScore: 0,
    awayScore: 0,
    status: "1ST HALF",
    seconds: 0
};

function loadData() {

    state.homeTeam = localStorage.getItem("homeTeam") || "HOME";
    state.awayTeam = localStorage.getItem("awayTeam") || "AWAY";

    state.homeScore = Number(localStorage.getItem("homeScore") || 0);
    state.awayScore = Number(localStorage.getItem("awayScore") || 0);

    state.status = localStorage.getItem("matchStatus") || "1ST HALF";

}

function updateClock() {

    state.seconds++;

    const minutes = Math.floor(state.seconds / 60);
    const seconds = state.seconds % 60;

    document.getElementById("timer").textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");

}

function render() {

    document.getElementById("homeTeam").textContent = state.homeTeam;
    document.getElementById("awayTeam").textContent = state.awayTeam;

    document.getElementById("homeScore").textContent = state.homeScore;
    document.getElementById("awayScore").textContent = state.awayScore;

    document.getElementById("matchStatus").textContent = state.status;

}

function updateOverlay() {

    loadData();

    render();

    updateClock();

}

setInterval(updateOverlay,1000);

render();
