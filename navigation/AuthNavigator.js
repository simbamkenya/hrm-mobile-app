import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../screens/Welcome'
import Register from '../screens/Register'
import Login from '../screens/Login'

const Stack = createNativeStackNavigator()

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome}></Stack.Screen>
      <Stack.Screen name="Register" component={Register}></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default AuthNavigator
