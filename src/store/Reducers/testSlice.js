import { createSlice } from '@reduxjs/toolkit';

export const homeDataSlice = createSlice({
	name: 'homepage',
	initialState: {
		token: null,
		isLoggedIn: false,
	},
	reducers: {
		saveAuthToken: (state, action) => {
			state.token = action.payload;
			state.isLoggedIn=true;
		},
		logout: (state) => {
			state.token = null;
			state.isLoggedIn = false;
		},
		
	},
});

export const {
	saveAuthToken,logout

} = homeDataSlice.actions;

export default homeDataSlice.reducer;