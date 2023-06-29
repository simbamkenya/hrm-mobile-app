import React from 'react'
import { TouchableOpacity } from 'react-native-web'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from 'react-native-vector-icons'

import Clients from './Clients'
import Projects from './Projects'
import Events from './Events'
import Employees from './Employees'
import Dashboard from './Dashboard'
import EmployeeProfile from './EmployeeProfile'
import EmployeeNavigator from '../navigation/EmployeeNavigator'
import ClientNavigator from '../navigation/ClientNavigator'
import ProjectNavigator from '../navigation/ProjectNavigator'
import EventNavigator from '../navigation/EventNavigator'

const Tab = createBottomTabNavigator()

function AppTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="dashboard"
      screenOptions={{
        tabBarActiveTintColor: '#3d4e7a',
        headerTitleAlign: 'center',
        headerShadowVisible: false,
        // headerShown: false,
        tabBarStyle: {
          height: 60,
        },
        tabBarItemStyle: {
          margin: 5,
        },
      }}
    >
      <Tab.Screen
        name="dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="employees"
        component={EmployeeNavigator}
        options={{
          tabBarLabel: 'Employees',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={size}
            />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="clients"
        component={ClientNavigator}
        options={{
          tabBarLabel: 'Clients',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="projects"
        component={ProjectNavigator}
        options={{
          tabBarLabel: 'Projects',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="briefcase"
              color={color}
              size={size}
            />
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="events"
        component={EventNavigator}
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="calendar-check"
              color={color}
              size={size}
            />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  )
}

export default AppTabNavigator
