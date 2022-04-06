import React, { useEffect, useRef } from "react";

const Board = () => {
  const canvasRef = useRef(null);
  let x = 0;

  useEffect(() => {
    const render = () => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.fillStyle = "red";
      ctx.arc(x, 75, 10, 0, Math.PI * 2);
      ctx.strokeStyle = "black";
      ctx.strokeWidth = 5;
      ctx.fill();
      ctx.stroke();
      x += 0.5;
      if (x > canvas.width) {
        x = 0;
      }

      requestAnimationFrame(render);
    };

    render();
  }, []);

  return <canvas ref={canvasRef} id="canvas"></canvas>;
};

export default Board;
