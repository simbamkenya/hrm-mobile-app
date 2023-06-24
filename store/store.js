import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from './EmployeeSlice'
import projectReducer from './ProjectSlice'
import eventReducer from './EventSlice'

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    project: projectReducer,
    event: eventReducer,
  },
})
