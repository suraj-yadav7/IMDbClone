import React from 'react'
import Card from './Card'
import { useSelector } from 'react-redux'

const TopRated = () => {
    const topratedData = useSelector((state)=>state.movie.topRatedData)
    
  return (
    <>
      <div className='topRated'>
        <div className='childTopRated'>
            {
                topratedData && topratedData.map((elem)=>(
                    <Card  cardData={elem} key={elem.id}/>
                ))
            }

        </div>

      </div>
    </>
  )
}

export default TopRated
