import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Projects() {
  const projects = useSelector((state) => state.projects)
  const dispatch = useDispatch()
  return (
    <View>
      <Text>Projects</Text>
    </View>
  )
}

export default Projects
