import React, { useEffect,useState } from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "../styles/card.scss"

const Card = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect

  return (
    <>
         <div className="cards">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original`} />
                <div className="cards__overlay">
                    <div className="card__title">Fast x</div>
                    <div className="card__runtime">
                    chase begin
                        <span className="card__rating">9.4<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">This is faxt 10 movie of fast and furious fenchise</div>
                </div>
            </div>
        
    </>
  )
}

export default Card
