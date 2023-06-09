import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { homeMovie,topRatedMovie, upcomingMovie } from '../store/slices/movieSlice'
import Card from './Card'
import "../styles/home.scss"

const Home = () => {
  const dispatch = useDispatch()
  const movieDataList = useSelector((state) => state.movie.homeData)
  const topRatedDataList = useSelector((state) => state.movie.topRatedData)
  console.log("the top rated home comp", topRatedDataList)
  const topRatedData = topRatedDataList.slice(0,6)
  const movieData = movieDataList.slice(0, 6)

  const upcomingMovieList = useSelector((state)=>state.movie.upcomingData)
  const upcomingData = upcomingMovieList.slice(0,6)

  return (
    <>
      <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {
            movieData.map(movie => (
              <Link to={`/details/${movie.id}`} >
                <div className="posterImage">
                  <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                </div>
                <div className="posterImage__overlay">
                  <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                  <div className="posterImage__runtime">
                    {movie ? movie.release_date : ""}
                    <span className="posterImage__rating">
                      {movie ? movie.vote_average : ""}
                      <i className="fas fa-star" />{" "}
                    </span>
                  </div>
                  <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                </div>
              </Link>
            ))
          }
        </Carousel>
        {/* popular movie list */}
        <div className='popularMovie'>
          <h3>Popular Movie </h3>
          <p>This week's top movies</p>
          <div className='popularMovieList'>
            {
              movieData?.map((elem) => (
                <Card cardData={elem} key={elem.id} />
              ))

            }
          </div>
          <div className='home'>
            <button onClick={() => dispatch(homeMovie())}>Fetch Home data</button>
          </div>
        </div>

        {/* Top rate movie list */}
        <div className='topRatedMovie'>
          <h3>Top Rated Movie </h3>
          <p>All time top rated movies</p>
          <div className='topRatedMovieList'>
            {
              topRatedData?.map((elem) => (
                <Card cardData={elem} key={elem.id} />
              ))

            }
          </div>
          <div className='home'>
            <button onClick={() => dispatch(topRatedMovie())}>Fetch TopRated</button>
          </div>
        </div>
      </div>

      {/* Upcoming movie list */}
      <div className='upcomingMovie'>
          <h3>Upcoming Movie </h3>
          <p>The Upcoming movies List</p>
          <div className='upcomingMovieList'>
            {
              upcomingData?.map((elem) => (
                <Card cardData={elem} key={elem.id} />
              ))

            }
            </div>
            <div className='home'>
              <button onClick={() => dispatch(upcomingMovie())}>Upcoming Movie</button>
            </div>
        </div>


    </>
  )
}

export default Home
