import { createSlice } from '@reduxjs/toolkit'

export const projectSlice = createSlice({
  name: 'project',
  initialState: [],
  reducers: {
    add: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    remove: (state) => {
      state.value -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = projectSlice.actions

export default projectSlice.reducer
