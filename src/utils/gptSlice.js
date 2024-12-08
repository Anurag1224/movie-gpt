import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState:{
        showGptSearch: false,
        gptRecommendedMovie: null,
        movieNames: null,
    },
    reducers:{
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;  
            
        },
        addGptSearchMovieResult: (state, action) => {
            const {movieNames,gptRecommendedMovie} = action.payload; // here we have extracted whatever we have passed 
            state.gptRecommendedMovie = gptRecommendedMovie; // we don't need to write action.payload as in above line we have done it. 
            state.movieNames = movieNames;

        },
        removeGptSearchMovieResult: (state) =>{
            state.gptRecommendedMovie = null;
            state.movieNames = null;
        },
    
    }
});

export const {toggleGptSearchView, addGptSearchMovieResult, removeGptSearchMovieResult} = gptSlice.actions;
export default gptSlice.reducer;