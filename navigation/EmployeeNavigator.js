import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EmployeeProfile from '../screens/EmployeeProfile'
import Employees from '../screens/Employees'

import EmployeeForm from '../components/EmployeeForm'

const Stack = createNativeStackNavigator()

function EmployeeNavigator() {
  return (
    <Stack.Navigator initialRouteName="Employees">
      <Stack.Screen name="Employees" component={Employees}></Stack.Screen>
      <Stack.Screen
        name="EmployeeProfile"
        component={EmployeeProfile}
      ></Stack.Screen>
      <Stack.Screen name="AddEmployee" component={EmployeeForm}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default EmployeeNavigator
