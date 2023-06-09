import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homeMovie} from '../store/slices/movieSlice'
import Card from './Card'

const Popular = () => {
    const popularMovieData=useSelector((state)=>state.movie.homeData.slice(0,18))
    console.log("the popular movie api object", popularMovieData)
  
  return (
    <>
    <div className='popular'>
      <h3>Popular Movie List</h3>
      <div className='childPopular'>

   {
     
     popularMovieData.map((elem)=>(
       <Card cardData={elem} key={elem.id} />
       
       ))
       
      }

      </ div>
    </div>

    </>
  )
}

export default Popular;
