let hit = document.getElementsByClassName("box")[0];
let score = 0;
let rand;
let scoreboard = document.getElementsByClassName("box")[2];

function playagain(){
    document.getElementById("pbtm").addEventListener("click", (details) => {
        let clicked = Number(details.target.textContent);
        if (clicked == rand) {
          score += 10;
          scoreboard.textContent = score;
          getnewhit();
          bubbles();
        }
      });
      
      getnewhit();
      bubbles();
      settimer();
}

function bubbles() {
  let ihtml = ``;
  for (let i = 1; i <= 126; i++) {
    ihtml += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.getElementById("pbtm").innerHTML = ihtml;
}

function settimer() {
  let t = 60;
  let a = setInterval(() => {
    if (t > 0) {
      t--;
      document.getElementsByClassName("box")[1].textContent = t;
    } else {
      document.getElementById("pbtm").innerHTML = `
      <h1>GAME OVER!</h1><br>
      <h3>SCORE: ${score}</h3>
      <button id="btn">PLAY AGAIN <i class="ri-play-fill"></i></button>
      `;
      document.getElementById("pbtm").style.flexDirection = "column"
      document.getElementById("pbtm").style.alignItems = "center"
      document.getElementById("pbtm").style.justifyContent = "center"
      document.getElementById("btn").addEventListener("click", () => {
        playagain()
      })
      clearInterval(a);
    }
  }, 1000);
}

function getnewhit() {
  rand = Math.floor(Math.random() * 10);
  hit.textContent = rand;
}

playagain();
