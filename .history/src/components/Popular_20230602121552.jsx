import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { useDispatch, useSelector } from 'react-redux'
import { popularMovie } from '../store/slices/movieSlice'

const Popular = () => {
    const dispatch=useDispatch()

    const popularMovieApi=useSelector((state)=>state.movie.popularData)
console.log("the actual pop:", popularMovieApi.results)

  return (
    <>
    <div className='popular'>
     
     <Carousel>
        {
      
        }
    </Carousel>
    <div className='fetch'>
        <button onClick={()=>dispatch(popularMovie())}>Fetch Data popular movie</button>
    </div>

</div>
    </>
  )
}

export default Popular
