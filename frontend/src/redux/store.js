import { configureStore } from "@reduxjs/toolkit";
import { pageLoaderSlice } from "./slices/page-loader.slice";
import { notificationSlice } from "./slices/notification.slice";
import { researchFieldsSlice } from "./slices/research-fields.slice";
import { authSlice } from "./slices/auth.slice";

export const store = configureStore({
	reducer: {
		pageLoader: pageLoaderSlice.reducer,
		notification: notificationSlice.reducer,
		researchFields: researchFieldsSlice.reducer,
		auth: authSlice.reducer,
	},
});
