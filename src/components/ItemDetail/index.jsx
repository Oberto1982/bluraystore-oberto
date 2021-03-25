import React from 'react'
import "./itemdetail.css";

export default function ItemDetail({ item }) {
 
    return <>
            <div className=" card-detail card-detail-1 d-flex flex-column flex-wrap mb-3 justify-content-center align-items-center">
           
            <div className="d-flex flex-column flex-wrap mb-3 justify-content-center align-items-center" >
            <img src={item?.img} alt=""/>
            </div>
            <div className="d-flex flex-row flex-wrap mb-3 justify-content-center align-items-center"> 
            <h4>{item?.title}</h4>
            </div>
            <div className="d-flex flex-row flex-wrap mb-3 justify-content-center align-items-center">
            <h6><b>Overview : </b>{item?.description}</h6>
            </div>
            <div className="d-flex flex-row flex-wrap mb-3 justify-content-center align-items-center">
            <h6><b>Specifications :</b> {item?.specs}</h6>
            </div>
            <div className="d-flex flex-row flex-wrap mb-3 justify-content-center align-items-center">
            <div>Prize : ${item?.price}</div>
            </div>
           
            </div>
            
  </>;
   
  }