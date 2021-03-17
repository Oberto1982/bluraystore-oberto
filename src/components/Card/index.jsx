import React from "react";
import "./card.css";
import Counter from "../ItemCount";

const Card = ({ title, img, prize }) => {
  return (
    <div className="card card-1"> 
      <div className="container-img">
        <img src={img} alt="imagen" />
      </div>
      <div className="container p-2">  
      <h5>{title}</h5>
      </div>
      <div>
      <p>{prize}</p>
      </div>
      <div class="sub-main">
      <button class="button-three">Add to Cart</button>
    </div>
    <Counter />
    </div>
  );
};

export default Card;