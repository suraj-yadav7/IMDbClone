import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/navfoot.scss"

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='navbar'>
          <ul>
           <Link to="/"> <li>Home</li> </Link> 
           <Link to="/popular"><li>Popular</li></Link> 
           <Link to="/toprated" > <li>Top Rated</li> </Link>
           <Link to="/upcoming" > <li>Upcoming</li> </Link>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
