import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProject, fetchProjects } from '../store/ProjectSlice'
import Screen from '../components/Screen'
import { FlatList, Swipeable } from 'react-native-gesture-handler'
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Button,
  ActivityIndicator,
} from 'react-native'
import ItemDeleteAction from './ItemDeleteAction'
import { useNavigation } from '@react-navigation/native'
import { colors } from '../constants/color'

function Projects() {
  const { projects, loading } = useSelector((state) => state.projects)
  const dispatch = useDispatch()
  const navigation = useNavigation()

  console.log(projects)

  useEffect(() => {
    dispatch(fetchProjects())
  }, [])

  const Project = ({ projectName, hours, dateDue, renderRightActions }) => (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        onPress={() =>
          navigation.navigate('ProjectProfile', { projectName, hours, dateDue })
        }
      >
        <View style={styles.container}>
          <Image
            style={{ width: 40, height: 40, borderRadius: 5, marginRight: 10 }}
            source={require('../assets/project.jpg')}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.text}>PROJECT: {projectName}</Text>
            <Text style={styles.text}>ESTIMATED HOURS: {hours}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
  return (
    <Screen>
      <Button
        title="Add Project"
        onPress={() => navigation.navigate('AddProject')}
      />
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <FlatList
          data={projects}
          renderItem={({ item }) => (
            <Project
              projectName={item.projectName}
              hours={item.hours}
              dateDue={item.dateDue}
              renderRightActions={() => (
                <ItemDeleteAction
                  onPress={() => dispatch(deleteProject(item._id))}
                />
              )}
            />
          )}
          keyExtractor={(item) => item._id}
        />
      )}
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 10,
    padding: 15,
    margin: 6,
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
    marginTop: 4,
    fontWeight: 'bold',
    color: 'white',
  },
})

export default Projects
