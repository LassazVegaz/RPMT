import { Group } from "@mui/icons-material";
import {
	Container,
	List,
	ListItemAvatar,
	ListItemButton,
	ListItemText,
	Typography,
} from "@mui/material";

export const PanelMemberGroupsPage = () => {
	return (
		<Container
			maxWidth="lg"
			sx={{
				my: 5,
			}}
		>
			<Typography variant="h4">Groups Assigned to You</Typography>

			<List
				sx={{
					mt: 8,
				}}
			>
				<ListItemButton>
					<ListItemAvatar>
						<Group />
					</ListItemAvatar>
					<ListItemText primary="Title" secondary="Sub text" />
				</ListItemButton>
				<ListItemButton>
					<ListItemAvatar>
						<Group />
					</ListItemAvatar>
					<ListItemText primary="Title" secondary="Sub text" />
				</ListItemButton>
				<ListItemButton>
					<ListItemAvatar>
						<Group />
					</ListItemAvatar>
					<ListItemText primary="Title" secondary="Sub text" />
				</ListItemButton>
			</List>
		</Container>
	);
};
