import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, Button, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import { store } from './store/store'

import Welcome from './screens/Welcome'
import Register from './screens/Register'
import Login from './screens/Login'
import Dashboard from './screens/Dashboard'
import AppTabNavigator from './screens/TabNavigator'

const Stack = createNativeStackNavigator()

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen
      name="Welcome"
      component={Welcome}
      options={{ headerShown: false, headerTitleAlign: 'center' }}
    ></Stack.Screen>
    <Stack.Screen name="Login" component={Login}></Stack.Screen>
    <Stack.Screen name="Register" component={Register}></Stack.Screen>
    <Stack.Screen name="Home" component={AppTabNavigator}></Stack.Screen>
  </Stack.Navigator>
)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8C4351',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    fontSize: 16,
    padding: 8,
    fontWeight: 'bold',
  },
})
