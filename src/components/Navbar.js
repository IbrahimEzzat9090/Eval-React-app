import { NavLink } from "react-router-dom";
import React from "react";

export const Navbar = () => {
  
  return (
    <nav className='PrimaryNav'>
        <div className="app-name">Eval App</div>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        
        
    </nav>
  )
}
