import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homeMovie} from '../store/slices/movieSlice'
import Card from './Card'

const Popular = () => {
    const popularMovieData=useSelector((state)=>state.movie.homeData)
    console.log("the popular movie api object", popularMovieData)
  
  return (
    <>
    <div className='popular'>
   {

    popularMovieData.map((elem)=>(
      <Card cardData={elem} key={elem.id} />
      
    ))

   }
    </div>

    </>
  )
}

export default Popular;
