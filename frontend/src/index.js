import React from "react";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { theme } from "./theme";
import { store } from "./redux/store";
import App from "./App";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</Provider>
);
