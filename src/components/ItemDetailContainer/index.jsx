import React, {useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail'


const getItems = () => { 
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve({
           
            title:"Casino 4K Bluray",
            price: 5000,
            description: "In early-1970s Las Vegas, low-level mobster Sam “Ace” Rothstein gets tapped by his bosses to head the Tangiers Casino. At first, he’s a great success in the job, but over the years, problems with his loose-cannon enforcer Nicky Santoro, his ex-hustler wife Ginger, her con-artist ex Lester Diamond and a handful of corrupt politicians put Sam in ever-increasing danger. ",
            img:"https://images.static-bluray.com/movies/covers/229162_front.jpg?t=1566045882",
            specs:"4K/Blu-ray/Digital Video Resolution/Codec: 2160p/HEVC H.265 Length:179 Release Country:United States Aspect Ratio(s):2.35:1 Audio Formats: English DTS:X, Brazilian Portuguese DTS Digital Surround 5.1, French Canadian DTS Digital Surround 5.1, Japanese DTS Digital Surround 5.1, Latin Spanish DTS Digital Surround 5.1 Subtitles/Captions:English SDH, Brazilian Portuguese, French Canadian, Japanese, and Latin Spanish" 
          
        })},2000)
    })
}

export default function ItemDetailContainer() {
    const [item, setItem] = useState(null)
    useEffect(() => {
        getItems().then((res)=> setItem(res))
        return;
    }, [])

  
     return <ItemDetail item={item} />
    }