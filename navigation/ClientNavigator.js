import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ClientProfile from '../screens/ClientProfile'
import Clients from '../screens/Clients'
import ClientForm from '../components/ClientForm'
const Stack = createNativeStackNavigator()

function ClientNavigator() {
  return (
    <Stack.Navigator initialRouteName="Clients">
      <Stack.Screen name="Clients" component={Clients}></Stack.Screen>
      <Stack.Screen
        name="ClientProfile"
        component={ClientProfile}
      ></Stack.Screen>
      <Stack.Screen name="AddClient" component={ClientForm}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default ClientNavigator
