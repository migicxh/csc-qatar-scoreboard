
let homeScore = Number(localStorage.getItem("homeScore")) || 0;
let awayScore = Number(localStorage.getItem("awayScore")) || 0;

function save() {
    localStorage.setItem("homeScore", homeScore);
    localStorage.setItem("awayScore", awayScore);
}

function updateTeams() {
    localStorage.setItem("homeTeam", home.value || "HOME");
    localStorage.setItem("awayTeam", away.value || "AWAY");
}

function homePlus() {
    homeScore++;
    save();
}

function homeMinus() {
    if (homeScore > 0) homeScore--;
    save();
}

function awayPlus() {
    awayScore++;
    save();
}

function awayMinus() {
    if (awayScore > 0) awayScore--;
    save();
}

function setStatus(status) {
    localStorage.setItem("matchStatus", status);
}

function startClock() {
    localStorage.setItem("running", "true");
}

function pauseClock() {
    localStorage.setItem("running", "false");
}

function resetClock() {
    localStorage.setItem("running", "false");
    localStorage.setItem("seconds", "0");
}

function homeYellow() {
    let v = Number(localStorage.getItem("homeYellow")) || 0;
    localStorage.setItem("homeYellow", ++v);
}

function awayYellow() {
    let v = Number(localStorage.getItem("awayYellow")) || 0;
    localStorage.setItem("awayYellow", ++v);
}

function homeRed() {
    let v = Number(localStorage.getItem("homeRed")) || 0;
    localStorage.setItem("homeRed", ++v);
}

function awayRed() {
    let v = Number(localStorage.getItem("awayRed")) || 0;
    localStorage.setItem("awayRed", ++v);
}
