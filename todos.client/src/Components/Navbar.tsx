import { Link } from 'react-router-dom';
//import logo from "../assets/arbiter.png";
import React from 'react';
import hamburger from '../assets/Hamburger_icon.svg';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const hoverEffect =
    'hover:shadow hover:bg-[#2f1b57] rounded-xl p-3';
  return (
    <nav className='flex justify-between items-center bg-[#271650] p-5'>
      {/*<img src={logo} alt="Logo" />*/}
      <h1 className='text-white text-3xl pl-5'>
        {' '}
        Movie Lists
      </h1>

      <div className='sm:hidden flex w-full justify-end'>
        <img
          src={hamburger}
          alt='Menu'
          className='w-8 cursor-pointer '
          onClick={() => setOpen(!open)}
        />
      </div>
      {open && (
        <ul className='sm:hidden flex flex-col gap-1 text-white text-l ml-auto mr-5'>
          <li className={hoverEffect}>
            <Link to='/'>Home</Link>
          </li>
          <li className={hoverEffect}>
            <Link to='/services'>Services</Link>
          </li>
          <li className={hoverEffect}>
            <Link to='/about'>About Us</Link>
          </li>
          <li className={hoverEffect}>
            <Link to='/contact'>Contact Us</Link>
          </li>
        </ul>
      )}
      <ul className='hidden sm:flex gap-1 text-white text-l ml-auto mr-5'>
        <li className={hoverEffect}>
          <Link to='/'>Home</Link>
        </li>
        <li className={hoverEffect}>
          <Link to='/services'>Services</Link>
        </li>
        <li className={hoverEffect}>
          <Link to='/about'>About Us</Link>
        </li>
        <li className={hoverEffect}>
          <Link to='/contact'>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
