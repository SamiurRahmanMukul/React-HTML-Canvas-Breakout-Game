import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mx-10 my-40">
      <Link to="/breakout">
        <h1 className="text-center text-3xl uppercase font-bold transition-all duration-100 hover:text-green-500">Let's Play Breakout!</h1>
      </Link>
    </div>
  );
};

export default Home;
