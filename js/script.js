const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "img/snake_pole.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

let box = 32;

let score = 0;

function drawGame() {
  ctx.drawImage(ground, 0, 0);
  ctx.fillStyle = "white";
  ctx.font = "50px Arial";
  ctx.fillText(score, box * 2.5, box * 1.7);
  ctx.fillText(100, box * 15, box * 1.7);
}

let game = setInterval(drawGame, 100);
