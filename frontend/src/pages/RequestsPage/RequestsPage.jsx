import {
	Button,
	Container,
	Paper,
	Typography,
	Box,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
} from "@mui/material";

export const Requests = () => {
	return (
		<Container
			maxWidth="lg"
			sx={{
				my: 10,
			}}
		>
			<Typography
				variant="h4"
				mb={10}
				textAlign="center"
				fontFamily={"areal"}
			>
				Request Co- Supervisor
			</Typography>

			<Paper
				elevation={8}
				sx={{
					py: 3,
					mx: 20,
				}}
			>
				<Box
					component="form"
					sx={{
						display: "flex",
						flexDirection: "column",
						mx: 4,
						rowGap: 4,
					}}
				>
					<br />

					<Typography
						variant="h6"
						textAlign="left"
						fontFamily={"areal"}
					>
						Choose Co - Supervisor :
					</Typography>

					<Box sx={{ minWidth: 120 }}>
						<FormControl fullWidth>
							<InputLabel id="demo-simple-select-label">
								Co-Supervisor{" "}
							</InputLabel>
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								label="Supervisor"
							>
								<MenuItem value={10}>MR Silva</MenuItem>
								<MenuItem value={20}>MS Perera</MenuItem>
								<MenuItem value={30}>
									MS Dilani Fonseka
								</MenuItem>
								<MenuItem value={40}>MR Rudrigu</MenuItem>
							</Select>
						</FormControl>
						<br />
						<br />
					</Box>

					<Box
						sx={{
							my: 4,
							px: 30,
							display: "flex",
							flexDirection: "column",
							rowGap: 2,
						}}
					>
						<Button variant="contained">Submit</Button>
					</Box>
				</Box>
			</Paper>
		</Container>
	);
};
