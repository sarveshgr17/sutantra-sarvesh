import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../assets/assets";

const Grid = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
