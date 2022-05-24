import {
	Button,
	Avatar,
	Box,
	Checkbox,
	Container,
	FormControlLabel,
	Paper,
	TextField,
	ToggleButton,
	ToggleButtonGroup,
	Typography,
} from "@mui/material";

export const SignupPage = () => {
	return (
		<Container
			maxWidth="lg"
			sx={{
				my: 8,
			}}
		>
			<Paper
				elevation={8}
				sx={{
					py: 3,
					mx: 20,
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Avatar
					sx={{
						width: 100,
						height: 100,
						mb: 3,
						mx: "auto",
					}}
				/>

				<Typography variant="h5" mb={8} textAlign="center">
					Mr. John Doe
				</Typography>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						rowGap: 4,
						px: 4,
					}}
				>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<TextField
							label="First Name"
							sx={{
								minWidth: 300,
							}}
						/>
						<TextField
							label="Last Name"
							sx={{
								minWidth: 300,
							}}
						/>
					</Box>

					<TextField label="Email" />
					<TextField label="Phone" />

					<ToggleButtonGroup exclusive fullWidth>
						<ToggleButton>Male</ToggleButton>
						<ToggleButton>Female</ToggleButton>
					</ToggleButtonGroup>

					<TextField label="Password" />
					<TextField label="Confirm Password" />

					<ToggleButtonGroup exclusive fullWidth>
						<ToggleButton>Co-Supervisor</ToggleButton>
						<ToggleButton>Supervisor</ToggleButton>
						<ToggleButton>Panel Member</ToggleButton>
					</ToggleButtonGroup>

					<TextField label="Research Area" />

					<FormControlLabel
						label="I agree to the given terms and conditions"
						control={<Checkbox />}
					/>

					<Box
						sx={{
							mt: 5,
							display: "flex",
							flexDirection: "column",
							rowGap: 2,
						}}
					>
						<Button variant="contained">Sign Up</Button>
						<Button variant="outlined" color="secondary">
							Sign In
						</Button>
					</Box>
				</Box>
			</Paper>
		</Container>
	);
};
