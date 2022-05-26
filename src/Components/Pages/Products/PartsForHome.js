import React from "react";
import useProducts from "../../Hooks/useProducts";

import PartsCard from "./PartsCard";

function PartsForHome() {
  const [products] = useProducts();

  return (
    <div className="px-20 py-14 bg-slate-50">
      <h1 className=" text-2xl text-center font-medium sm:text-6xl mb-14">
        Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {products.map((product) => (
          <PartsCard key={product._id} product={product}></PartsCard>
        ))}
      </div>
    </div>
  );
}

export default PartsForHome;
