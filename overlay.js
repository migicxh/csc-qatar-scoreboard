
const state = {
    homeTeam: "HOME",
    awayTeam: "AWAY",
    homeScore: 0,
    awayScore: 0,
    status: "1ST HALF",
    seconds: 0,
    running: false
};

function loadState() {
    state.homeTeam = localStorage.getItem("homeTeam") || "HOME";
    state.awayTeam = localStorage.getItem("awayTeam") || "AWAY";
    state.homeScore = Number(localStorage.getItem("homeScore") || 0);
    state.awayScore = Number(localStorage.getItem("awayScore") || 0);
    state.status = localStorage.getItem("matchStatus") || "1ST HALF";
    state.seconds = Number(localStorage.getItem("seconds") || 0);
    state.running = localStorage.getItem("running") === "true";
}

function render() {
    homeTeam.textContent = state.homeTeam;
    awayTeam.textContent = state.awayTeam;

    homeScore.textContent = state.homeScore;
    awayScore.textContent = state.awayScore;

    matchStatus.textContent = state.status;

    const m = Math.floor(state.seconds / 60);
    const s = state.seconds % 60;

    timer.textContent =
        String(m).padStart(2, "0") +
        ":" +
        String(s).padStart(2, "0");
}

setInterval(() => {

    loadState();

    if (state.running) {
        state.seconds++;
        localStorage.setItem("seconds", state.seconds);
    }

    render();

}, 1000);

loadState();
render();
