import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail'

import {useParams} from "react-router-dom";
import {getFirestore} from '../../firebase';


// conexion a firebase
const getItems = (id) => { 
  
    const db = getFirestore();
    const itemsCollection = db.collection('items')
    
    const item  = itemsCollection.doc(id)
    return item.get();

}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    const {itemId} = useParams()    

    useEffect(() => {
        getItems(itemId)
           .then((res)=> {
               console.log ( 'existe?', res.exists);

               if (res.exists){

                setItem({id:res.id, ...res.data()}) // si existe me quedo con la data del objeto
               }
           })

        return;
    }, [itemId])

    return <> 
    <div className="d-flex justify-content-center ">
    El Id de la pelicula es:  {itemId}</div>
    <ItemDetail item={item} /></>
    }