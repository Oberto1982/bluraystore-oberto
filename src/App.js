//import React from 'react';
// import Navbar from "./components/Navbar/Navbar";
// import './App.css';
// import ItemListContainer from "./components/ItemListContainer";
// import ItemDetailContainer from "./components/ItemDetailContainer";
// import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import { NavBar } from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider} from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";


function App() {
  return (
    
    <CartProvider>
    <BrowserRouter >
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
        <ItemListContainer />
        </Route>
        <Route path='/category/:categoryId'>  
        <ItemListContainer />
        </Route>   
        <Route path='/item/:itemId'>
        <ItemDetailContainer /> 
        </Route>

        <Route path="/cart">
        {/* <h2>Estoy en el cart</h2> */}
          <Cart />
        </Route>

      </Switch> 

      <a href="https://web.whatsapp.com/send?phone=55229999999" className="float"  tooltip="Hola, te puedo ayudar?">
      <i className="fab fa-whatsapp"></i>
      </a>
    </div>

    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
