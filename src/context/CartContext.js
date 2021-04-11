import React ,{ useState } from "react";

export const CartContext = React.createContext([])


export const CartProvider = ({children})=>{

    const [cart,setCart] = useState([])

    const addItem = (newItem, newQuantity)=>{

 
        const {item = null, quantity = 0} = cart.find(e=> e.item.id === newItem.id) || {}
        

        const newCart = cart.filter(e => e.item.id !== newItem.id)

        setCart([...newCart, 
                { item: newItem , quantity: quantity + newQuantity  }])
    } 


    const removeItem = (itemId) =>{
        const newCart = cart.filter(e => e.item.id !== itemId)
        setCart(newCart)
    }
    
    const clear = ()=>{
        setCart([])
    }
    
    const isInCart = (id) =>{
        const currentItem = cart.find(e=> e.item.id === id)

        return currentItem ? true : false
    } 



    return <CartContext.Provider value={{cart,addItem,removeItem,clear,isInCart}} >{children}</CartContext.Provider>
}