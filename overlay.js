
let seconds = 0;

function updateOverlay(){

seconds++;

const mins=Math.floor(seconds/60);
const secs=seconds%60;

timer.textContent=
String(mins).padStart(2,"0")+":"+
String(secs).padStart(2,"0");

homeTeam.textContent=
localStorage.getItem("homeTeam") || "HOME";

awayTeam.textContent=
localStorage.getItem("awayTeam") || "AWAY";

homeScore.textContent=
localStorage.getItem("homeScore") || "0";

awayScore.textContent=
localStorage.getItem("awayScore") || "0";

}

setInterval(updateOverlay,1000);
