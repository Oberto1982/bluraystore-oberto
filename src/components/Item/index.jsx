import React from 'react';
//import Counter from '../ItemCount';
import "./item.css";
import { format } from "../Format/format";

import {Link} from "react-router-dom";

export const Item = ({ item, onAdd }) => {
  return (

    
    <div className="card card-1">
      <Link className="text-link" to={`/item/${item.id}`}> 
      <div className="container-img">
      <img src={item.pictureUrl} alt="imagen"/>
      </div> </Link>
      <div className="container p-2">
        <h5>{item.title}</h5> 
        <div><h6 className="mt-4"> {format (item.price)}</h6></div>
      </div>
      <div className="sub-main">
    </div>
     {/* <Counter /> */}
    </div>

   
  );
};