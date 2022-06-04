import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MarkingSchemeView } from "../../components/MarkingSchemeView/MarkingSchemeView";
import { StudentGroupView } from "../../components/StudentGroupView/StudentGroupView";
import { SUBMISSION_TYPES } from "../../constants/submission-types";
import { useGroups } from "../../hooks/groups.hook";
import { useSubmissions } from "../../hooks/submissions.hook";
import { CenterAlignedButton } from "../SubmissionViewPage/SubmissionViewPage";

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
		_area.name = _area.name.charAt(0).toUpperCase() + _area.name.slice(1);

		areas.push(_area);
	});

	return areas;
};

export const PanelMemberGroupPage = () => {
	const urlParams = useParams();
	const { getGroup } = useGroups();
	const { getSubmission, submitMarks } = useSubmissions();
	const [group, setGroup] = useState(null);
	const [areas, setAreas] = useState([]);

	useEffect(() => {
		loadData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleFinish = async () => {
		const _marks = areas.map((area) => {
			return {
				area: area.id,
				givenMarks: area.marks,
			};
		});
		await submitMarks(group.presentation.id, _marks);
		loadData();
	};

	const loadData = async () => {
		const group = await getGroup(urlParams.id);

		if (group.project?.submissions && group.project?.submissions.length) {
			const submissions = group.project?.submissions;
			const presentation = submissions.find(
				(submission) =>
					submission.submissionTypeName ===
					SUBMISSION_TYPES.PRESENTATION
			);

			if (presentation) {
				const submission = await getSubmission(presentation.id);
				if (submission) {
					submission.marked =
						submission.marks && submission.marks.length > 0;
					group.presentation = submission;
					setAreas(buildAreas(submission));
				}
			}
		}

		setGroup(group);
	};

	return group ? (
		<Container
			maxWidth="lg"
			sx={{
				my: 8,
			}}
		>
			<Typography variant="h3" mb={1}>
				{group.name}
			</Typography>
			<Typography variant="h4" mb={8}>
				{group.project?.topic ??
					"This group does not have a project yet"}
			</Typography>

			<Box mb={5}>
				<StudentGroupView id={urlParams.id} />
			</Box>

			{group.presentation && (
				<>
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
							href={group.presentation.documentUrl}
							target="_blank"
						>
							Download Presentation
						</Button>
					</Box>

					<Typography variant="h5" mb={5}>
						Marks Sheet
					</Typography>

					<Box mb={5}>
						<MarkingSchemeView
							areas={areas}
							editable={group.presentation.marked}
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

					{!group.presentation.marked && (
						<CenterAlignedButton
							text="FINISH"
							sx={{
								mb: 10,
							}}
							onClick={handleFinish}
						/>
					)}
				</>
			)}
		</Container>
	) : null;
};
