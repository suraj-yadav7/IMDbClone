import React from 'react'
import {AiOutlineFacebook} from "react-icons/ai"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer'>
          <div className='btnFt'>
            <button>singup for more access</button>
            <ul>
              <li><AiOutlineFacebook/></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className='impLink'>
            <ul>
              <li>Get the IMDb App</li>
              <li>Help</li>
              <li>Site Index</li>
              <li>IMDbPro</li>
              <li>Box Office Mojo</li>
            </ul>
          </div>
          <div className='copyright'><p>© 1990-2023 by IMDb.com, Inc.</p></div>
        </div>
      </footer>
    </>
  )
}

export default Footer
