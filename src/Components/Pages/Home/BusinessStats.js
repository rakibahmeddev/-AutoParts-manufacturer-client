import React from "react";
import { FcManager } from "react-icons/fc";
import { BsFillHeartFill } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineReviews } from "react-icons/md";
import { MdOutlineEngineering } from "react-icons/md";
import { FcEngineering } from "react-icons/fc";

function BusinessStats() {
  return (
    <section className=" bg-slate-50">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="w-full">
          <h2 className=" text-2xl text-center font-medium sm:text-6xl ">
            World Domination
          </h2>

          <p
            data-aos="fade-left"
            data-aos-duration="500"
            data-aos-delay="300"
            className="mt-4 sm:text-xl text-center"
          >
            Know more about us. We believe in our work.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 ">
          <li
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="300"
            className="p-8 shadow-xl rounded-xl flex justify-around items-center bg-white"
          >
            <div className="">
              <p className="text-3xl font-extrabold">5000+</p>
              <p className="mt-1 text-xl font-medium">Customers</p>
            </div>
            <FcManager className="text-5xl" />
          </li>

          <li
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="300"
            className="p-8 shadow-xl rounded-xl flex justify-around items-center bg-white"
          >
            <div>
              <p className="text-3xl font-extrabold">190k+</p>
              <p className="mt-1 text-xl font-medium">Impressions</p>
            </div>
            <BsFillHeartFill className="text-4xl text-red-500" />
          </li>

          <li
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="300"
            className="p-8 shadow-xl rounded-xl flex justify-around items-center bg-white"
          >
            <div>
              <p className="text-3xl font-extrabold">$150k+</p>
              <p className="mt-1 text-xl font-medium">Client profits </p>
            </div>
            <GiReceiveMoney className="text-5xl text-pink-500" />
          </li>

          <li
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="300"
            className="p-8 shadow-xl rounded-xl flex justify-around items-center bg-white"
          >
            <div>
              <p className="text-3xl font-extrabold">10K+</p>
              <p className="mt-1 text-xl font-medium">Reviews</p>
            </div>
            <MdOutlineReviews className="text-5xl text-pink-500" />
          </li>

          <li
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="300"
            className="p-8 shadow-xl rounded-xl flex justify-around items-center bg-white"
          >
            <div>
              <p className="text-3xl font-extrabold">100+</p>
              <p className="mt-1 text-xl font-medium">Motor Parts</p>
            </div>
            <FcEngineering className="text-5xl text-pink-500" />
          </li>

          <li
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="300"
            className="p-8 shadow-xl rounded-xl flex justify-around items-center bg-white"
          >
            <div>
              <p className="text-3xl font-extrabold">100+</p>
              <p className="mt-1 text-xl font-medium">Staff </p>
            </div>
            <MdOutlineEngineering className="text-5xl text-pink-500" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default BusinessStats;
