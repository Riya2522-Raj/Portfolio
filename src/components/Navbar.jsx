import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";
import './Navbar.css';

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          About
        </NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact Us
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
