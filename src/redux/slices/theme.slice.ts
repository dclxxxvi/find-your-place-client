import { createSlice } from '@reduxjs/toolkit';

interface ThemeState {
	isDarkTheme: boolean;
}

const initialState: ThemeState = {
	isDarkTheme: true,
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme(state) {
			state.isDarkTheme = !state.isDarkTheme;
		},
	},
});

export const { toggleTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
