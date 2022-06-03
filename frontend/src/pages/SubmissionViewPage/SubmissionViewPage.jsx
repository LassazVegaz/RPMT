import { Container, Typography, Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { MarkingSchemeView } from "../../components/MarkingSchemeView/MarkingSchemeView";
import { StudentGroupView } from "../../components/StudentGroupView/StudentGroupView";
import { USER_ROLES } from "../../constants/user-roles.constants";
import { useSupervisors } from "../../hooks/supervisors.hook";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";

const CenterAlignedButton = ({ text, sx, onClick }) => {
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
				onClick={onClick}
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
	const [areas, setAreas] = useState([]);
	const auth = useSelector((s) => s.auth);
	const { getSubmission, submitMarks } = useSupervisors();

	useEffect(() => {
		if (urlParams.id) loadData();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [urlParams]);

	const isSupervisor = auth.role === USER_ROLES.SUPERVISOR;

	const loadData = async () => {
		setIsLoading(true);

		const submission = await getSubmission(urlParams.id);
		submission.marked = submission.marks && submission.marks.length > 0;

		buildAreas(submission);

		setSubmission(submission);
		setIsLoading(false);
	};

	const handleFinish = async () => {
		const _marks = areas.map((area) => {
			return {
				area: area.id,
				givenMarks: area.marks,
			};
		});
		await submitMarks(submission.id, _marks);
		loadData();
	};

	const buildAreas = (submission) => {
		const areas = [];
		const _areas = submission.markingSchema.markingSchemaAreas;

		_areas.forEach((area) => {
			const _area = {
				...area,
				marks: submission.marked
					? submission.marks.find((mark) => mark.area === area.id)
							.givenMarks
					: 0,
			};
			_area.name =
				_area.name.charAt(0).toUpperCase() + _area.name.slice(1);

			areas.push(_area);
		});

		setAreas(areas);
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
				<Button
					variant="outlined"
					href={submission.documentUrl}
					target="_blank"
				>
					Download Submission
				</Button>
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
				Marks Sheet
			</Typography>

			<Box mb={5}>
				<MarkingSchemeView
					areas={areas}
					editable={!submission.marked}
					onChange={(i, marks) => {
						const _areas = areas.map((area, index) => {
							if (index === i) {
								return {
									...area,
									marks: marks,
								};
							}
							return area;
						});
						setAreas(_areas);
					}}
				/>
			</Box>

			{isSupervisor && !submission.marked && (
				<CenterAlignedButton
					text="FINISH"
					sx={{
						mb: 10,
					}}
					onClick={handleFinish}
				/>
			)}
		</Container>
	);
};
