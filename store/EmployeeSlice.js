import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchEmployees = createAsyncThunk(
  'employees/fetchEmployees',
  async () => {
    const res = await fetch('url')
    return
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
