import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Screen from '../components/Screen'
import { deleteEvent, fetchEvents } from '../store/EventSlice'
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'
import ItemDeleteAction from './ItemDeleteAction'
import { useNavigation } from '@react-navigation/native'

function Events() {
  const navigation = useNavigation()
  const { events } = useSelector((state) => state.events)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchEvents())
  }, [])

  const Event = ({
    eventName,
    duration,
    location,
    eventDate,
    renderRightActions,
  }) => (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        onPress={() =>
          navigation.navigate('EventProfile', {
            eventName,
            duration,
            location,
          })
        }
      >
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
      </TouchableHighlight>
    </Swipeable>
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
            renderRightActions={() => (
              <ItemDeleteAction
                onPress={() => dispatch(deleteEvent(item._id))}
              />
            )}
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
