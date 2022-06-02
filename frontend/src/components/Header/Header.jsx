import {
	AppBar,
	Avatar,
	Box,
	Button,
	Container,
	Toolbar,
	Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import logo from "../../resources/logo.svg";
import { headerLinks } from "./header-links";

// navigation bar has two parts

// bottom navigation part
const BottomNav = () => {
	const auth = useSelector((s) => s.auth);

	let links = auth
		? headerLinks.filter((l) => l.roles.includes(auth.role))
		: [];

	return auth ? (
		<Container
			maxWidth="xl"
			sx={{
				backgroundColor: "#e3ece1",
			}}
		>
			<Toolbar>
				<Box display="flex" width="100%" justifyContent="flex-end">
					{links.map((link) => (
						<Button
							sx={{
								color: "black",
							}}
							key={link.link}
						>
							{link.name}
						</Button>
					))}
				</Box>
			</Toolbar>
		</Container>
	) : null;
};

// top navigation part
const TopNav = () => {
	const auth = useSelector((s) => s.auth);

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

				{auth && <Avatar></Avatar>}
			</Toolbar>
		</Container>
	);
};

export const Header = () => {
	const auth = useSelector((s) => s.auth);

	return (
		<>
			<AppBar>
				<TopNav />

				<BottomNav />
			</AppBar>

			{auth && <Toolbar />}
			<Toolbar />
		</>
	);
};
