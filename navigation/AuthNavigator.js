import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../screens/Welcome'
import Register from '../screens/Register'
import Login from '../screens/Login'
import EmployeeProfile from '../screens/EmployeeProfile'

const Stack = createNativeStackNavigator()

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome}></Stack.Screen>
      <Stack.Screen name="Register" component={Register}></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
      <Stack.Screen
        name="EmployeeProfile"
        component={EmployeeProfile}
      ></Stack.Screen>
    </Stack.Navigator>
  )
}

export default AuthNavigator
