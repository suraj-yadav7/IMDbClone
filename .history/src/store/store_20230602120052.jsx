import { configureStore } from "@reduxjs/toolkit";

const store= configureStore({
    reducer:{
        movie:movieSlice
    }
})

export default store