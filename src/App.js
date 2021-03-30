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



function App() {
  return (

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
        <Route path='*' >
         404
        </Route>
      </Switch> 
      
    
{/* WhatsApp icon */}
<a
        href="https://wa.me/1130237550  "
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fab fa-whatsapp"></i>
      </a>
    
    </div>

    </BrowserRouter>
  );
}

export default App;
