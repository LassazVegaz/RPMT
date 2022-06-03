import { Container, Typography } from "@mui/material";

export const NotFoundPage = ({ desc = "Page not found" }) => {
	return (
		<Container
			maxWidth="lg"
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "67.5vh",
			}}
		>
			<Typography variant="h1" fontWeight="900">
				404
			</Typography>
			<Typography>{desc}</Typography>
		</Container>
	);
};
