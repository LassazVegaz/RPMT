import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	message: null,
	type: null,
};

export const notificationSlice = createSlice({
	name: "notification",
	initialState,
	reducers: {
		showNotification: (state, action) => {
			state.message = action.payload.message;
			state.type = action.payload.type;
		},
		hideNotification: (state) => {
			state.message = null;
			state.type = null;
		},
	},
});

export const notificationActions = notificationSlice.actions;
