import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL } from '../constants'
import axios from 'axios'

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {
    try {
      const res = axios.get(`${BASE_URL}/projects`).then((res) => res.data)
      return res
    } catch (error) {
      console.log(error)
    }
  }
)

export const deleteProject = createAsyncThunk(
  'projects/deleteProject',
  async (projectId) => {
    try {
      await axios.delete(`http://localhost:3000/projects/${projectId}`)
    } catch (error) {
      console.log(error)
    }
  }
)

export const addProject = createAsyncThunk(
  'projects/addProject',
  async (projectData) => {
    try {
      const res = await axios.post(
        `http://localhost:3000/projects`,
        projectData
      )
      return res
    } catch (error) {
      console.log(error)
    }
  }
)

const projectSlice = createSlice({
  name: 'project',
  initialState: {
    projects: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.projects = action.payload
      state.loading = false
    })
    builder.addCase(fetchProjects.rejected, (state, action) => {
      state.loading = false
    })

    builder.addCase(deleteProject.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(deleteProject.fulfilled, (state, action) => {
      state.projects = state.projects.filter(
        (project) => project._id !== action.payload
      )
      state.loading = false
    })

    builder.addCase(addProject.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(addProject.fulfilled, (state, action) => {
      state.projects = [...state.projects, action.payload]
      state.loading = false
    })
  },
})

export default projectSlice.reducer
