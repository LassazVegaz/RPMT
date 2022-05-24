import { Box, Button, Container, Typography } from "@mui/material";
import { StudentGroupView } from "../../components/StudentGroupView/StudentGroupView";

export const TopicViewPage = () => {
	const buttonWidth = 250;

	return (
		<Container
			maxWidth="lg"
			sx={{
				my: 8,
			}}
		>
			<Typography variant="h3" mb={5}>
				Research Topic
			</Typography>

			<Box
				sx={{
					mb: 6,
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Typography>Submitted date: 03/03/2022</Typography>
				<Typography>Accepted date: 17/03/2022</Typography>
			</Box>

			<Box>
				<StudentGroupView />
			</Box>

			<Box
				sx={{
					mt: 10,
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Button
					variant="contained"
					sx={{
						width: buttonWidth,
					}}
				>
					ACCEPT
				</Button>
				<Button
					variant="contained"
					sx={{
						width: buttonWidth,
					}}
				>
					CHAT WITH TEAM
				</Button>
				<Button
					variant="contained"
					color="secondary"
					sx={{
						width: buttonWidth,
					}}
				>
					REJECT
				</Button>
			</Box>
		</Container>
	);
};
