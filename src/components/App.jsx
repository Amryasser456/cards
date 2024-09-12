import { useState } from "react";
import React from "react";
import Mainproducts from "./Mainproducts";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "chipsy", price: 100, items: 1 },
    { id: 2, name: "pepsi", price: 200, items: 1 },
    { id: 3, name: "cigaretes", price: 300, items: 1 },
    { id: 4, name: "kranshy", price: 400, items: 1 },
  ]);

  const [newProducts] = useState([
    { id: 1, name: "chipsy", price: 100, items: 1 },
    { id: 2, name: "pepsi", price: 200, items: 1 },
    { id: 3, name: "cigaretes", price: 300, items: 1 },
    { id: 4, name: "kranshy", price: 400, items: 1 },
  ]);
  const [bgColor, setbgColor] = useState(true);

  function increament(id) {
    const finalprodut = products.map((product) => {
      if (product.id == id) {
        return {
          id: product.id,
          items: (product.items += 1),
          price: product.price,
          name: product.name,
        };
      } else return product;
    });

    return setProducts(finalprodut);
  }

  function decreament(id) {
    const finalprodut = products.map((product) => {
      if (product.items > 1 && product.id == id) {
        return {
          id: product.id,
          items: (product.items -= 1),
          price: product.price,
          name: product.name,
        };
      } else return product;
    });
    return setProducts(finalprodut);
  }

  function Delete(id) {
    const finalprodut = products.filter((product) => {
      return product.id !== id;
    });

    return setProducts(finalprodut);
  }
  function Deleteall() {
    setProducts([]);
  }
  function reset() {
    setProducts(newProducts);
  }
  function switche() {
    setbgColor(!bgColor);
  }
  
  return (
    <div
      className={
        bgColor ? "bg-white text-black h-[100vh]" : "bg-gray-900 text-white h-[100vh]"
      }
    >
      <div className="flex flex-row m-10 mt-4 items-center justify-evenly">
        <button className="btn btn-info" onClick={() => reset()}>
          Reset
        </button>
        <button className="btn btn-success" onClick={() => Deleteall()}>
          Delete
        </button>
        <button className="btn btn-neutral" onClick={switche}>
          Light/Dark
        </button>
      </div>
      <Mainproducts
        newProducts={newProducts}
        products={products}
        increament={increament}
        decreament={decreament}
        Delete={Delete}
      />
    </div>
  );
};

export default App;
