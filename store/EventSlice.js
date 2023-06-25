import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL } from '../constants'
import axios from 'axios'

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  try {
    const res = axios.get(`${BASE_URL}/events`).then((res) => res.data)
    return res
  } catch (error) {
    console.log(error)
  }
})

const eventSlice = createSlice({
  name: 'event',
  initialState: {
    events: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.events = action.payload
      state.loading = false
    })
    builder.addCase(fetchEvents.rejected, (state, action) => {
      state.loading = false
    })
  },
})

export default eventSlice.reducer
