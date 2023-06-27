import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Screen from '../components/Screen'
import { fetchEvents } from '../store/EventSlice'
import { FlatList, Text, View, StyleSheet, Image } from 'react-native'

function Events() {
  const { events } = useSelector((state) => state.events)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEvents())
  }, [])

  const Event = ({ eventName, duration, location, eventDate }) => (
    <View style={styles.container}>
      <Image
        style={{ width: 40, height: 40, borderRadius: 5, marginRight: 10 }}
        source={require('../assets/event.jpg')}
      />
      <View style={{ flexDirection: 'column' }}>
        <Text style={styles.text}>EVENT: {eventName}</Text>
        <Text style={styles.text}>LOCATION: {location}</Text>
        <Text style={styles.text}>DURATION: {duration}</Text>
      </View>
    </View>
  )
  return (
    <Screen>
      <FlatList
        data={events}
        // renderItem={({ item }) => <Text>{item.eventName}</Text>}
        renderItem={({ item }) => (
          <Event
            eventName={item.eventName}
            eventDate={item.eventDate}
            duration={item.duration}
            location={item.location}
          />
        )}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    borderRadius: 10,
    padding: 15,
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
})

export default Events
