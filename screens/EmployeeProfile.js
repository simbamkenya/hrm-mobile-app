import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Screen from '../components/Screen'
import { colors } from '../constants/color'

function EmployeeProfile({ route }) {
  const { email, firstName, lastName } = route.params

  return (
    <Screen style={styles.container}>
      <View>
        <View>
          <Image style={styles.image} source={require('../assets/user.jpg')} />
        </View>
        <View style={styles.details}>
          <Text style={styles.text}>
            Name: {firstName} {lastName}
          </Text>
          <Text style={styles.text}>Email: {email}</Text>
        </View>
        {/* <View style={styles.details}>
          <Text style={styles.text}>Projects</Text>
          <Text style={styles.text}>projects one</Text>
        </View> */}
      </View>
    </Screen>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  image: {
    marginTop: 40,
    marginBottom: 20,
    height: 100,
    width: 100,
    borderRadius: '50%',
  },
  details: {
    marginTop: 20,
    alignItems: 'start',
    lineHeight: 1.6,
    gap: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
})

export default EmployeeProfile