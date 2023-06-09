import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homeMovie } from '../store/slices/movieSlice'
import Card from './Card'

const Home = () => {
  const dispatch = useDispatch()
  const movieData = useSelector((state)=>state.movie.homeData)
  const arrMovieResult = movieData.results
  // console.log("the homeData in components", movieData)
  


  return (
    <>
        <div className='home'>
        <Carousel  showThumbs={false} showStatus={false} autoPlay={true}
         infiniteLoop={true} transitionTime={3}>
            
     
        {
            arrMovieResult?.map((elem)=>(
                <div key={elem.id}>
                    <img src={`http://image.tmdb.org/t/p/original/${elem && elem.backdrop_path}`} />
                </div>
            ))
        }
    
        </Carousel>
    </div>

      <div className='home'>
        <button onClick={()=>dispatch(homeMovie())}>Fetch Home data</button>
        {
          movieData?.map((elem)=>(
              <Card cardData={elem} key={elem.id}/>
          ))

        }
      </div>
    </>
  )
}

export default Home
