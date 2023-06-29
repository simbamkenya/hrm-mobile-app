import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ClientProfile from '../screens/ClientProfile'
import Clients from '../screens/Clients'
const Stack = createNativeStackNavigator()

function ClientNavigator() {
  return (
    <Stack.Navigator initialRouteName="Clients">
      <Stack.Screen name="Clients" component={Clients}></Stack.Screen>
      <Stack.Screen
        name="ClientProfile"
        component={ClientProfile}
      ></Stack.Screen>
    </Stack.Navigator>
  )
}

export default ClientNavigator
