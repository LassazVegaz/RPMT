import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setLoggedUser: (_state, action) => {
			return action.payload;
		},
		removeLoggedUser: () => {
			return null;
		},
	},
});

export const authActions = authSlice.actions;
