import React from "react";
import "./navbar.css";
import { sitelogo } from "assets";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, BiLogIn } from "assets";

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
              <AiOutlineHome /> <span>Home</span>
            </NavLink>
          </li>
          <li className='list-inline'>
            <NavLink className='menu-link' to='login'>
              <BiLogIn />
              <span> Login</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
