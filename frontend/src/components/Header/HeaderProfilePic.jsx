import { Avatar, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth.hook";

export const HeaderProfilePic = () => {
	const [anchorEle, setAnchorEle] = useState(null);
	const auth = useSelector((s) => s.auth);
	const { logout } = useAuth();
	const navigate = useNavigate();

	const handleMenuOpen = (e) => {
		setAnchorEle(e.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEle(null);
	};

	const handleLogout = async () => {
		handleMenuClose();
		logout();
		navigate("/login");
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
				<MenuItem
					onClick={() => {
						handleMenuClose();
						navigate("/profile");
					}}
				>
					<Typography>Profile</Typography>
				</MenuItem>
				<MenuItem onClick={handleLogout}>
					<Typography>Logout</Typography>
				</MenuItem>
			</Menu>
		</>
	) : null;
};
