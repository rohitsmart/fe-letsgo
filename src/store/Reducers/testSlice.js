import { createSlice } from '@reduxjs/toolkit';

export const homeDataSlice = createSlice({
	name: 'homepage',
	initialState: {
		authToken: "",
		languageChange:"en"
	},
	reducers: {
		// Redux Toolkit allows us to write "mutating" logic in reducers. It
		// doesn't actually mutate the state because it uses the immer library,
		// which detects changes to a "draft state" and produces a brand new
		// immutable state based off those changes
		saveAuthToken: (state, action) => {
			state.authToken = action.payload;
		},
		saveLanguageChange:(state, action) =>{
			state.languageChange = action.payload;
		}
	},
});

export const {
	saveAuthToken, saveLanguageChange

} = homeDataSlice.actions;

export default homeDataSlice.reducer;