import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {}
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
  },
})

export default projectSlice.reducer
