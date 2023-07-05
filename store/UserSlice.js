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
    await axios.post('http://localhost:3000/user/login', userData).then()
  } catch (error) {
    console.log(error)
  }
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state, action) => {})
    builder.addCase(registerUser.fulfilled, (state, action) => {})
    builder.addCase(registerUser.rejected, (state, action) => {})

    builder.addCase(login.pending, (state, action) => {})
    builder.addCase(login.fulfilled, (state, action) => {})
    builder.addCase(login.rejected, (state, action) => {})
  },
})

export default userSlice.reducer
