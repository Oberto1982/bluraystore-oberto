import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

  const {totalItems} = useContext(CartContext)

  return ( <>
     
    <div>
    <i className="fas fa-shopping-cart">({totalItems})</i>
    </div>
    
    </>
  );

};

export default CartWidget;