import { useState } from "react";
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

export const TopicsListPage = () => {
	const [tabIndex, setTabIndex] = useState(0);

	return (
		<>
			<Tabs
				value={tabIndex}
				onChange={(e, i) => setTabIndex(i)}
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
				</List>
			</Container>
		</>
	);
};
