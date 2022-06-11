import React from "react";
import "./navbar.css";
import { sitelogo } from "assets";
import { NavLink } from "react-router-dom";
import { useAuth } from "context";
import { AiOutlineHome, BiLogIn, BiLogOut } from "assets";

export function Navbar() {
  const { logout, user } = useAuth();
  return (
    <>
      <nav className='navbar flex-row'>
        <NavLink className='navbar-brand' to='/'>
          <img
            className='navbar-logo'
            src={sitelogo}
            alt='site logo'
            loading='lazy'
          />
        </NavLink>

        <ul className='navbar-menu list-unstyled flex-row'>
          <li className='list-inline'>
            <NavLink className='menu-link' to='/'>
              <AiOutlineHome /> <span>Home</span>
            </NavLink>
          </li>
          <li className='list-inline'>
            {user ? (
              <NavLink className='menu-link' to='/' onClick={logout}>
                <BiLogOut />
                <span> Logout</span>
              </NavLink>
            ) : (
              <NavLink className='menu-link' to='login'>
                <BiLogIn />
                <span> Login</span>
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}
