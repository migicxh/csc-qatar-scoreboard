
let homeScore = Number(localStorage.getItem("homeScore")) || 0;
let awayScore = Number(localStorage.getItem("awayScore")) || 0;

function saveScores() {
    localStorage.setItem("homeScore", homeScore);
    localStorage.setItem("awayScore", awayScore);
}

function updateTeams() {
    localStorage.setItem("homeTeam", document.getElementById("home").value || "HOME");
    localStorage.setItem("awayTeam", document.getElementById("away").value || "AWAY");
}

function homePlus() {
    homeScore++;
    saveScores();
}

function homeMinus() {
    if (homeScore > 0) homeScore--;
    saveScores();
}

function awayPlus() {
    awayScore++;
    saveScores();
}

function awayMinus() {
    if (awayScore > 0) awayScore--;
    saveScores();
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

function addAddedTime() {
    let t = Number(localStorage.getItem("addedTime")) || 0;
    localStorage.setItem("addedTime", ++t);
}

function removeAddedTime() {
    let t = Number(localStorage.getItem("addedTime")) || 0;
    if (t > 0) t--;
    localStorage.setItem("addedTime", t);
}
