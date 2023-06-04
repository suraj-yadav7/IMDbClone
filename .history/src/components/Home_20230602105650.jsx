import React from "react"

const Home = () =>{
    let apiKey="9c6d31f462d1f29aa5dd899cd00c34b5"
    const fetchData = async()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=9c6d31f462d1f29aa5dd899cd00c34b5")
        .then((response)=>response.json())
        .then((data)=>
        console.log("The api call", data)
        
        )
        
    }
    return(
        <>
        <div className="home">
            <button onClick={fetchData} >Fetch Data</button>
            
        </div>
        </>
    )
    }
export default Home;