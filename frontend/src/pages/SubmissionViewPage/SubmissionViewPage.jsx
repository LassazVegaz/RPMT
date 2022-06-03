import { Container, Typography, Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MarkingSchemeView } from "../../components/MarkingSchemeView/MarkingSchemeView";
import { StudentGroupView } from "../../components/StudentGroupView/StudentGroupView";
import { USER_ROLES } from "../../constants/user-roles.constants";
import { useSupervisors } from "../../hooks/supervisors.hook";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";

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
	const urlParams = useParams();
	const [submission, setSubmission] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const auth = useSelector((s) => s.auth);
	const { getSubmission } = useSupervisors();

	useEffect(() => {
		if (urlParams.id) loadData();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [urlParams]);

	const isSupervisor = auth.role === USER_ROLES.SUPERVISOR;

	const loadData = async () => {
		setIsLoading(true);

		const submission = await getSubmission(urlParams.id);
		submission.marked = submission.marks && submission.marks.length > 0;

		setSubmission(submission);
		setIsLoading(false);
	};

	return !isLoading && !submission ? (
		<NotFoundPage desc="Submission not found" />
	) : isLoading ? null : (
		<Container
			maxWidth="lg"
			sx={{
				my: 8,
			}}
		>
			<Typography variant="h3" mb={5}>
				{submission.project.topic}
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
				<StudentGroupView id={submission.project.group.id} />
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

			{isSupervisor && !submission.marked && (
				<CenterAlignedButton
					text="FINISH"
					sx={{
						mb: 10,
					}}
				/>
			)}
		</Container>
	);
};
