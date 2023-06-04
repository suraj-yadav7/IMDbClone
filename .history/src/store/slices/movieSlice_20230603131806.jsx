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

export const homeMovie= createAsyncThunk("homeMovie", async(args, {rejectWithValue})=>{
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=9c6d31f462d1f29aa5dd899cd00c34b5",{
        method:"GET",
        headers:{
            "content-type":"application/json"
        },

    })

    try{
        const data = await response.json()
        console.log("the home data slice",data.results)
        return data.results
    }
    catch(error){
        rejectWithValue(error)
    }
})



const movieSlice = createSlice({
    name:"movieSlice",
    initialState:{
        homeData:[],
        popularData:[],
        loading:false,
        error:null
    },
    

    reducers:{

    },

    extraReducers:{
        //popular data handling
        [popularMovie.pending]:(state)=>{
            state.loading=true
        },
        [popularMovie.fulfilled]:(state,action)=>{
            state.popularData=action.payload
        },
        [popularMovie.rejected]:(state,action)=>{
            state.error=action.payload
        },

        // Home data handling
        [homeMovie.pending]:(state)=>{
            state.loading=true
        },
        [homeMovie.fulfilled]:(state,action)=>{
            state.homeData=action.payload
        },
        [homeMovie.rejected]:(state,action)=>{
            state.error=action.payload
        }
    
    }
    
    
})

export default movieSlice.reducer

export const {} = movieSlice.actions