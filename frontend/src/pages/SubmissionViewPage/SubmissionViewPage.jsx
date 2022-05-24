import { Container, Typography, Box, Button } from "@mui/material";
import { MarkingSchemeView } from "../../components/MarkingSchemeView/MarkingSchemeView";
import { StudentGroupView } from "../../components/StudentGroupView/StudentGroupView";

const CenterAlignedButton = ({ text, sx }) => {
	return (
		<Box
			sx={{
				...sx,
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Button
				variant="contained"
				sx={{
					width: 250,
				}}
			>
				{text}
			</Button>
		</Box>
	);
};

export const SubmissionViewPage = () => {
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
				<Button variant="outlined">Download Submission</Button>
			</Box>

			<Box mb={5}>
				<StudentGroupView />
			</Box>

			<CenterAlignedButton
				text="CHAT WITH TEAM"
				sx={{
					mb: 10,
				}}
			/>

			<Typography variant="h5" mb={5}>
				Allocate Marks
			</Typography>

			<Box mb={5}>
				<MarkingSchemeView />
			</Box>

			<CenterAlignedButton
				text="FINISH"
				sx={{
					mb: 10,
				}}
			/>
		</Container>
	);
};
