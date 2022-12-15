import Image from "next/image";
import React, { useEffect, useState } from "react";

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
    <div className="m-2">
      <div>
        <table className="border-rose-700 border-2">
          <thead className="border-rose-700 border-2 border-solid">
            <tr>
              <th>Product Name</th>
              <th>Thumb</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {data && data.map((product) => (
              <tr key={product.id}>
                <td className="p-5 m-2">{product.title}</td>
                <td className="p-5"><Image src={product.thumbnail} width="200" height="200"></Image></td>
                <td className="p-5">{product.price}</td>
                <td className="p-5">{product.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
