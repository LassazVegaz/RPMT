import {
	Button,
	Container,
	Paper,
	Typography,
	Box,
	TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const SignInPage = () => {
	const navigate = useNavigate();

	return (
		<Container
			maxWidth="lg"
			sx={{
				my: 10,
			}}
		>
			<Paper
				elevation={8}
				sx={{
					py: 3,
					mx: 20,
				}}
			>
				<Typography variant="h4" mb={10} textAlign="center">
					Get back to your Account!!
				</Typography>

				<Box
					component="form"
					sx={{
						display: "flex",
						flexDirection: "column",
						mx: 4,
						rowGap: 4,
					}}
				>
					<TextField label="Email" />
					<TextField label="Password" type="password" />

					<Box
						sx={{
							my: 4,
							px: 20,
							display: "flex",
							flexDirection: "column",
							rowGap: 2,
						}}
					>
						<Button variant="contained">Sign In</Button>
						<Button
							variant="outlined"
							color="secondary"
							onClick={() => navigate("/")}
						>
							Sign Up
						</Button>
					</Box>
				</Box>
			</Paper>
		</Container>
	);
};
