import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { PageLoader } from "./components/PageLoader/PageLoader";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import { Notification } from "./components/Notification/Notification";
import { useEffect } from "react";
import { useInitFetching } from "./hooks/init-data-fetch.hook";
import { SignInPage } from "./pages/SignInPage/SignInPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

function App() {
	const { fetchInitData } = useInitFetching();
	const auth = useSelector((s) => s.auth);

	useEffect(() => {
		fetchInitData();
	});

	return (
		<>
			<Header />

			<Routes>
				{!auth && (
					<>
						<Route path="/" element={<SignupPage />} />
						<Route path="/login" element={<SignInPage />} />
					</>
				)}
				{auth && (
					<>
						<Route path="/" element={<ProfilePage />} />
					</>
				)}

				<Route path="*" element={<NotFoundPage />} />
			</Routes>

			<Footer />

			<PageLoader />

			<Notification />
		</>
	);
}

export default App;
