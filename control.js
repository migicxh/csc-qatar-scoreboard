
import {
    scoreboardRef,
    update
} from "./firebase.js";

function send(data) {
    update(scoreboardRef, data);
}

window.updateTeams = function () {
    send({
        homeTeam: document.getElementById("home").value,
        awayTeam: document.getElementById("away").value
    });
};

window.homePlus = function () {
    const score = Number(document.getElementById("homeScoreInput")?.value || 0) + 1;
    document.getElementById("homeScoreInput").value = score;
    send({ homeScore: score });
};

window.homeMinus = function () {
    let score = Number(document.getElementById("homeScoreInput")?.value || 0);
    if (score > 0) score--;
    document.getElementById("homeScoreInput").value = score;
    send({ homeScore: score });
};

window.awayPlus = function () {
    const score = Number(document.getElementById("awayScoreInput")?.value || 0) + 1;
    document.getElementById("awayScoreInput").value = score;
    send({ awayScore: score });
};

window.awayMinus = function () {
    let score = Number(document.getElementById("awayScoreInput")?.value || 0);
    if (score > 0) score--;
    document.getElementById("awayScoreInput").value = score;
    send({ awayScore: score });
};

window.setStatus = function(status){
    send({ status });
};
