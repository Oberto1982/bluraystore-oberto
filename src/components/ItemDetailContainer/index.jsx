import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail'

import {useParams} from "react-router-dom";
import {getFirestore} from '../../firebase';

// const datos = [
//     { id:1, title:"Casino 4K", price:5000, pictureUrl:"https://images.static-bluray.com/movies/covers/229162_front.jpg?t=1566045882", category: "4K" },
//     { id:2, title:"Scarface 4K", price:5500, pictureUrl:"https://images.static-bluray.com/movies/covers/246946_front.jpg?t=1565047226", category: "4K"},
//     { id:3, title:"Carlito's Way", price:2500, pictureUrl:"https://images.static-bluray.com/movies/covers/9963_front.jpg?t=1411345107", category: "Bluray" },
//     { id:4, title:"News of the World", price:3500, pictureUrl:"https://images.static-bluray.com/movies/covers/283526_front.jpg?t=1614723682", category: "Bluray" },
//     { id:5, title:"Tenet 4K", price:7000, pictureUrl:"https://images.static-bluray.com/movies/covers/269861_front.jpg?t=1604957640", category: "4K" },
//     { id:6, title:"The Lord of the Rings: The Motion Picture Trilogy 4K", price:15000, pictureUrl:"https://images.static-bluray.com/movies/covers/262477_front.jpg?t=1602424243", category: "4K" },
//     { id:7, title:"The Wolf of Wall Street", price:2000, pictureUrl:"https://images.static-bluray.com/movies/covers/75821_front.jpg?t=1396853749", category: "Bluray" },
// ]

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
    {itemId} es el Id de la pelicula </div>
    <ItemDetail item={item} /></>
    }