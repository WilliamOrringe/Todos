import { Link } from 'react-router-dom';
//import logo from "../assets/arbiter.png";
import React from 'react';

const Footbar = () => {
  return (
    <nav className='bg-[#271650] w-full flex-wrap flex flex-row justify-between items-center relative gap-5'>
      <ul className='text-white text-sm flex items-center mx-auto'>
        <li className='hover:shadow hover:bg-[#2f1b57] rounded-xl p-3'>
          <Link to='/'>Home</Link>
        </li>
        <li className='hover:shadow hover:bg-[#2f1b57] rounded-xl p-3'>
          <Link to='/services'>Services</Link>
        </li>
        <li className='hover:shadow hover:bg-[#2f1b57] rounded-xl p-3'>
          <Link to='/about'>About Us</Link>
        </li>
        <li className='hover:shadow hover:bg-[#2f1b57] rounded-xl p-3'>
          <Link to='/contact'>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Footbar;
