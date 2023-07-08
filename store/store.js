import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from './EmployeeSlice'
import projectReducer from './ProjectSlice'
import eventReducer from './EventSlice'
import clientReducer from './ClientSlice'
import userReducer from './UserSlice'

export const store = configureStore({
  reducer: {
    employees: employeeReducer,
    projects: projectReducer,
    events: eventReducer,
    clients: clientReducer,
    users: userReducer,
  },
})
