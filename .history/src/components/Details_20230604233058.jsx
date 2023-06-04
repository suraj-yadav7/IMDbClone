import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Details = () => {
  // This hook takes id value which has been passed by parent comp as "ID"
  // const {key} = useParams()
  // console.log("the key or id" , key)

  // const detailsData = useSelector((state)=> state.movie.homeData.filter((elem)=> elem.id === key))
  // console.log("the details data", detailsData)

  return (
    <>
      <div className='details'>
        <div className='bgImg'><img src="" alt="moviename" /></div>
        <p>title</p>
        <p>subtitle</p>
        <p>rating</p>
        <p>runtime</p>
        <h4>runtime</h4>
        <h4>caetorgy: gonore </h4>
        <div className='card'>
            <img src="" alt="poster" />
            <p>description</p>
        </div>

      </div>
    </>
  )
}

export default Details
