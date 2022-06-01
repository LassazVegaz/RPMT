import { useDispatch } from "react-redux";
import { notificationActions } from "../redux/slices/notification.slice";
import { pageLoaderActions } from "../redux/slices/page-loader.slice";

export const useApi = () => {
	const dispatch = useDispatch();

	const showNotification = (message, type) => {
		dispatch(notificationActions.showNotification({ message, type }));
	};

	const startLoading = () => {
		dispatch(pageLoaderActions.startLoading());
	};

	const stopLoading = () => {
		dispatch(pageLoaderActions.stopLoading());
	};

	const callApi = async (
		fn,
		{
			throwError = true,
			showSuccessMessage = true,
			showErrorMessage = true,
			successMessage = "Successfull",
			errorMessage = "Failed",
		} = {}
	) => {
		try {
			startLoading();
			const response = await fn();
			stopLoading();
			if (showSuccessMessage) showNotification(successMessage, "info");
			return response;
		} catch (error) {
			stopLoading();
			if (showErrorMessage) showNotification(errorMessage, "error");
			if (throwError) throw error;
		}
	};

	return {
		showNotification,
		startLoading,
		stopLoading,
		callApi,
	};
};
