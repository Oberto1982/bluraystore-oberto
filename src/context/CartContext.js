import React ,{ useState, useEffect } from "react";

export const CartContext = React.createContext([])


export const CartProvider = ({children})=>{

    const [cart,setCart] = useState([])
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrecio, setTotalPrecio] = useState(0);

    useEffect(() => {

        let precio = cart.reduce((acumulador, itemActual) =>{
         
            const p = itemActual.quantity * itemActual.item.price
            return acumulador + p
        },0); // acumulador es 0 en primera instancia (cero)


        let totItems = cart.reduce((acumulador, itemActual)=>{
            
            return acumulador + itemActual.quantity
        },0);

        
    //    for (let cartItem of cart) {
    //         totItems += cartItem.quantity;
    //         precio += cartItem.quantity * cartItem.item.price; 

    // }  FOR opcion alternativa al reduce, tiene mejor perfomance que el reduce.
    
    setTotalItems(totItems);
    setTotalPrecio(precio);
        
    }, [cart]) //agrego como dependencia el cart, para que recalcule cada vez que se ejecuta el useEffect.




   

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



    return <CartContext.Provider value={{cart,addItem,removeItem,clear,isInCart, totalItems, totalPrecio}} >{children}</CartContext.Provider>
}