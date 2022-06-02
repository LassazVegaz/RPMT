import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
	darkMode: false,
};

export const pageLoaderSlice = createSlice({
	name: "pageLoader",
	initialState,
	reducers: {
		startLoading: (state, action) => {
			state.isLoading = true;
			state.darkMode = Boolean(action.payload.darkMode);
		},
		stopLoading: (state) => {
			state.isLoading = false;
		},
	},
});

export const pageLoaderActions = pageLoaderSlice.actions;
