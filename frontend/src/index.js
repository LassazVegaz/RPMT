import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./theme";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>
);
