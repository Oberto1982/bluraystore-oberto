import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail'

import {useParams} from "react-router-dom";


const getItems = (id) => { 
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve({
           
            title:"Pelicula",
            price: 0,
            description: "ID:" + id ,
            img:"",
            specs:"" 
          
        })},2000)
    })
}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)

    const {itemId} = useParams()    

    useEffect(() => {
        getItems(itemId).then((res)=> setItem(res))
        return;
    }, [itemId])

    return <> 
    <div className="d-flex justify-content-center ">
    {itemId} es el Id de la pelicula </div>
    <ItemDetail item={item} /></>
    }