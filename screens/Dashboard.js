import React from 'react'
import { TouchableOpacity } from 'react-native-web'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from 'react-native-vector-icons'

import Clients from './Clients'
import Projects from './Projects'
import Events from './Events'

const Tab = createBottomTabNavigator()

function Dashboard({ navigation }) {
  return (
    <Tab.Navigator
      initialRouteName="clients"
      screenOptions={{
        tabBarActiveTintColor: '#3d4e7a',
        headerTitleAlign: 'center',
        headerShadowVisible: false,
      }}
    >
      <Tab.Screen
        name="clients"
        component={Clients}
        options={{
          tabBarLabel: 'Clients',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="events"
        component={Events}
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  )
}

export default Dashboard
