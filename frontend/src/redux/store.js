import { configureStore } from "@reduxjs/toolkit";
import { pageLoaderSlice } from "./slices/page-loader.slice";
import { notificationSlice } from "./slices/notification.slice";

export const store = configureStore({
	reducer: {
		pageLoader: pageLoaderSlice.reducer,
		notification: notificationSlice.reducer,
	},
});
