import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

const basUrl = 'https://sunchase.backend.aait-d.com/api/';

export const profileApi = createAsyncThunk('profileApi/getProfileApi', async ()=> {

    const res = await axios.get(`${basUrl}profile` , {headers: {
        Authorization : localStorage.getItem('sianchesToken') ? `Bearer ${localStorage.getItem('sianchesToken')}` : ''
    }})
    return res?.data
})


const showProfileSlice = createSlice({
    name: 'profileApi',
    initialState: {
       user: null,
        isLoading: false,
        error: null,

    },
    extraReducers: (builder) => {
        builder
            .addCase(profileApi.pending, (state,action) => {
                state.isLoading = true
           
            })
            .addCase(profileApi.fulfilled, (state, action) => {
             
                state.error = null
              state.user = action.payload.data.full_name
                state.isLoading = false;
                
                
            
            }).addCase(profileApi.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message})
        }})


            export default showProfileSlice.reducer