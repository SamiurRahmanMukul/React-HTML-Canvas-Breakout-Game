import React, { useEffect, useRef } from "react";
import data from "../../../data/data";
import { BallMovement } from "../../../lib/BallMovement";
import Paddle from "../../../lib/Paddle";
import WallCollision from "../../../lib/WallCollision";
let { ballObj, paddleProps } = data;

const Board = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Handle ball movement
      BallMovement(ctx, ballObj);

      // Handle ball & wall collision
      WallCollision(ballObj, canvas);

      Paddle(ctx, canvas, paddleProps);

      requestAnimationFrame(render);
    };

    render();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      width={650}
      height={300}
      onMouseMove={(event) => {
        paddleProps.x = event.clientX - paddleProps.width / 2 - 150;
      }}></canvas>
  );
};

export default Board;
