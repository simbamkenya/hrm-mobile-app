import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Screen from '../components/Screen'
import { colors } from '../constants/color'
import { useNavigation } from '@react-navigation/native'

function EmployeeProfile() {
  const navigation = useNavigation()
  return (
    <Screen style={styles.container}>
      <View style={{ backgroundColor: 'pink' }}>
        <View>
          <Image style={styles.image} source={require('../assets/user.jpg')} />
        </View>
        <View style={styles.details}>
          <Text style={styles.text}>Name: simba Mkenya</Text>
          <Text style={styles.text}>Department: Information Tech</Text>
          <Text style={styles.text}>Email: simba@gmail.com</Text>
          <Text style={styles.text}>Department: Information Tech</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.text}>Projects</Text>
          <Text style={styles.text}>projects one</Text>
          <Text style={styles.text}>Projects two</Text>
          <Text style={styles.text}>Projects three</Text>
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

export default EmployeeProfile
