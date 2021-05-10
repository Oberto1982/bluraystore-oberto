import React, { useEffect, useState } from "react";
import {ItemList} from "../ItemList"
import {useParams} from "react-router-dom";
import {getFirestore} from '../../firebase';
import "./itemListContainer.css";


export default function ItemListContainer() {
  const [items, setItems] = useState([])

  const {categoryId}=useParams()


  useEffect(()=>{

    const db = getFirestore();
    const itemsCollection = db.collection('items')

    let filtro 
    if (categoryId){
      filtro = itemsCollection // filtro por categoria
          .where ('category', '==', categoryId)
    }
    else {
      filtro = itemsCollection;
    }
    
    
    const prom = filtro.get();
    


    prom.then((snapshot)=>{

      if (snapshot.size > 0 ){
        
        setItems(snapshot.docs.map(doc => {
          return {id:doc.id,  ...doc.data()}
        }

        ))

      }

      
    })

  },[categoryId])

  return (
    <div className="d-flex flex-column flex-wrap mb-3 justify-content-center align-items-center" >
      <h3 className="container-main">Peliculas {categoryId}</h3>
      <ItemList items={items}/>
    </div>
  );
}