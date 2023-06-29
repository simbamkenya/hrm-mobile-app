import Events from '../screens/Events'
import EventProfile from '../screens/EventProfile'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

function EventNavigator() {
  return (
    <Stack.Navigator initialRouteName="Events">
      <Stack.Screen name="Events" component={Events}></Stack.Screen>
      <Stack.Screen name="EventProfile" component={EventProfile}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default EventNavigator
