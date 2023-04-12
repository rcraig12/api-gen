import { configureStore } from '@reduxjs/toolkit'

import projectReducer from './feature/project/projectSlice'

export default configureStore({
  reducer: {
    project: projectReducer,
  },
})
