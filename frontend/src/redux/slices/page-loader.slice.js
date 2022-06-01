import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isLoading: false,
};

export const pageLoaderSlice = createSlice({
	name: "pageLoader",
	initialState,
	reducers: {
		startLoading: (state) => {
			state.isLoading = true;
		},
		stopLoading: (state) => {
			state.isLoading = false;
		},
	},
});

export const pageLoaderActions = pageLoaderSlice.actions;
