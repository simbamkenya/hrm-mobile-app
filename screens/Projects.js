import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjects } from '../store/ProjectSlice'
import Screen from '../components/Screen'
import { FlatList } from 'react-native-gesture-handler'
import { Text, View, Image, StyleSheet } from 'react-native'

function Projects() {
  const { projects } = useSelector((state) => state.projects)
  const dispatch = useDispatch()

  console.log(projects)

  useEffect(() => {
    dispatch(fetchProjects())
  }, [])

  const Project = ({ projectName, hours }) => (
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
  )
  return (
    <Screen>
      <FlatList
        data={projects}
        renderItem={({ item }) => (
          <Project projectName={item.projectName} hours={item.hours} />
        )}
        keyExtractor={(item) => item._id}
      />
    </Screen>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    borderRadius: 10,
    padding: 15,
    marginBottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
})

export default Projects
