import React from 'react'
import { fetchEmployees } from '../store/EmployeeSlice'
import { useDispatch, useSelector } from 'react-redux'

function Employees() {
  const dispatch = useDispatch()
  const { employees } = useSelector((state) => state.employees)
  return <div>Employees</div>
}

export default Employees
