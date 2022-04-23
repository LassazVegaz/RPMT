import { Box, Container, Typography } from "@mui/material";

export const Footer = () => {
	return (
		<Container
			maxWidth="xl"
			sx={{
				backgroundColor: "primary.main",
				py: 5,
			}}
		>
			<Box display="flex" width="100%" justifyContent="center">
				<Typography
					sx={{
						color: "primary.contrastText",
					}}
				>
					Copyrights &copy; 2022
				</Typography>
			</Box>
		</Container>
	);
};
