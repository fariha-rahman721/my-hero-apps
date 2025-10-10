import { Github } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {

    const links = <>
    <Link to='/'><li className='m-3 text-[15px] font-semibold hover:text-purple-600 hover:font-bold hover:underline'>Home</li></Link>
     
      <Link to='/apps'><li className='m-3 text-[15px] font-semibold hover:text-purple-600 hover:font-bold hover:underline'>Apps</li></Link>
      <Link to='/installation'><li className='m-3 text-[15px] font-semibold hover:text-purple-600 hover:font-bold hover:underline'>Installation</li></Link>
    
    </>
    return (
        <div className="navbar bg-white w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
            links
        }
      </ul>
    </div>
    <img className='w-9 h-9 mr-0' src="/logo.png" alt="" />
    <a className="btn btn-ghost text-xl text-purple-600 font-bold">HERO.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/fariha-rahman721' target='_blank' rel='noopener noreferrer' className="btn bg-gradient-to-r from-purple-600 to-purple-500 text-white font-bold"><Github />Contribute</a>
  </div>
</div>
    );
};

export default Navbar;