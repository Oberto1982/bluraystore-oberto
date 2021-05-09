import React, { useState } from "react";
import "./itemcount.css";


export function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(parseInt(initial));



  const addHandle = () => {
    setCount(count + 1);
  };

  const removeHandle = () => {
    setCount(count - 1);
  };
  

  const agregar = () => {
    onAdd(count)
  };

  return (
    <div >


      <div className=" btn-counter m-2 p-2 d-flex  justify-content-around align-items-center border rounded">
        <button
          disabled={count <= 0}
          className="btn-incdec"
          type="button"
          onClick={removeHandle}
        >
          -
        </button>
        <div>{count}</div>
        <button
          disabled={count >= stock}
          className="btn-incdec"
          type="button"
          onClick={addHandle}
        >
          +
        </button>
      </div>
      <button
        
        className="btn-cart"
        type="button"
        onClick={agregar }
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;