import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
	Avatar,
	Container,
	List,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	Tab,
	Tabs,
} from "@mui/material";
import { useSupervisors } from "../../hooks/supervisors.hook";
import { SUPERVISOR_STATUS } from "../../constants/project-supervisor-status.constant";
import { Topic } from "@mui/icons-material";

export const TopicsListPage = () => {
	const [tabIndex, setTabIndex] = useState(SUPERVISOR_STATUS.pending);
	const [projects, setProjects] = useState([]);
	const { getProjects } = useSupervisors();
	const auth = useSelector((s) => s.auth);
	const navigate = useNavigate();

	useEffect(() => {
		loadProjects();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tabIndex]);

	const loadProjects = async () => {
		const _projects = await getProjects(auth.id, tabIndex);
		setProjects(_projects);
	};

	return (
		<>
			<Tabs
				value={tabIndex}
				onChange={(_e, status) => {
					setTabIndex(status);
				}}
				variant="fullWidth"
			>
				<Tab
					label="Incoming Topics"
					value={SUPERVISOR_STATUS.pending}
				/>
				<Tab
					label="Accepted Topics"
					value={SUPERVISOR_STATUS.accepted}
				/>
			</Tabs>

			<Container
				maxWidth="lg"
				sx={{
					minHeight: "60.6vh",
				}}
			>
				<List>
					{projects.map((project) => (
						<ListItemButton
							key={project.id}
							onClick={() => navigate("/topics/" + project.id)}
						>
							<ListItemAvatar>
								<Avatar>
									<Topic />
								</Avatar>
							</ListItemAvatar>
							<ListItemText
								primary={project.topic}
								secondary={project.group.name}
							/>
						</ListItemButton>
					))}
				</List>
			</Container>
		</>
	);
};
