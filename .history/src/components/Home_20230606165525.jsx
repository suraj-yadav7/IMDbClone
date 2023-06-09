import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { homeMovie } from '../store/slices/movieSlice'
import Card from './Card'
import "../styles/home.scss"

const Home = () => {
  const dispatch = useDispatch()
  const movieData = useSelector((state) => state.movie.homeData)
  console.log("the homeData in components", movieData)

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
        <div className='popularMovie'>
          <h3>Popular Movie </h3>
          <p>This week's top movies</p>
          {
            movieData?.map((elem) => (
              <Card cardData={elem} key={elem.id} />
            ))

          }
        </div>
      </div>

      <div className='home'>
        <button onClick={() => dispatch(homeMovie())}>Fetch Home data</button>
        <h3>Popular Movies</h3>

      </div>
    </>
  )
}

export default Home
