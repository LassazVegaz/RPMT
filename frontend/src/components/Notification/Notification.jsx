import { Alert } from "@mui/material";

export const Notification = () => {
	return (
		<Alert
			severity="error"
			onClose={() => {}}
			sx={{
				position: "fixed",
				right: 0,
				top: 0,
				zIndex: "1101",
			}}
		>
			Process failed
		</Alert>
	);
};
