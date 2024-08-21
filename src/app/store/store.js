import  { configureStore } from '@reduxjs/toolkit';
import HomeApiSlice from './HomeApiSlice';
import showProfileSlice from './showProfileSlice';



const store = configureStore({
    reducer: {
           homeApi : HomeApiSlice,
       profile : showProfileSlice
    },
});

export default store;