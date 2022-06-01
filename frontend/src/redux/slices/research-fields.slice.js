import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const researchFieldsSlice = createSlice({
	name: "researchFields",
	initialState,
	reducers: {
		setResearchFields: (state, action) => {
			return action.payload;
		},
	},
});

export const researchFieldsActions = researchFieldsSlice.actions;
