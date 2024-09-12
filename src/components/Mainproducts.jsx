import React from "react";
import Products from "./Products";

const Mainproducts = ({
  products,
  newProducts,
  increament,
  decreament,
  Delete,
}) => {
  // total count
  const total = products.reduce((total, products) => {
    return total + products.price * products.items;
  }, 0);
  const totals = total > 0 ? total : "your card is empty";
  function addcard(name) {
    const Product = products.find(product => product.name === name);
    if (Product) {
      increament(Product.id);}}

  return (
    <div>
      <div className="flex justify-between">
        <button className="bg-[hsl(165,70%,60%)]  rounded-lg  btn"  onClick={()=>addcard(' chipsy')}>
          chipsy
        </button>
        <button className="bg-[#b5750f]  rounded-lg btn" onClick={()=>addcard('pepsi')}>pepsi</button>
        <button className="bg-[#b50f0f]  rounded-lg btn"  onClick={()=>addcard('cigaretes')}>cigaretes</button>
        <button className="bg-[#0f86b5]  rounded-lg btn"  onClick={()=>addcard('kranshy')}>kranshy</button>
      </div>
      {products.map((product, index) => (
        <Products
          product={product}
          key={index}
          increament={increament}
          decreament={decreament}
          Delete={Delete}
        />
      ))}
      <h1 className="text-center p-4 mt-5 font-semibold">total : {totals}</h1>
    </div>
  );
};

export default Mainproducts;
