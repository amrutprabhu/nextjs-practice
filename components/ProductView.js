import Image from "next/image";
import React from "react";
import ProductCard from "./ProductCard";

function ProductView({ products }) {
  return (
    <div className="flex flex-wrap justify-center">
      {products && products.map((product) => <ProductCard product={product} />)}
    </div>
  );
}

export default ProductView;
