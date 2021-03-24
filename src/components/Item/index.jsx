import React from 'react';
import Counter from '../ItemCount';
import "./item.css";

export const Item = ({ item }) => {
  return (
  
    <div className="card card-1">
      <div className="container-img">
      <img src={item.pictureUrl} alt="imagen"/>
      </div>
      <div className="container p-2">
        <h5>{item.title}</h5>
        <div><h5 class="mt-4">${item.price}</h5></div>
      </div>
      <div class="sub-main">
      <button class="button-three">Add to Cart</button>
    </div>
      <Counter />
    </div>
  );
};