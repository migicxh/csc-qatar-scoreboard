
let homeScore = 0;
let awayScore = 0;

function updateTeams() {
    localStorage.setItem(
        "homeTeam",
        document.getElementById("home").value
    );

    localStorage.setItem(
        "awayTeam",
        document.getElementById("away").value
    );
}

function homePlus() {
    homeScore++;
    localStorage.setItem("homeScore", homeScore);
}

function homeMinus() {
    if (homeScore > 0) {
        homeScore--;
        localStorage.setItem("homeScore", homeScore);
    }
}

function awayPlus() {
    awayScore++;
    localStorage.setItem("awayScore", awayScore);
}

function awayMinus() {
    if (awayScore > 0) {
        awayScore--;
        localStorage.setItem("awayScore", awayScore);
    }
}

function setStatus(status) {
    localStorage.setItem("matchStatus", status);
}
