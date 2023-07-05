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
  Button,
  ActivityIndicator,
} from 'react-native'
import { Swipeable } from 'react-native-gesture-handler'
import ItemDeleteAction from './ItemDeleteAction'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../constants/color'

function Events() {
  const navigation = useNavigation()
  const { events, loading } = useSelector((state) => state.events)
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
      <Button
        title="Add Event"
        onPress={() => navigation.navigate('AddEvent')}
      />
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
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
      )}
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 10,
    padding: 15,
    margin: 6,
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: 'bold',
    color: 'white',
  },
})

export default Events
