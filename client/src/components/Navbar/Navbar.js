import React from 'react'
import './navbar.css'
import { useState } from 'react'
import {  Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer';

import img from '../img/emblem-Blink-182.jpg'

const MobileMenu = () => {
  return (
    <div className={'mobile-menu'}>
      <a href="#music">MUSIC</a>
      <a href="#member">MEMBERS</a>
      <a href="#form">FORM</a> 
    </div>
  );
};

function Navbar() {
  const [isShown, setIsShown] = useState(false);
  const toggleMobileMenu = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      <div className='topnav'>
        <a href='#home'>

        <img className="logo" alt="" href="#home" src={img}/>
        </a>
        <div className='menu'>
          <a href="#music">MUSIC</a>
          <a href="#member">MEMBERS</a>
          <a href="#form">FORM</a>          
        </div>
        {!isShown && (
          <button className='show-mobile-menu-button' onClick={toggleMobileMenu}>
          &#8801;
          </button>
        )}
      </div>
      {isShown && <MobileMenu />}
      {isShown && (
        <button className='close-mobile-menu-button' onClick={toggleMobileMenu}>
          &#8801;
        </button>
      )}
    <Outlet/>
      <Footer/>
    </>
  );
}

export default Navbar