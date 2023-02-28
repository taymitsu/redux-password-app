import { createSlice } from '@reduxjs/toolkit' // 1

const initialState = {
  value: [],
}; 

// 3 Add the password slice
export const passwordsSlice = createSlice({
	name: 'passwords',
	initialState,
	reducers: {
		addPassword: (state, action) => {
			state.value.push(action.payload)
		},
	},
})

export const { addPassword } = passwordsSlice.actions
export default passwordsSlice.reducer