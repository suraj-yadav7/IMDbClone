import React from "react"

const Home = () =>{
    let apiKey="9c6d31f462d1f29aa5dd899cd00c34b5"

    return(
        <>
        <div className="home">
            <button onClick={fetchData} >Fetch Data</button>
            
        </div>
        </>
    )
    }
export default Home;