import { Container, Typography } from "@mui/material";

export const NotFoundPage = () => {
	return (
		<Container
			maxWidth="lg"
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "67vh",
			}}
		>
			<Typography variant="h1" fontWeight="900">
				404
			</Typography>
			<Typography>Page not found</Typography>
		</Container>
	);
};
