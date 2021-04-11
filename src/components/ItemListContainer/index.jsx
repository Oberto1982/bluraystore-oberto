// import React from "react";
// import Card from "../Card";


// const ListCardContainer = () => {
//   return (
//     <div style={{ display: "flex", justifyContent:"center" }}>
//       <Card title="Casino 4K Blu-ray" 
//             img ="./img/movie01.jpg" 
//             prize="$4.654,64" />

//       <Card
//         title="3 From Hell Blu-ray 4 K Ultra Hd + Blu-ray"
//         img="./img/movie02.jpg"
//         prize="$3.800"
//       />

// <Card
//         title="Godzilla - 4K Ultra HD (Includes Blu-ray)"
//         img="./img/movie03.jpg"
//         prize="$4500"

//       />

      
//     </div>
    
//   );
  
// };


// export default ListCardContainer;

import React, { useEffect, useState } from "react";
import {ItemList} from "../ItemList"
import {useParams} from "react-router-dom";

const datos = [
          { id:1, title:"Casino 4K", price:5000, pictureUrl:"https://images.static-bluray.com/movies/covers/229162_front.jpg?t=1566045882", category: "4K" },
          { id:2, title:"Scarface 4K", price:5500, pictureUrl:"https://images.static-bluray.com/movies/covers/246946_front.jpg?t=1565047226", category: "4K"},
          { id:3, title:"Carlito's Way", price:2500, pictureUrl:"https://images.static-bluray.com/movies/covers/9963_front.jpg?t=1411345107", category: "Bluray" },
          { id:4, title:"News of the World", price:3500, pictureUrl:"https://images.static-bluray.com/movies/covers/283526_front.jpg?t=1614723682", category: "Bluray" },
          { id:5, title:"Tenet 4K", price:7000, pictureUrl:"https://images.static-bluray.com/movies/covers/269861_front.jpg?t=1604957640", category: "4K" },
          { id:6, title:"The Lord of the Rings: The Motion Picture Trilogy 4K", price:15000, pictureUrl:"https://images.static-bluray.com/movies/covers/262477_front.jpg?t=1602424243", category: "4K" },
          { id:7, title:"The Wolf of Wall Street", price:2000, pictureUrl:"https://images.static-bluray.com/movies/covers/75821_front.jpg?t=1396853749", category: "Bluray" },
]


export default function ItemListContainer() {
  const [items, setItems] = useState([])

  const {categoryId}=useParams()


  useEffect(()=>{

    const prom = new Promise((datosOk,error)=>{
      setTimeout(()=>{
        if (categoryId){
          datosOk(datos.filter(e=>e.category === categoryId))
        } else {
          datosOk(datos)
        }
      },2000)
    })

    prom.then((datos)=>{
      setItems(datos)
    })

  })

  return (
    <div className="d-flex flex-column flex-wrap mb-3 justify-content-center align-items-center" >
      <h3>Peliculas {categoryId}</h3>
      <ItemList items={items}/>
    </div>
  );
}