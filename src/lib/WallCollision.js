export default function WallCollision(ballObj, canvas) {
  if (ballObj.x + ballObj.rad > canvas.width) {
    ballObj.x = canvas.width - ballObj.rad;
    ballObj.dx = -ballObj.dx;
  }

  if (ballObj.x - ballObj.rad < 0) {
    ballObj.x = ballObj.rad;
    ballObj.dx = -ballObj.dx;
  }

  if (ballObj.y + ballObj.rad > canvas.height) {
    ballObj.y = canvas.height - ballObj.rad;
    ballObj.dy = -ballObj.dy;
  }

  if (ballObj.y - ballObj.rad < 0) {
    ballObj.y = ballObj.rad;
    ballObj.dy = -ballObj.dy;
  }
}
