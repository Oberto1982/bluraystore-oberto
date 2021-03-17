import React from "react";
import Card from "../../components/Card";


const ListCardContainer = () => {
  return (
    <div style={{ display: "flex", justifyContent:"center" }}>
      <Card title="Casino 4K Blu-ray" 
            img ="./img/movie01.jpg" 
            prize="$4.654,64" />

      <Card
        title="3 From Hell Blu-ray 4 K Ultra Hd + Blu-ray"
        img="./img/movie02.jpg"
        prize="$3.800"
      />

<Card
        title="Godzilla - 4K Ultra HD (Includes Blu-ray)"
        img="./img/movie03.jpg"
        prize="$4500"

      />

      
    </div>
    
  );
  
};


export default ListCardContainer;