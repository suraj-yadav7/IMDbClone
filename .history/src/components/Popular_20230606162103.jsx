import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { popularMovie } from '../store/slices/movieSlice'

const Popular = () => {
    const dispatch=useDispatch()

    const popularMovieApi=useSelector((state)=>state.movie.popularData)
    console.log("the popular movie api object", popularMovieApi)
    const arrMovieResult=popularMovieApi.results

  return (
    <>

    
    <div className='fetch'>
        <button onClick={()=>dispatch(popularMovie())}>Fetch Data popular movie</button>
    </div>

    </>
  )
}

export default Popular;
