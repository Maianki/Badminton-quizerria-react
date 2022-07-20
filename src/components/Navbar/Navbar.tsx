import "./navbar.css";
import { sitelogo } from "assets";
import { NavLink } from "react-router-dom";
import { useAuth } from "context";
import { AiOutlineHome, BiLogIn, BiLogOut } from "assets";

export function Navbar() {
<<<<<<< HEAD:src/components/Navbar/Navbar.tsx

  const { logout, user } = useAuth();
  
=======
  const { logout, user } = useAuth();
>>>>>>> b6db13e (Temp dev (#7)):src/components/Navbar/Navbar.jsx
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
<<<<<<< HEAD:src/components/Navbar/Navbar.tsx
            {user.id ? (
=======
            {user ? (
>>>>>>> b6db13e (Temp dev (#7)):src/components/Navbar/Navbar.jsx
              <NavLink className='menu-link' to='/' onClick={logout}>
                <BiLogOut />
                <span> Logout</span>
              </NavLink>
            ) : (
<<<<<<< HEAD:src/components/Navbar/Navbar.tsx
              <NavLink className='menu-link' to='/login'>
=======
              <NavLink className='menu-link' to='login'>
>>>>>>> b6db13e (Temp dev (#7)):src/components/Navbar/Navbar.jsx
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
