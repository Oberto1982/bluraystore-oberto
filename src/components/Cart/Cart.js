import React, {useContext, useState} from 'react'
import {Link} from "react-router-dom";
import {CartContext} from "../../context/CartContext";
import {getFirestore} from '../../firebase'
import firebase from 'firebase/app'
import 'firebase/firestore'
import "./Cart.css";
import { format } from "../Format/format";



export const Cart = () => {

    const [name,setName] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')

    const [idOrden, setIdOrden ] = useState(null)

    const {cart,removeItem,totalItems,totalPrecio,clear} = useContext(CartContext)

    const generarOrden = (e) =>{

        e.preventDefault();
        const comprador = { name, phone, email }

        console.log(comprador)

        const db = getFirestore();

        const ordersCollection = db.collection("orders")

        const date = firebase.firestore.Timestamp.fromDate(new Date());

        const items = cart.map( cartItem =>{
            return { id: cartItem.item.id, title:cartItem.item.title, price: cartItem.item.price}
        })

        console.log(items)


        ordersCollection
        .add({buyer: comprador, items, date, total:totalPrecio})
        .then(doc=>{
            setIdOrden(doc.id)
        })
        
        //STOCK
        
        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cart.map(i=> i.item.id) // in: obtengo conjunto de items por id.
        )

        const batch = db.batch();


        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref,{
                    stock: docSnapshot.data().stock - cart.find(item => item.item.id === docSnapshot.id).quantity
                })
            })

            batch.commit().then(res =>{
                console.log('resultado batch:', res)
            })
        })

        console.log(generarOrden)
    }
        

    const noItemComp = 
    <div className="main">
    
     <img className="img-empty" src="/img/empty.png" alt=""></img>
       
         <Link to='/' className="back" >Volver al Home </Link>
         </div>
    
    if(totalItems === 0) return noItemComp

        

    return (
        <div className="main">
        <div className="orden">    
            {idOrden? `Su Nro de Pedido es: ${idOrden}`: null}
        </div>    
        <div className="main-item">   
            {cart.map(cartItem => (
                <div className="main-btn" key={cartItem.item.id} >
                    <div> 
                        <img src={cartItem.item.pictureUrl} alt=""/>
                    </div>
                    <div className="main-title"> 
                        {cartItem.item.title} 
                    </div>
                    <div className="main-title"> 
                        Cantidad: {cartItem.quantity} 
                    </div>
                    
                    <div> 
                    <img className="img-icon" src="/img/delete.svg" alt=""  onClick={()=> removeItem(cartItem.item.id)}/>
                    </div>

                </div>)
                )}
            <div className="main-btn">  
                <p>Total Compra: {format(totalPrecio)}</p>
            </div>
           
            <div className="main-btn"> 
                <button className="btn-delete-all" onClick={clear}>Limpiar Carrito</button>
            </div>
            </div> 
            <div className="form-title">
            Formulario de Compra
            </div>     
            <form className="main-btn form-container" action=""  onSubmit={generarOrden}>
                <div className="form">
                <label for="fname">Nombre y Apellido:</label>
                <input className="input" type="text" placeholder="Nombre y Apellido" required value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="form">
                <label for="fname">Teléfono:</label>
                <input className="input" type="number" placeholder="Telefono" required value={phone}  onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <div className="form">
                <label for="fname">Correo Electrónico:</label>
                <input className="input" type="email" placeholder="Correo Electronico" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div> 
                <div className="btn-orden container p-3">
                <button className="btn-cart" type="submit"> Confirmar</button>
                </div>
            </form>
        

        </div>
    )
}
