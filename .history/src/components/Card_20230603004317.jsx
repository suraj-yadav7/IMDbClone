import React from 'react'
import "../styles/card.scss"

const Card = () => {
  return (
    <>
        <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original`} />
                <div className="cards__overlay">
                    <div className="card__title"></div>
                    <div className="card__runtime">
                    
                        <span className="card__rating"><i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description"></div>
                </div>
            </div>
        
    </>
  )
}

export default Card
