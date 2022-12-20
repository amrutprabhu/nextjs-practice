import Image from "next/image";
import React from "react";

function ProductCard({ product }) {
  return (
    <div className="m-2 w-80">
      <div className="flex flex-col bg-red-400 rounded">
        <div className="p-2 mx-auto h-16 text-center">{product.title}</div>
        <div className="p-2 mx-auto w-64 h-48 rounded-lg">
          <div className="absolute text-xs z-20 border-green-400 border-2 rounded p-1">
            {product.category}
          </div>
          <div>
            <Image src={product.thumbnail} className="object-cover h-44" width="300" height="50"></Image>
          </div>
        </div>
        <div className="m-1 p-1 bg-yellow-200 font-bold rounded  text-blue-800">
          {product.price}
        </div>
        <div className="m-1 p-1 h-20 overflow-hidden bg-yellow-200 rounded text-slate-500 ">
          {product.description}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
