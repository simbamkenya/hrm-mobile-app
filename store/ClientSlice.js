import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchClients = createAsyncThunk(
  'clients/fetchClients',
  async () => {
    try {
      const res = await axios
        .get('http://localhost:3000/clients')
        .then((res) => res.data)
      return res
    } catch (error) {
      console.log(error)
    }
  }
)

const clientSlice = createSlice({
  name: 'client',
  initialState: {
    clients: [
      { _id: 1, clientName: 'him' },
      { _id: 2, clientName: 'she' },
    ],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchClients.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchClients.fulfilled, (state, action) => {
      state.clients = action.payload
      state.loading = false
    })
    builder.addCase(fetchClients.rejected, (state, action) => {
      state.loading = false
    })
  },
})

export default clientSlice.reducer
