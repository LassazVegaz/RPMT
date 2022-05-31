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
			handleError = true,
			showSuccessMessage = true,
			showErrorMessage = true,
		}
	) => {
		startLoading();
		try {
			const response = await fn();
			stopLoading();
			if (showSuccessMessage) showNotification("Successful", "info");
			return response;
		} catch (error) {
			stopLoading();
			if (showErrorMessage) showNotification("Failed", "error");
			if (!handleError) throw error;
		}
	};

	return {
		showNotification,
		startLoading,
		stopLoading,
		callApi,
	};
};
