import { Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { PageLoader } from "./components/PageLoader/PageLoader";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import { Notification } from "./components/Notification/Notification";
import { useEffect } from "react";
import { useInitFetching } from "./hooks/init-data-fetch.hook";
import { SignInPage } from "./pages/SignInPage/SignInPage";

function App() {
	const { fetchInitData } = useInitFetching();

	useEffect(() => {
		fetchInitData();
	});

	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<SignupPage />} />
				<Route path="/login" element={<SignInPage />} />
			</Routes>

			<Footer />

			<PageLoader />

			<Notification />
		</>
	);
}

export default App;
