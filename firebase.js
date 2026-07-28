
// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getDatabase,
  ref,
  set,
  update,
  onValue
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDnkATN6Nb-lNTbL9KaTjon4yFTaCDozPc",
  authDomain: "csc-scoreboard.firebaseapp.com",
  databaseURL: "https://csc-scoreboard-default-rtdb.firebaseio.com",
  projectId: "csc-scoreboard",
  storageBucket: "csc-scoreboard.firebasestorage.app",
  messagingSenderId: "470598439855",
  appId: "1:470598439855:web:059ddc041d72a321a5555a"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

const scoreboardRef = ref(db, "scoreboard");

export {
  db,
  scoreboardRef,
  ref,
  set,
  update,
  onValue
};
