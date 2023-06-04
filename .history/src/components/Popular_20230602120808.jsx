import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { popularMovie } from '../store/slices/movieSlice'

const Popular = () => {
    const dispatch=useDispatch()

    const popularMovieApi=useSelector((state)=>state.movie.popularData)
console.log("the actual pop:", popularMovieApi)

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
    <div className='fetch'>
        <button onClick={()=>dispatch(popularMovie())}>Fetch Data popular movie</button>
    </div>

</div>
    </>
  )
}

export default Popular
