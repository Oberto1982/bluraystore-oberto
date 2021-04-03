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
       Home
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

      <a href="https://web.whatsapp.com/send?phone=55229999999" class="float"  tooltip="Hola, te puedo ayudar?">
      <i class="fab fa-whatsapp"></i>
      </a>


    
    </div>

    </BrowserRouter>
  );
}

export default App;
