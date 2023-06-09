import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const myapi=process.env.REACT_APP_API_KEY

const top_rated ="http://api.themoviedb.org/3/movie/top_rated?api_key=9c6d31f462d1f29aa5dd899cd00c34b5"

const upcoming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=9c6d31f462d1f29aa5dd899cd00c34b5'

// Fetching Home Movie List for HOME Comp.
export const homeMovie= createAsyncThunk("homeMovie", async(args, {rejectWithValue})=>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${myapi}`,{
        method:"GET",
        headers:{
            "content-type":"application/json"
        },

    })

    try{
        const data = await response.json()
        return data.results
    }
    catch(error){
        rejectWithValue(error)
    }
});

// Fetching Home Movie List for TopRated
export const topRatedMovie = createAsyncThunk("topRatedMovie", async(args,{rejectWithValue})=>{
    let response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${myapi}`,{
        method:"GET",
        headers:{
            "content-type":"application/json"
        },

    })

    try{
        const data=response.json()   
        return data
    }
    catch(error){
        rejectWithValue(error)
    }
});


// Fetching Home Movie List for Upcoming
export const upcomingMovie = createAsyncThunk("upcomingMovie", async(args,{rejectWithValue})=>{
    let response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${myapi}`,{
        method:"GET",
        headers:{
            "content-type":"application/json"
        },
    })

    try{
        const data=response.json()   
        return data
    }
    catch(error){
        rejectWithValue(error)
    }
});


//Movie-Slice initialization 
const movieSlice = createSlice({
    name:"movieSlice",
    initialState:{
        homeData:[],
        topRatedData:[],
        upcomingData:[],
        loading:false,
        error:null
    },

    reducers:{
    },

    extraReducers:{

        // Home data handling
        [homeMovie.pending]:(state)=>{
            state.loading=true
        },
        [homeMovie.fulfilled]:(state,action)=>{
            state.homeData=action.payload
        },
        [homeMovie.rejected]:(state,action)=>{
            state.error=action.payload
        },

        //topRated data handling
        [topRatedMovie.pending]:(state)=>{
        state.loading=true
        },
        [topRatedMovie.fulfilled]:(state,action)=>{
            state.topRatedData=action.payload
        },
        [topRatedMovie.rejected]:(state,action)=>{
            state.error=action.payload
        },

        // 
        [upcomingMovie.pending]:(state)=>{
            state.loading=true
        },
        [upcomingMovie.fulfilled]:(state,action)=>{
            state.upcomingData=action.payload
        },
        [upcomingMovie.rejected]:(state,action)=>{
            state.error=action.payload
        },

    }
    
})

export default movieSlice.reducer

export const {} = movieSlice.actions