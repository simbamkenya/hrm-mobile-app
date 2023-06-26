import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjects } from '../store/ProjectSlice'
import Screen from '../components/Screen'
import { FlatList } from 'react-native-gesture-handler'

function Projects() {
  const projects = useSelector((state) => state.projects)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProjects())
  }, [])
  return (
    <Screen>
      <FlatList
        data={projects}
        renderItem={({ item }) => <Text>{item._id}</Text>}
        keyExtractor={(item) => item._id}
      />
    </Screen>
  )
}

export default Projects
