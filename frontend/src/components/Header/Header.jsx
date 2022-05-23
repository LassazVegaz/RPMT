import {
	AppBar,
	Avatar,
	Box,
	Button,
	Container,
	Toolbar,
	Typography,
} from "@mui/material";
import logo from "../../resources/logo.svg";

// links to to be used in nav
const links = ["Home", "About Us", "Contact Us"];

// navigation bar has two parts

// bottom navigation part
const BottomNav = () => {
	return (
		<Container
			maxWidth="xl"
			sx={{
				backgroundColor: "#e3ece1",
			}}
		>
			<Toolbar>
				<Box display="flex" width="100%" justifyContent="flex-end">
					{links.map((link, i) => (
						<Button
							sx={{
								color: "black",
							}}
							key={i}
						>
							{link}
						</Button>
					))}
				</Box>
			</Toolbar>
		</Container>
	);
};

// top navigation part
const TopNav = () => {
	return (
		<Container maxWidth="xl">
			<Toolbar
				sx={{
					justifyContent: "space-between",
				}}
			>
				<Box display="flex" alignItems="center">
					<Box component="img" src={logo} width={40} />
					<Typography ml={3}>Name</Typography>
				</Box>

				<Avatar></Avatar>
			</Toolbar>
		</Container>
	);
};

export const Header = () => {
	return (
		<>
			<AppBar>
				<TopNav />

				<BottomNav />
			</AppBar>

			<Toolbar />
			<Toolbar />
		</>
	);
};
