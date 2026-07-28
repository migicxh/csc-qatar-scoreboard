
const state = {
    homeTeam: "HOME",
    awayTeam: "AWAY",
    homeScore: 0,
    awayScore: 0,
    status: "1ST HALF",
    seconds: 0,
    running: false,
    addedTime: 0,
    homeYellow: 0,
    awayYellow: 0,
    homeRed: 0,
    awayRed: 0
};

let lastHomeScore = 0;
let lastAwayScore = 0;

function loadState() {
    state.homeTeam = localStorage.getItem("homeTeam") || "HOME";
    state.awayTeam = localStorage.getItem("awayTeam") || "AWAY";

    state.homeScore = Number(localStorage.getItem("homeScore") || 0);
    state.awayScore = Number(localStorage.getItem("awayScore") || 0);

    state.status = localStorage.getItem("matchStatus") || "1ST HALF";

    state.seconds = Number(localStorage.getItem("seconds") || 0);
    state.running = localStorage.getItem("running") === "true";

    state.addedTime = Number(localStorage.getItem("addedTime") || 0);

    state.homeYellow = Number(localStorage.getItem("homeYellow") || 0);
    state.awayYellow = Number(localStorage.getItem("awayYellow") || 0);

    state.homeRed = Number(localStorage.getItem("homeRed") || 0);
    state.awayRed = Number(localStorage.getItem("awayRed") || 0);
}

function showGoal() {

    const banner = document.getElementById("goalBanner");
    const score = document.querySelector(".score");

    banner.classList.remove("show");
    void banner.offsetWidth;
    banner.classList.add("show");

    score.classList.remove("flash");
    void score.offsetWidth;
    score.classList.add("flash");

}

function render() {

    if (
        state.homeScore !== lastHomeScore ||
        state.awayScore !== lastAwayScore
    ) {
        showGoal();
        lastHomeScore = state.homeScore;
        lastAwayScore = state.awayScore;
    }

    document.getElementById("homeTeam").textContent = state.homeTeam;
    document.getElementById("awayTeam").textContent = state.awayTeam;

    document.getElementById("homeScore").textContent = state.homeScore;
    document.getElementById("awayScore").textContent = state.awayScore;

    document.getElementById("matchStatus").textContent = state.status;

    document.getElementById("homeYellowCount").textContent = "🟨 " + state.homeYellow;
    document.getElementById("awayYellowCount").textContent = "🟨 " + state.awayYellow;

    document.getElementById("homeRedCount").textContent = "🟥 " + state.homeRed;
    document.getElementById("awayRedCount").textContent = "🟥 " + state.awayRed;

    document.getElementById("addedTime").textContent = "+" + state.addedTime;

    const m = Math.floor(state.seconds / 60);
    const s = state.seconds % 60;

    document.getElementById("timer").textContent =
        String(m).padStart(2, "0") + ":" +
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
lastHomeScore = state.homeScore;
lastAwayScore = state.awayScore;
render();
