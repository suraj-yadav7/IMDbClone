import React, {useEffect, useState} from "react"
import { useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import "../styles/details.scss"

const MY_API=process.env.MY_API_KEY
const Details = () => {

  const {id} = useParams()
  const [genreData , setGenreData] = useState()
  console.log("The genre api data", genreData)

  const fetchGenre = async() =>{
    await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=9c6d31f462d1f29aa5dd899cd00c34b5&language=en-US`).then((response)=>response.json()).then((data)=>setGenreData(data))
  }

  useEffect(()=>{
    fetchGenre()
   
  },[])

  const movieData = useSelector((state)=>state.movie.homeData.filter((elem)=>elem.id === parseInt(id)))
  const singleMovieData = movieData[0]
  console.log("the single movie",singleMovieData)
  console.log("the genre movie useSelector",singleMovieData.genre_ids[1])

  
    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${singleMovieData ? singleMovieData.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="movie__poster" src={`https://image.tmdb.org/t/p/original${singleMovieData ? singleMovieData.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="movie__name">{singleMovieData ? singleMovieData.original_title : ""}</div>
                        <div className="movie__tagline">{singleMovieData ? singleMovieData.tagline : ""}</div>
                        <div className="movie__rating">
                            {singleMovieData ? singleMovieData.vote_average: ""} <i class="fas fa-star" />
                            <span className="movie__voteCount">{singleMovieData ? "(" + singleMovieData.vote_count + ") votes" : ""}</span>
                        </div>  
                        <div className="movie__runtime">{singleMovieData ? singleMovieData.runtime + " mins" : ""}</div>
                        <div className="movie__releaseDate">{singleMovieData ? "Release date: " + singleMovieData.release_date : ""}</div>
                        <div className="movie__genres">
                            {
                                genreData && genreData.genres
                                ? 
                                genreData.genres.map((genre)=>{
                                    if(genre.id === singleMovieData.genre_ids[0]){
                                        
                                        return <div id={genre.id}><span className="movie__genre" > {genre.name}</span></div>
                                    }
                                })
                           :"" }
                        </div>
                    </div>
                    <div className="movie__detailRightBottom">
                        <div className="synopsisText">Synopsis</div>
                        <div>{singleMovieData ? singleMovieData.overview : ""}</div>
                    </div>

                </div>
            </div>
            <div className="movie__links">
                <div className="movie__heading">Useful Links</div>
                {
                    singleMovieData && singleMovieData.homepage && <a href={singleMovieData.homepage} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
                {
                    singleMovieData && singleMovieData.imdb_id && <a href={"https://www.imdb.com/title/" + singleMovieData.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
            </div>
            <div className="movie__heading">Production companies</div>
            <div className="movie__production">
                {
                    singleMovieData && singleMovieData.production_companies && singleMovieData.production_companies.map(company => (
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