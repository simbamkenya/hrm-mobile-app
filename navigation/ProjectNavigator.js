import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProjectProfile from '../screens/ProjectProfile'
import Projects from '../screens/Projects'
import ProjectForm from '../components/ProjectForm'

const Stack = createNativeStackNavigator()

function ProjectNavigator() {
  return (
    <Stack.Navigator initialRouteName="Projects">
      <Stack.Screen name="Projects" component={Projects}></Stack.Screen>
      <Stack.Screen
        name="ProjectProfile"
        component={ProjectProfile}
      ></Stack.Screen>
      <Stack.Screen name="AddProject" component={ProjectForm}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default ProjectNavigator
