import React, { useEffect,useState } from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css";
import { AiFillStar } from "react-icons/ai"
import "../styles/card.scss"
import { Link } from 'react-router-dom'

const Card = ({cardData,key}) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },[3000])
    },[])

  return (
    <>
    {
        isLoading?
        <div className="cards" id={key}>
            <SkeletonTheme color="red" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/details/${cardData.id}`}>
            <div className="cards" key={key}>
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original/${cardData && cardData.poster_path}`} />
                <div className="cards__overlay">
                    <div className="card__title">{cardData?cardData.title:""}</div>
                    <div className="card__runtime">
                    {cardData?cardData.release_date:""}
                        <span className="card__rating">{cardData?cardData.vote_average:""}<span className='star'> <AiFillStar  /></span></span>
                    </div>
                    <div className="card__description">{cardData?cardData.overview.slice(1,80)+"...":""}</div>
                </div>
            </div> 
        </Link>
}        
    </>  
  )
}
export default Card
