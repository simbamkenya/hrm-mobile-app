import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'

function Events() {
  const { events } = useSelector((state) => state.events)
  const dispatch = useDispatch()
  return <div>Events</div>
}

export default Events
