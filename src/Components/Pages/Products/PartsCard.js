import React from "react";
import { useNavigate } from "react-router-dom";

function PartsCard({ product }) {
  const navigate = useNavigate();
  const { name, _id, picture, description, price } = product;
  const handleNavigate = (id) => {
    navigate(`allparts/${id}`);
  };
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-2xl">
      <figure>
        <img className="" width="300px" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-lg">
          Price:{" "}
          <span className="text-2xl font-bold text-orange-500">${price}</span>
        </p>
        <p>{description.slice(0, 90)}</p>
        <div className="card-actions justify-center mt-2">
          <button
            onClick={() => handleNavigate(_id)}
            className="btn btn-primary"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default PartsCard;
