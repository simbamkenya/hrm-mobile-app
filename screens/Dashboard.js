import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-web'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
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
      <ScrollView>
        <View style={styles.cardContainer}>
          <Card style={styles.card}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../assets/clients.jpg')}
                style={styles.image}
              />
              <Text style={styles.sectionTitle}>2 Clients</Text>
            </View>
          </Card>
        </View>
        <View style={styles.cardContainer}>
          <Card style={styles.card}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={styles.image}
                source={require('../assets/events.jpg')}
              />
              <Text style={styles.sectionTitle}>6 Upcoming Events</Text>
            </View>
          </Card>
        </View>
        <View style={styles.cardContainer}>
          <Card style={styles.card}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../assets/Projects.jpg')}
                style={styles.image}
              />
              <Text style={styles.sectionTitle}>12 Projects</Text>
            </View>
          </Card>
        </View>
        <View style={styles.cardContainer}>
          <Card style={styles.card}>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../assets/employees.jpg')}
                style={styles.image}
              />
              <Text style={styles.sectionTitle}>20 Employees</Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
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
    // alignItems: 'center',
    marginBottom: 4,
    borderLeftColor: 'green',
    borderLeftWidth: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    marginLeft: 8,
  },
  image: { width: 50, height: 50, borderRadius: 15 },
})

export default Dashboard
