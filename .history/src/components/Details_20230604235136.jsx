import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Details = () => {
  // This hook takes id value which has been passed by parent comp as "ID"
  const {id} = useParams()
  // console.log("the key or id" , id)

  const detailsData = useSelector((state)=> state.movie.homeData)
  const dData = detailsData.filter((elem)=>elem.id === id)
  console.log("the details data", detailsData)
  console.log("the sub data", dData)

  return (
    <>
      <div className='details' style={{color:"black", backgroundColor:'lightblue'}}>
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
