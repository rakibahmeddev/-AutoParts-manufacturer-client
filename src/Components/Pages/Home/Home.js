import React from "react";
import PartsForHome from "../Products/PartsForHome";
import Landing from "./Landing";
import Marketing from "./Marketing";

const Home = () => {
  return (
    <div>
      <Landing></Landing>
      <PartsForHome></PartsForHome>
      <Marketing></Marketing>
    </div>
  );
};

export default Home;
