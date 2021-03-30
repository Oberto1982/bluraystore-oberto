import React from 'react';
import Counter from '../ItemCount';
import "./item.css";

import {Link} from "react-router-dom";

export const Item = ({ item }) => {
  return (

    
    <div className="card card-1">
      <Link className="text-link" to={`/item/${item.id}`}> 
      <div className="container-img">
      <img src={item.pictureUrl} alt="imagen"/>
      </div> </Link>
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