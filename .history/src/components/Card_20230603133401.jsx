import React, { useEffect,useState } from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import {FaBeer } from "react-icons/fa"
import "../styles/card.scss"

const Card = ({cardData,id}) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },[5000])
    },[])

  return (
    <>
    {
        isLoading?
        <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <div className="cards" id={id}>
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original/${cardData && cardData.backdrop_path}`} />
                <div className="cards__overlay">
                    <div className="card__title">{cardData?cardData.title:""}</div>
                    <div className="card__runtime">
                    {cardData?cardData.release_date:""}
                        <span className="card__rating">{cardData?cardData.vote_average:""}<FaBeer  /></span>
                    </div>
                    <div className="card__description">{cardData?cardData.overview:""}</div>
                </div>
            </div>
}        
    </>
  )
}

export default Card
