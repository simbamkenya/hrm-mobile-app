import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../constants'

export const fetchClients = createAsyncThunk(
  'clients/fetchClients',
  async () => {
    try {
      const res = await axios.get(`${BASE_URL}/clients`).then((res) => res.data)
      return res
    } catch (error) {
      console.log(error)
    }
  }
)

export const deleteClient = createAsyncThunk(
  'clients/deleteClient',
  async (clientId) => {
    try {
      await axios.delete(`http://localhost:3000/clients/${clientId}`)
    } catch (error) {
      console.log(error)
    }
  }
)

export const addClient = createAsyncThunk(
  'clients/addClient',
  async (clientData) => {
    try {
      const res = await axios.post(`http://localhost:3000/clients`, clientData)
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
    builder.addCase(deleteClient.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(deleteClient.fulfilled, (state, action) => {
      state.clients = state.clients.filter(
        (client) => client._id !== action.payload
      )
      state.loading = false
    })
    builder.addCase(deleteClient.rejected, (state, action) => {
      state.loading = false
    })

    builder.addCase(addClient.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(addClient.fulfilled, (state, action) => {
      state.clients = [...state.clients, ...action.payload]
      state.loading = false
    })
  },
})

export default clientSlice.reducer
