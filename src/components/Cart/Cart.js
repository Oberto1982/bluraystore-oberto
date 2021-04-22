import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import {CartContext} from "../../context/CartContext";
import firebase from 'firebase/app'
import 'firebase/firestore'
import {getFirestore} from '../../firebase'


export const Cart = () => {

    const {cart,removeItem,totalItems,totalPrecio,clear} = useContext(CartContext)

    const generarOrden = () =>{
        const db = getFirestore();

        const ordersCol = db.collection('orders');

        let orden = {} //creo la orden
        orden.date = firebase.firestore.Timestamp.fromDate(new Date());

        orden.buyer = { name:'Diego', phone:'1115268900', email:'obertodiego1982@gamail.com' } 
        orden.total = totalPrecio;
        orden.items = cart.map(cartItem => {
            const id = cartItem.item.id;
            const title = cartItem.item.title;
            const price = cartItem.item.price * cartItem.quantity;

            return {id, title, price}   
        })


        ordersCol.add(orden)
        .then((IdDocumento)=>{
            console.log(IdDocumento.id)
        })
        .catch( err => {
            console.log(err);
        })
        .finally(()=>{
            console.log(orden.buyer) 
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

        console.log(orden)
    }
    


    return (
        <div className="container">
            {
            !cart.length ?   
            <h2>No hay items en el carrito <Link to='/'> Ir al home</Link> </h2>
            : (<>
                {cart.map(cartItem => <div key={cartItem.item.id}> 
                     <div>Titulo: {cartItem.item.title}</div> 
                     <div>Cantidad: {cartItem.quantity}</div>
                     <button className="btn btn-danger" onClick={()=> removeItem(cartItem.item.id)}>Borrar</button>
                </div>)}

                <div>Total: {totalItems} y {totalPrecio} </div>
                <button className="btn btn-warning" onClick={clear}>Eliminar todo</button>
                <button className="btn btn-success" onClick={generarOrden}>Finalizar Compra</button>   
                </>

            )
            }
             
           
        </div>
    )
}
