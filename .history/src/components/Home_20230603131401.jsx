import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { homeMovie } from '../store/slices/movieSlice'

const Home = () => {


  useEffect(()=>{
    dispatch(homeMovie())
  },[])

  const dispatch = useDispatch()
  const movieData = useSelector((state)=>state.movie.homeData)
  console.log("the homeData in components", movieData)
  return (
    <>
      <div className='home'>

      </div>
    </>
  )
}

export default Home
