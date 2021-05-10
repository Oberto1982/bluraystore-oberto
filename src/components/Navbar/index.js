import React from "react";
import CartWidget from "../Cardwidget";
import {Link, NavLink} from 'react-router-dom'
import "./index.css";



export const NavBar = () => {
  return (
<nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
  <Link to='/' className="navbar-brand" >
       BD STORE
      </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item link6">
        <NavLink exact to={`/`} activeClassName="active" className="nav-item nav-link site-nav__link" >
           Home 
          </NavLink>
        </li>
        <li class="nav-item">
        <NavLink to={`/category/4K`} activeClassName="active" className="nav-item nav-link site-nav__link" >
            4k UHD
          </NavLink>
        </li>
        <li class="nav-item">
        <NavLink to={`/category/Bluray`} activeClassName="active" className="nav-item nav-link site-nav__link" >
            Bluray-3D 
          </NavLink>
        </li>
        <li class="nav-item">
        <NavLink to= "/cart" activeClassName="active" className="nav-item nav-link" > 
        <CartWidget />
        </NavLink> 
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

