import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./cartwidget.css";

const CartWidget = () => {

  const {totalItems} = useContext(CartContext)

  return ( <>
     
    <div className="icon">
    <i className="fas fa-shopping-cart">({totalItems})</i>
    </div>
    
    </>
  );

};

export default CartWidget;