import { useState, useEffect } from "react";
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
import { useSelector } from "react-redux";

export const TopicsListPage = () => {
	const [tabIndex, setTabIndex] = useState(0);
	const [projects, setProjects] = useState([]);
	const { getProjects } = useSupervisors();
	const auth = useSelector((s) => s.auth);

	useEffect(() => {
		loadProjects();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const loadProjects = async () => {
		const status =
			tabIndex === 0
				? SUPERVISOR_STATUS.pending
				: SUPERVISOR_STATUS.accepted;
		const _projects = await getProjects(auth.id, status);
		setProjects(_projects);
	};

	return (
		<>
			<Tabs
				value={tabIndex}
				onChange={(e, i) => {
					setTabIndex(i);
					loadProjects();
				}}
				variant="fullWidth"
			>
				<Tab label="Incoming Topics" value={0} />
				<Tab label="Accepted Topics" value={1} />
			</Tabs>

			<Container maxWidth="lg">
				<List>
					<ListItemButton>
						<ListItemAvatar>
							<Avatar />
						</ListItemAvatar>
						<ListItemText
							primary="Topic Name"
							secondary="Group Name"
						/>
					</ListItemButton>
					<ListItemButton>
						<ListItemAvatar>
							<Avatar />
						</ListItemAvatar>
						<ListItemText
							primary="Topic Name"
							secondary="Group Name"
						/>
					</ListItemButton>
					<ListItemButton>
						<ListItemAvatar>
							<Avatar />
						</ListItemAvatar>
						<ListItemText
							primary="Topic Name"
							secondary="Group Name"
						/>
					</ListItemButton>
					{projects.map((project) => (
						<ListItemButton key={project.id}>
							<ListItemAvatar>
								<Avatar />
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
