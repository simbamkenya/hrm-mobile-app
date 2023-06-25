import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async () => {
    try {
      const res = await axios
        .get(`${BASE_URL}/employees`)
        .then((res) => res.data)
      return res
    } catch (error) {
      console.log(error)
    }
  }
)

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    employees: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchEmployees.fulfilled, (state, action) => {
      state.employees = action.payload
      state.loading = false
    })
    builder.addCase(fetchEmployees.rejected, (state, action) => {
      state.loading = false
    })
  },
})

export default employeeSlice.reducer
