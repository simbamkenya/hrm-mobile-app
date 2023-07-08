import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import deviceStorage from '../deviceStorage'

export const registerUser = createAsyncThunk(
  'users/registerUser',
  async (userData) => {
    console.log('register', userData)
    try {
      await axios
        .post('http://localhost:3000/user/register', userData)
        .then((res) => console.log(res))
    } catch (error) {
      console.log(error)
    }
  }
)
export const login = createAsyncThunk('users/login', async (userData) => {
  try {
    await axios
      .post('http://localhost:3000/user/login', userData)
      .then((res) => localStorage.setItem('user', JSON.stringify(res.data)))
  } catch (error) {
    console.log(error)
  }
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [],
  },
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem('user')
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {})
    builder.addCase(registerUser.fulfilled, (state, action) => {})
    builder.addCase(registerUser.rejected, (state, action) => {})

    builder.addCase(login.pending, (state, action) => {})
    builder.addCase(login.fulfilled, (state, action) => {
      console.log(action.payload)
      state.user = [...state.user, action.payload]
    })
    builder.addCase(login.rejected, (state, action) => {})
  },
})

const { logout } = userSlice.actions
export default userSlice.reducer
