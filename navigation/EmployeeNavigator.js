import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EmployeeProfile from '../screens/EmployeeProfile'
import Employees from '../screens/Employees'
const Stack = createNativeStackNavigator()

function EmployeeNavigator() {
  return (
    <Stack.Navigator initialRouteName="Employees">
      <Stack.Screen name="Employees" component={Employees}></Stack.Screen>
      <Stack.Screen
        name="EmployeeProfile"
        component={EmployeeProfile}
      ></Stack.Screen>
    </Stack.Navigator>
  )
}

export default EmployeeNavigator
