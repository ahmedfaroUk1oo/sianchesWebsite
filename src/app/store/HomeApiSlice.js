import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

const basUrl = 'https://sunchase.backend.aait-d.com/api';

export const homeApi = createAsyncThunk('homeAPI/getHomeApi', async ()=> {

    const res = await axios.get(`${basUrl}/home`)

    return res.data
})


const homeApiSlice = createSlice({
    name: 'homeAPI',
    initialState: {
        sliders: null,
        we_help_you: null,
        properties: null,
        recently_added: null,
        partners: null,
        contact_info: null,
        isLoading: false,
        error: null,

    },
    extraReducers: (builder) => {
        builder
            .addCase(homeApi.pending, (state,action) => {
                state.isLoading = true
           
            })
            .addCase(homeApi.fulfilled, (state, action) => {
             console.log(action.payload);
             
                state.error = null
              
                state.isLoading = false;
                state.sliders = action.payload.data.sliders;
                state.we_help_you = action.payload.data.we_help_you;
                state.properties = action.payload.data.properties;
                state.recently_added = action.payload.data.recently_added;
                state.partners = action.payload.data.partners;
                state.contact_info = action.payload.data.contact_info;
                
            
            }).addCase(homeApi.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message})
        }})


            export default homeApiSlice.reducer