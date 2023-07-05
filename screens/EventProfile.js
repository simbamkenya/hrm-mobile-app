import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Screen from '../components/Screen'
import { colors } from '../constants/color'

function EventProfile({ route }) {
  const { eventName, duration, location } = route.params
  return (
    <Screen style={styles.container}>
      <View>
        <View style={{ marginHorizontal: 'auto' }}>
          <Image style={styles.image} source={require('../assets/event.jpg')} />
        </View>
        <View style={styles.details}>
          <Text style={styles.text}>Event Name: {eventName}</Text>
          <Text style={styles.text}>Duration: {duration}</Text>
          <Text style={styles.text}>Location: {location}</Text>
        </View>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    alignItems: 'center',
  },
  image: {
    marginTop: 60,
    marginBottom: 20,
    height: 100,
    width: 100,
    borderRadius: '50%',
  },
  details: {
    marginTop: 40,
    alignItems: 'start',
    lineHeight: 1.6,
    gap: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
})

export default EventProfile
