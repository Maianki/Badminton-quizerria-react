import React from "react";
import "./navbar.css";
import { sitelogo } from "assets";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <>
      <nav className='navbar flex-row'>
        <NavLink className='navbar-brand' to='home'>
          <img
            className='navbar-logo'
            src={sitelogo}
            alt='site logo'
            loading='lazy'
          />
        </NavLink>

        <ul className='navbar-menu list-unstyled flex-row'>
          <li className='list-inline'>
            <NavLink className='menu-link' to='home'>
              <i className='fas fa-home'></i> Home
            </NavLink>
          </li>
          <li className='list-inline'>
            <NavLink className=' menu-link' to='login'>
              <i className='fas fa-sign-in-alt'></i> Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
