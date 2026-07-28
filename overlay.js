
let seconds = 0;

function updateTimer(){

seconds++;

const mins=Math.floor(seconds/60);
const secs=seconds%60;

document.getElementById("timer").textContent=
String(mins).padStart(2,"0")+":"+
String(secs).padStart(2,"0");

const home=localStorage.getItem("homeTeam");
const away=localStorage.getItem("awayTeam");

if(home)
document.getElementById("homeTeam").textContent=home;

if(away)
document.getElementById("awayTeam").textContent=away;

}

setInterval(updateTimer,1000);
