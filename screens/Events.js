import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Screen from '../components/Screen'
import { fetchEvents } from '../store/EventSlice'
import { FlatList, Text } from 'react-native'

function Events() {
  const { events } = useSelector((state) => state.events)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEvents())
  }, [])
  return (
    <Screen>
      <FlatList
        data={events}
        renderItem={({ item }) => <Text>{item._id}</Text>}
      />
    </Screen>
  )
}

export default Events
