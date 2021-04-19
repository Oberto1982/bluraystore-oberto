import React, {useContext} from 'react'
import {Link} from "react-router-dom";
import {CartContext} from "../../context/CartContext";



export const Cart = () => {

    const {cart,removeItem,totalItems,totalPrecio,clear} = useContext(CartContext)

    return (
        <div>
            {
            !cart.length ?   
            <h2>No hay items en el carrito <Link to='/'> Ir al home</Link> </h2>
            : (<>
                {cart.map(cartItem => <div key={cartItem.item.id}> 
                     <div>Titulo: {cartItem.item.title}</div> 
                     <div>Cantidad: {cartItem.quantity}</div>
                     <button onClick={()=> removeItem(cartItem.item.id)}>Borrar</button>
                </div>)}

                <div>Total: {totalItems} y {totalPrecio} </div>
                <button onClick={clear}>Eliminar todo</button>
                </>

            )
            }
             
           
        </div>
    )
}
