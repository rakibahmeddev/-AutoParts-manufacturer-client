import React from "react";
import PartsForHome from "../Products/PartsForHome";
// import Reviews from "../Reviews/Reviews";
import BusinessStats from "./BusinessStats";
import ContactUs from "./ContactUs";
import Landing from "./Landing";
import Marketing from "./Marketing";

const Home = () => {
  return (
    <div>
      <Landing></Landing>
      <PartsForHome></PartsForHome>
      <Marketing></Marketing>
      <BusinessStats></BusinessStats>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
