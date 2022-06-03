import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { StudentGroupView } from "../../components/StudentGroupView/StudentGroupView";
import { useProject } from "../../hooks/project.hook";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { USER_ROLES } from "../../constants/user-roles.constants";
import { useSupervisors } from "../../hooks/supervisors.hook";
import { SUPERVISOR_STATUS } from "../../constants/project-supervisor-status.constant";
import { SUBMISSION_TYPES } from "../../constants/submission-types";

export const TopicViewPage = () => {
	const { getProject } = useProject();
	const { acceptProject, rejectProject } = useSupervisors();
	const urlParams = useParams();
	const navigate = useNavigate();
	const [project, setProject] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const auth = useSelector((s) => s.auth);

	useEffect(() => {
		if (urlParams.id) loadData();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [urlParams]);

	const loadData = async () => {
		setIsLoading(true);
		const project = await getProject(urlParams.id);

		project.accepted = isSupervisor
			? project.supervisorId.status === SUPERVISOR_STATUS.accepted
			: null;

		project.topicSubmission =
			project.submissions &&
			project.accepted &&
			project.submissions.find(
				(sub) =>
					sub.submissionTypeName === SUBMISSION_TYPES.TOPIC_DOCUMENT
			);

		setProject(project);
		setIsLoading(false);
	};

	const buttonWidth = 250;
	const isSupervisor = auth.role === USER_ROLES.SUPERVISOR;

	return !isLoading && !project ? (
		<NotFoundPage desc="Project not found" />
	) : isLoading ? null : (
		<Container
			maxWidth="lg"
			sx={{
				my: 8,
			}}
		>
			<Typography variant="h3" mb={5}>
				{project.topic}
			</Typography>

			<Box
				sx={{
					mb: 6,
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Typography>Submitted date: 03/03/2022</Typography>
				{isSupervisor && project.accepted && (
					<Typography>Accepted date: 17/03/2022</Typography>
				)}
			</Box>

			<Box>
				<StudentGroupView id={project.group.id} />
			</Box>

			<Box
				sx={{
					mt: 10,
					display: "flex",
					justifyContent: "space-evenly",
				}}
			>
				{isSupervisor && !project.accepted && (
					<Button
						variant="contained"
						sx={{
							width: buttonWidth,
						}}
						onClick={async () => {
							await acceptProject(auth.id, project.id);
							loadData();
						}}
					>
						ACCEPT
					</Button>
				)}
				<Button
					variant="contained"
					sx={{
						width: buttonWidth,
					}}
				>
					CHAT WITH TEAM
				</Button>
				{isSupervisor && !project.accepted && (
					<Button
						variant="contained"
						color="secondary"
						sx={{
							width: buttonWidth,
						}}
						onClick={async () => {
							await rejectProject(auth.id, project.id);
							await loadData();
							navigate("/topics");
						}}
					>
						REJECT
					</Button>
				)}
			</Box>
		</Container>
	);
};
