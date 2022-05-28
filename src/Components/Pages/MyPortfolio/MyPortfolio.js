import React from "react";
import rakib from "../../../assets/rakib1.jpg";

function MyPortfolio() {
  return (
    <div className="my-10 px-14 lg:px-20">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-[494px] h-[455px] shadow-lg"
            src={rakib}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold">Mohammad</h2>
          <p className="font-bold text-xl">Email: rakibahmed.dev@gmail.com</p>
          <p className="font-bold text-xl">
            Education: Upcoming Honours 1st year students at Govt Saadat
            College, Karatia, Tangail.
          </p>
          <p className="font-bold text-xl">
            Skills: Html, CSS, Bootstrap, TailwindCSS, WordPress, Woocommerce,
            Javascript, ES6, React.Js, React Router, React Query, AOS, Firebase,
            Node.Js, Express.Js, MongoDB
          </p>
        </div>
      </div>
    </div>
  );
}

export default MyPortfolio;
