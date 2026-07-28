
import { scoreboardRef, onValue } from "./firebase.js";

onValue(scoreboardRef, (snapshot) => {

    const data = snapshot.val();

    if (!data) return;

    document.getElementById("homeTeam").textContent = data.homeTeam || "HOME";
    document.getElementById("awayTeam").textContent = data.awayTeam || "AWAY";

    document.getElementById("homeScore").textContent = data.homeScore || 0;
    document.getElementById("awayScore").textContent = data.awayScore || 0;

    document.getElementById("matchStatus").textContent = data.status || "1ST HALF";

    document.getElementById("homeYellowCount").textContent = "🟨 " + (data.homeYellow || 0);
    document.getElementById("awayYellowCount").textContent = "🟨 " + (data.awayYellow || 0);

    document.getElementById("homeRedCount").textContent = "🟥 " + (data.homeRed || 0);
    document.getElementById("awayRedCount").textContent = "🟥 " + (data.awayRed || 0);

    document.getElementById("addedTime").textContent = "+" + (data.addedTime || 0);

    document.getElementById("timer").textContent = data.timer || "00:00";

});
