import { Box, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";

export const PageLoader = () => {
	const loading = useSelector((s) => s.pageLoader.isLoading);

	return loading ? (
		<Box
			sx={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				zIndex: 1100,
				backgroundColor: "rgba(0,0,0,0.5)",
			}}
		>
			<CircularProgress
				size={60}
				sx={{
					color: "#0cb6df",
				}}
			/>
		</Box>
	) : null;
};
