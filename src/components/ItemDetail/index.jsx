import React, { useState, useContext } from 'react'
import "./itemdetail.css";
import { ItemCount } from "../ItemCount"
import {Link} from 'react-router-dom';
import { CartContext } from "../../context/CartContext";


export default function ItemDetail({ item }) {

    const [count, setCount] = useState(0)
    
    const {addItem} = useContext(CartContext);

    const addHandler = (b)=>{
       const contador = parseInt(b) 
       console.log('se agrego un item', contador)
       addItem(item, contador)
       setCount(contador)
    }

 
    return <>
             
            <div className=" card-detail card-detail-1 d-flex flex-column flex-wrap mb-3 justify-content-center align-items-center">
            
            {count} "items agregados"

            <div className="d-flex flex-column flex-wrap mb-3 justify-content-center align-items-center" >
            <img src={item?.pictureUrl} alt=""/>
            </div>
            <div className="d-flex flex-row flex-wrap mb-3 justify-content-center align-items-center"> 
            <h4>{item?.title}</h4>
            </div>
            <div className="d-flex flex-row flex-wrap mb-3 justify-content-center align-items-center">
            <h6><b>Storyline : </b>{item?.storyline}</h6>
            </div>
            <div className="d-flex flex-row flex-wrap mb-3 justify-content-center align-items-center">
            <h6><b>Tech Specs & Release Details :</b> {item?.specs}</h6>
            </div>
            <div className="d-flex flex-row flex-wrap mb-3 justify-content-center align-items-center">
            <div>Prize : ${item?.price}</div>
            </div>

            { count === 0 ?

            (item?.title && <ItemCount stock={6} initial={1} onAdd={addHandler}/>)
                :
            <Link to='/cart'>
            <button className="btn btn-success">Terminar mi Compra</button>    
            </Link>
            }
           
            </div>
            
  </>;
   
  }