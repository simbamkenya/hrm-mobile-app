import React from 'react'
import { TouchableOpacity } from 'react-native-web'
import { View, Text, StyleSheet, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from 'react-native-vector-icons'
import Screen from '../components/Screen'
import Home from './Home'

import Clients from './Clients'
import Projects from './Projects'
import Events from './Events'
import Employees from './Employees'
import AppTabNavigator from './TabNavigator'

const Tab = createBottomTabNavigator()

function Dashboard({ navigation }) {
  const Card = ({ style, children }) => (
    <View style={[styles.card, style]}>{children}</View>
  )
  return (
    <Screen>
      <Card style={styles.card}>
        <Text>hhhhh</Text>
        <Button title="next" onPress={() => navigation.navigate('Clients')} />
        <Text style={styles.sectionTitle}>Basic CardView Example</Text>
      </Card>
    </Screen>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f18484',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
})

export default Dashboard
