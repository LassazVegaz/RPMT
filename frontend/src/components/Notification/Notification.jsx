import { Alert } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { notificationActions } from "../../redux/slices/notification.slice";

export const Notification = () => {
	const notification = useSelector((state) => state.notification);
	const dispatch = useDispatch();

	useEffect(() => {
		let timeout = null;
		if (notification.message) {
			timeout = setTimeout(() => {
				dispatch(notificationActions.hideNotification());
			}, 3000);
		}

		return () => {
			if (timeout) clearTimeout(timeout);
		};
	});

	return notification.message && notification.type ? (
		<Alert
			severity={notification.type}
			onClose={() => {}}
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
