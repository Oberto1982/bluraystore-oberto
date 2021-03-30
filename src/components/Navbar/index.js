// import React, {Component} from 'react';
// import {MenuItems} from "./MenuItems"
// import './Navbar.css'
// import CartWidget from "../Cardwidget";

// import { Link } from 'react-router-dom';



// class Navbar extends Component{
//     state =  { clicked: false}  

//     handleClick = () =>{
//         this.setState({clicked: !this.state.clicked})
//     }

//     render(){
//         return(
//             <nav className="NavbarItems">
//                 <h1><Link to='/' className="navbar-logo">Mi Tienda</Link></h1>
//                 <div className="menu-icon" onClick={this.handleClick}>
//                 <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
//                 </div>
//                 <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
//                     {MenuItems.map((item, index)=> {
//                         return (
//                         <li key={index}>
//                             <a className={item.cName} href={item.url}>
//                             {item.title}
//                             </a>
//                         </li>  
                        
//                         )
//                     })}
              
//                 </ul>
//                 <CartWidget /> 
//             </nav>
//         )
//     }
// }

// export default Navbar

import React from "react";
import CartWidget from "../Cardwidget";

import {Link, NavLink} from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to='/' className="navbar-brand" >
        Mi Tienda
      </Link>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink exact to='/' activeClassName="active" className="nav-item nav-link" >
            Home
          </NavLink>
          <NavLink to={`/category/4k`} activeClassName="active" className="nav-item nav-link" >
            4k UHD
          </NavLink>
          <NavLink to={`/category/Bluray`} activeClassName="active" className="nav-item nav-link" >
            Bluray-3D
          </NavLink>
        </div>
     
      </div>

      <CartWidget />

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  );
};
