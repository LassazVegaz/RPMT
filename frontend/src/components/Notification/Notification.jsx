import { Alert } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { notificationActions } from "../../redux/slices/notification.slice";

export const Notification = () => {
	const notification = useSelector((state) => state.notification);
	const dispatch = useDispatch();

	useEffect(() => {
		if (notification.message) {
			const timeout = setTimeout(closeNotification, 3000);

			return () => {
				if (timeout) clearTimeout(timeout);
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [notification.message]);

	const closeNotification = () => {
		if (notification.message)
			dispatch(notificationActions.hideNotification());
	};

	return notification.message && notification.type ? (
		<Alert
			severity={notification.type}
			onClose={closeNotification}
			sx={{
				position: "fixed",
				right: 0,
				top: 0,
				zIndex: "1101",
			}}
		>
			{notification.message}
		</Alert>
	) : null;
};
