import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EmployeeProfile from '../screens/EmployeeProfile'
const Stack = createNativeStackNavigator()

function ItemNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="EmployeeProfile"
        component={EmployeeProfile}
      ></Stack.Screen>
    </Stack.Navigator>
  )
}

export default ItemNavigator
