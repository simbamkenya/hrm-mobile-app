import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Screen from '../components/Screen'
import { colors } from '../constants/color'

function ProjectProfile({ route }) {
  const { projectName, hours, dateDue } = route.params
  return (
    <Screen style={styles.container}>
      <View>
        <View>
          <Image style={styles.image} source={require('../assets/user.jpg')} />
        </View>
        <View style={styles.details}>
          <Text style={styles.text}>Client: {projectName}</Text>
          <Text style={styles.text}>Hours: {hours}</Text>
          <Text style={styles.text}>Due date: {dateDue}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.text}>Projects</Text>
          <Text style={styles.text}>projects one</Text>
        </View>
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

export default ProjectProfile
