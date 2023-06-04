import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const Popular = () => {
  return (
    <>
    <div className='popular'>
     
     <Carousel>
        <div>
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <p className="legend">Legend 3</p>
        </div>
    </Carousel>


</div>
    </>
  )
}

export default Popular
