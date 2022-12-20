import Image from "next/image";
import React, { useEffect, useState } from "react";
import ProductView from "./ProductView";

function Products() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // https://github.com/Ovi/DummyJSON
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setData(data.products);
    }
    fetchData();
  }, []);

  return (
    <div className="lg:w-4/5 mx-auto">
      <ProductView products={data} />
    </div>
  );
}

export default Products;
