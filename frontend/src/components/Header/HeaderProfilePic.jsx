import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

const links = ["Profile", "Logout"];

export const HeaderProfilePic = () => {
	const [anchorEle, setAnchorEle] = useState(null);
	const auth = useSelector((s) => s.auth);

	const handleMenuOpen = (e) => {
		setAnchorEle(e.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEle(null);
	};

	return auth ? (
		<>
			<IconButton
				aria-label="account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				onClick={handleMenuOpen}
			>
				<Avatar></Avatar>
			</IconButton>

			<Menu
				anchorEl={anchorEle}
				keepMounted
				open={Boolean(anchorEle)}
				onClose={handleMenuClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				{links.map((link) => (
					<MenuItem key={link} onClick={handleMenuClose}>
						<Typography>{link}</Typography>
					</MenuItem>
				))}
			</Menu>
		</>
	) : null;
};
