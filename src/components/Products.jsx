import React from "react";

const Products = ({ product: { id, name, price, items }, increament, decreament, Delete }) => {
  console.log(name);

  return (
    <div className="flex justify-evenly items-center p-4 bg-gray-600 mb-2 text-white">
      <span>name : {name}</span>
      <span>price : {price}</span>
      <span>item : {items}</span>
      <span className="btn bg-red-800" onClick={() => increament(id)}>
        +
      </span>
      <span className="btn bg-green-600" onClick={() => decreament(id)}>
        -
      </span>
      <span className="btn bg-blue-800" onClick={() => Delete(id)}>
        Delete
      </span>
      <span>total:{price * items} </span>
    </div>
  );
};
export default Products;
