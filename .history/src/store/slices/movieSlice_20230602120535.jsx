import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const popularMovie = createAsyncThunk("popularMovie", async(args,{rejectWithValue})=>{
    let response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=9c6d31f462d1f29aa5dd899cd00c34b5",{
        method:"GET",
        headers:{
            "content-type":"application/json"
        },

    })

    try{
        const data=response.json()   
        console.log("the popular",data) 
        return data
    }
    catch(error){
        rejectWithValue(error)
    }
});



const movieSlice = createSlice({
    name:"movieSlice",
    initialState:{
        movieData:[],
        popularData:[],
        lading:false,
        error:null
    },

    reducers:{

    },

    extraReducers:{
        [popularMovie.pending]:(state)=>{
            state.lading=true
        },
        [popularMovie.fulfilled]:(state,action)=>{
            state.popularData=action.payload
        },
        [popularMovie.rejected]:(state,action)=>{
            state.error=action.payload
        }
    }

})

export default movieSlice.reducer

export const {} = movieSlice.actions