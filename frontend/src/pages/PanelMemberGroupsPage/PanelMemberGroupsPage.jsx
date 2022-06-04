import { Group } from "@mui/icons-material";
import {
	Container,
	List,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { usePanelMembers } from "../../hooks/panel-member.hook";

export const PanelMemberGroupsPage = () => {
	const { getAssignedGroups } = usePanelMembers();
	const [groups, setGroups] = useState([]);

	useEffect(() => {
		loadData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const loadData = async () => {
		const _groups = await getAssignedGroups();
		setGroups(_groups);
	};

	return (
		<Container
			maxWidth="lg"
			sx={{
				my: 5,
				minHeight: "56.2vh",
			}}
		>
			<Typography variant="h4">Groups Assigned to You</Typography>

			<List
				sx={{
					mt: 8,
				}}
			>
				{groups.map((g) => (
					<ListItemButton key={g.id}>
						<ListItemAvatar>
							<Group />
						</ListItemAvatar>
						<ListItemText
							primary={g.name}
							secondary={g.project?.topic ?? "No project yet"}
						/>
					</ListItemButton>
				))}
			</List>
		</Container>
	);
};
