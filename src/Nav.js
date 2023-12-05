import React from 'react'
import './nav.css'
import {useState, useEffect } from 'react'

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      };
    
      window.addEventListener('scroll', handleScroll);
    
      // Cleanup function
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    

  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <h1>REEDZNETFLIX</h1>
        <img className='nav-avatar' src='https://media.tenor.com/sgQ73oidu1wAAAAC/netflix-avatar-smile.gif'/>
    </div>
  )
}

export default Nav
