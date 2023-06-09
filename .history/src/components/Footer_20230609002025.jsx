import React from 'react'
import {AiOutlineFacebook,AiFillYoutube} from "react-icons/ai"
import {BsInstagram,BsTwitter} from "react-icons/bs"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='footer'>
          <div className='btnFt'>
            <button>singup for more access</button>
            <ul>
              <li><AiOutlineFacebook/></li>
              <li><BsInstagram/></li>
              <li><BsTwitter /></li>
              <li><AiFillYoutube /></li>
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
