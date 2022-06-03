import { Box, Button, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StudentGroupView } from "../../components/StudentGroupView/StudentGroupView";
import { useProject } from "../../hooks/project.hook";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";

export const TopicViewPage = () => {
	const { getProject } = useProject();
	const urlParams = useParams();
	const [project, setProject] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (urlParams.id) loadData();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [urlParams]);

	const loadData = async () => {
		setIsLoading(true);
		const project = await getProject(urlParams.id);
		setProject(project);
		setIsLoading(false);
	};

	const buttonWidth = 250;

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
