import React from "react";
import Board from "./Board";

const Breakout = () => {
  return (
    <div className="mx-10 my-5 md:mx-5">
      {/* <div className="flex flex-row justify-between md:justify-around items-center my-2">
        <h1 className="text-2xl uppercase font-bold">Breakout</h1>
        <h1 className="text-2xl uppercase font-bold">💖💖💖💖💖</h1>
        <h1 className="text-2xl uppercase font-bold">Score: 10</h1>
      </div> */}

      <Board />
    </div>
  );
};

export default Breakout;
