import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const upComingData = useSelector((state)=>state.movie.upcomingData.slice(0,18))

const Upcoming = () => {
  return (
    <>
      <div className='upcoming'>
        <div className='childUpcoming'>
        {
            upComingData && upComingData.map((elem)=>(
                <Card cardData={elem} key={id} />
            ))
        }

        </div>
      </div>
    </>
  )
}

export default Upcoming
