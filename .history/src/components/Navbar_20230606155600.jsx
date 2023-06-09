import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/navfoot.scss"

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='navbar'>
          <ul>
            <li>Home</li>
           <Link to="/popular"><li>Popular</li></Link> 
            <li>Top Rated</li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
