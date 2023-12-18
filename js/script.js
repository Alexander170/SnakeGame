const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "img/snake_pole.png";

const foodImg = new Image();
foodImg.src = "img/food.png";

let box = 32;

let score = 0;

let snake = [];
snake[0] = {
  x: 9 * box,
  y: 10 * box,
};

let snakeX = snake[0].x;
let snakeY = snake[0].y;

document.addEventListener("keydown", direction);

let dir;

function direction(event) {
  if (event.keyCode == 37 && dir != "right") dir = "left";
  else if (event.keyCode == 38 && dir != "down") dir = "up";
  else if (event.keyCode == 39 && dir != "left") dir = "right";
  else if (event.keyCode == 40 && dir != "up") dir = "down";
}

function drawGame() {
  ctx.drawImage(ground, 0, 0);
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = i == 0 ? "green" : "red";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }
  ctx.fillStyle = "white";
  ctx.font = "50px Arial";
  ctx.fillText(score, box * 2.5, box * 1.7);
  ctx.fillText(100, box * 15, box * 1.7);
}
if (dir == "left") snakeX -= box;
if (dir == "right") snakeX += box;
if (dir == "up") snakeY -= box;
if (dir == "down") snakeY += box;

let game = setInterval(drawGame, 100);
