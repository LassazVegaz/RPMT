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
import { USER_ROLES } from "./constants/user-roles.constants";
import { TopicsListPage } from "./pages/TopicsListPage/TopicsListPage";

function App() {
	const { fetchInitData } = useInitFetching();
	const auth = useSelector((s) => s.auth);

	useEffect(() => {
		fetchInitData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
				{auth &&
					(auth.role === USER_ROLES.SUPERVISOR ||
						auth.role === USER_ROLES.CO_SUPERVISOR) && (
						<>
							<Route
								path="/topics"
								element={<TopicsListPage />}
							/>
							<Route path="/profile" element={<ProfilePage />} />
							<Route path="/" element={<div>Home</div>} />
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
