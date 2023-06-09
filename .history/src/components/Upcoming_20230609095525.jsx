import React from 'react'
import { useSelector } from 'react-redux'
import Card from './Card'

const Upcoming = () => {
  const upComingData = useSelector((state) => state.movie.upcomingData.slice(0, 18))
  return (
    <>
      <div className='upcoming'>
        <h3>Upcoming Movie List</h3>
        <div className='childUpcoming'>
          {
            upComingData && upComingData.map((elem) => (
              <Card cardData={elem} key={elem.id} />
            ))
          }

        </div>
      </div>
    </>
  )
}

export default Upcoming
