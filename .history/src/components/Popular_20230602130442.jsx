import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch, useSelector } from 'react-redux'
import { popularMovie } from '../store/slices/movieSlice'

const Popular = () => {
    const dispatch=useDispatch()

    const popularMovieApi=useSelector((state)=>state.movie.popularData)
    // console.log("the popular movie api object", popularMovieApi)
    const arrMovieResult=popularMovieApi.results

  return (
    <>
    <div className='popular'>
        <Carousel  showThumbs={false} showStatus={false} autoPlay={true}
         infiniteLoop={true}>
            
     
        {
            arrMovieResult?.map((elem)=>(
                <div key={elem.id}>
                    <img src={`http://image.tmdb.org/t/p/original/${elem && elem.backdrop_path}`} />
                </div>
            ))
        }
    
        </Carousel>
    </div>
    
    <div className='fetch'>
        <button onClick={()=>dispatch(popularMovie())}>Fetch Data popular movie</button>
    </div>

    </>
  )
}

export default Popular;
