import { createTheme } from "@mui/material";

export const theme = createTheme({
	palette: {
		type: "light",
		primary: {
			main: "#055a0e",
			contrastText: "#f5f5f5",
		},
		secondary: {
			main: "#f50057",
		},
		background: {
			default: "#f1f1ee",
			paper: "#f2f9f2",
		},
		text: {
			primary: "rgba(4,4,4,0.87)",
		},
	},
});
