import React, { useEffect, useRef } from "react";
import data from "../../../data/data";
import AllBroken from "../../../lib/AllBroke";
import { BallMovement } from "../../../lib/BallMovement";
import Brick from "../../../lib/Brick";
import BrickCollision from "../../../lib/BrickCollision";
import Paddle from "../../../lib/Paddle";
import PaddleHit from "../../../lib/PaddleHit";
import PlayerStats from "../../../lib/PlayerStats";
import ResetBall from "../../../lib/ResetBall";
import WallCollision from "../../../lib/WallCollision";
let { ballObj, paddleProps, player, brickObj } = data;
let bricks = [];

const Board = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      paddleProps.y = canvas.height - 30;

      // Assign Bricks
      let newBrickSet = Brick(player.level, bricks, canvas, brickObj);

      if (newBrickSet && newBrickSet.length > 0) {
        bricks = newBrickSet;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Score + Player Level
      PlayerStats(ctx, player, canvas);

      // Display Bricks
      bricks.map((brick) => {
        return brick.draw(ctx);
      });

      // Handle ball movement
      BallMovement(ctx, ballObj);

      // Check all broken
      AllBroken(bricks, player, brickObj);

      if (player.lives === 0) {
        alert("Game Over! Press OK to restart game");

        player.lives = 5;
        player.level = 1;
        player.score = 0;
        ResetBall(ballObj, paddleProps);
        bricks.length = 0;
      }

      // Handle ball & wall collision
      WallCollision(ballObj, canvas, player, paddleProps);

      // Brick Collision
      let brickCollision;

      for (let i = 0; i < bricks.length; i++) {
        brickCollision = BrickCollision(ballObj, bricks[i]);

        if (brickCollision.hit && !bricks[i].broke) {
          // console.log(brickCollision);
          if (brickCollision.axis === "X") {
            ballObj.dx *= -1;
            bricks[i].broke = true;
          } else if (brickCollision.axis === "Y") {
            ballObj.dy *= -1;
            bricks[i].broke = true;
          }
          player.score += 10;
        }
      }

      Paddle(ctx, canvas, paddleProps);

      // Paddle + Ball Collision
      PaddleHit(ballObj, paddleProps);

      requestAnimationFrame(render);
    };

    render();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      width={1920 / 2}
      height={1080 / 2 - 50}
      onMouseMove={(event) => {
        paddleProps.x = event.clientX - paddleProps.width / 2 - 150;
      }}></canvas>
  );
};

export default Board;
