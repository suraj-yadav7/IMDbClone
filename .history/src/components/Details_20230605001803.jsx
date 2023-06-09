import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Details = () => {
  // This hook takes id value which has been passed by parent comp as "ID"
  const {id} = useParams()
  // console.log("the key or id" , typeof(id),id)

  const detailsData = useSelector((state)=> state.movie.homeData.filter((elem)=>elem.id === parseInt(id)))
  console.log("the details data", detailsData)
  console.log("the separate data", detailsData[0].title,detailsData[0].release_date)

  return (
    <>
      <div className='details' style={{color:"black", backgroundColor:'lightblue'}}>
        <div className='bgImg'><img src="" alt="moviename" /></div>
        <p>title: {detailsData[0].title}</p>
        <p>release date: {detailsData[0].release_date}</p>
        <p>rating : {detailsData[0].vote_average}</p>
        <p>runtime : {detailsData[0].title}</p>
        <h4>caetorgy: {detailsData[0].title} </h4>
        <div className='card'>
            <img src="" alt="poster" />
            <p>description : {detailsData.title}</p>
        </div>

      </div>
    </>
  )
}

export default Details
