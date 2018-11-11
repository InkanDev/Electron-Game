
let paddleP1;
let paddleP2;
let ball;

function setup() {
  
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(60);
  
  middle = window.innerHeight/2 - Paddle.height/2; // Middle of the window
  paddleMargin = 30; // Margin between the window and paddles

  /* Create and position Player 1 and Player 2 paddles */
  paddleP1 = new Paddle(paddleMargin, middle);
  paddleP2 = new Paddle(window.innerWidth-paddleMargin-Paddle.width, middle);

  /* Creates and positions the ball at the center of the window */
  ball = new Ball(window.innerWidth/2-Ball.radius, window.innerHeight/2-Ball.radius);
  
}

function draw() {

  background('#222222');

  paddleP1.move(90, 83); // Player 1 controls are Z(up) and S(down) (azerty)
  paddleP2.move(UP_ARROW, DOWN_ARROW); // Player 2 controls are the up and down arrows
  
  /* Ball collision with P1 and P2 paddles */
  if (ball.isColliding(paddleP1) || ball.isColliding(paddleP2)) {
    ball.invertSpeedX();
  }

  /* Ball collision with top and bottom window borders */
  if (ball.position.y < 0 || ball.position.y + Ball.diameter > window.innerHeight) {
    ball.invertSpeedY();
  }

  paddleP1.draw();
  paddleP2.draw();
  ball.draw();

}