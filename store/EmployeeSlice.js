import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../constants'

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

export const deleteEmployee = createAsyncThunk(
  'employees/deleteEmployee',
  async (employeeId) => {
    console.log('employeeid', employeeId)
    try {
      axios.delete(`http://localhost:3000/employees/${employeeId}`)
    } catch (error) {
      console.log('ERROR', error)
    }
  }
)

export const addEmployee = createAsyncThunk(
  'employees/addEmployee',
  async (employeeData) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/employees`,
        employeeData
      )
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

    builder.addCase(deleteEmployee.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(deleteEmployee.fulfilled, (state, action) => {
      state.employees = state.employees.filter(
        (employee) => employee._id !== action.payload
      )
      state.loading = false
    })
    builder.addCase(deleteEmployee.rejected, (state, action) => {
      state.loading = false
    })

    builder.addCase(addEmployee.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(addEmployee.fulfilled, (state, action) => {
      state.employees = [...state.employees, action.payload]
      state.loading = false
    })
  },
})
// export const { deleteEmployee } = employeeSlice.actions
export default employeeSlice.reducer
