import React, {useEffect, useState} from "react"
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import "../styles/details.scss"

const myApi=process.env.MY_API_KEY
const Details = () => {


  const {id} = useParams()
  const [genreData , setGenreData] = useState()
  const [movieDetails , setMovieDetails] = useState()
  console.log("The genre api data", genreData)

  console.log("the movieDetias", movieDetails)

  const fetchGenre = () =>{
    fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=9c6d31f462d1f29aa5dd899cd00c34b5&language=en-US`).then((response)=>response.json()).then((data)=>setGenreData(data))
  }

  const fetchMovieById= ()=>[   
     fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${myApi}`).then((response)=>response.json()).then((data)=> setMovieDetails(data))
  ]
  useEffect(()=>{
    fetchGenre()
    fetchMovieById()
  },[])

  const movieData = useSelector((state)=>state.movie.homeData.filter((elem)=>elem.id === parseInt(id)))
  const singleData = movieData[0]
  console.log("the single movie",singleData)

  
    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${movieDetails ? movieDetails.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${movieDetails ? movieDetails.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{movieDetails ? movieDetails.original_title : ""}</div>
                        <div className="movie__tagline">{movieDetails ? movieDetails.tagline : ""}</div>
                        <div className="movie__rating">
                            {movieDetails ? movieDetails.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{movieDetails ? "(" + movieDetails.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{movieDetails ? movieDetails.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{movieDetails ? "Release date: " + movieDetails.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                genreData && genreData.genres
                                ? 
                                genreData.genres.map((genre)=>{
                                    if(genre.id === movieDetails.genre_ids[0]){
                                        
                                        return <div id={genre.id}><span className="movie__genre" > {genre.name}</span></div>
                                    }
                                })
                           :"" }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{movieDetails ? movieDetails.overview : ""}</div>
                    </div>

                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    movieDetails && movieDetails.homepage && <a href={movieDetails.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    movieDetails && movieDetails.imdb_id && <a href={"https://www.imdb.com/title/" + movieDetails.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    movieDetails && movieDetails.production_companies && movieDetails.production_companies.map(company => (
                        <>
                            {
                                company.logo_path 
                                && 
                                <span className="productionCompanyImage">
                                    <img className="movie__productionComapany" src={"https://image.tmdb.org/t/p/original" + company.logo_path} />
                                    <span>{company.name}</span>
                                </span>
                            }
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Details