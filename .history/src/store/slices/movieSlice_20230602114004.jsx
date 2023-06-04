import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movieSlice",
    initialState:{
        movieData:[],
        lading:false,
        error:null
    },

    reducers:{

    },

    extraReducers:{

    }

})

export default movieSlice.reducer

export const {} = movieSlice.actions