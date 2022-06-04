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
import { StudentHomePage } from "./pages/StudentHomePage/StudentHomePage";
import { CreateGroups } from "./pages/CreateGroupPage/CreateGroupPage";
import { ViewSupervisorFeedback } from "./pages/ViewSupervisorFeedbackPage/ViewSupervisorFeedbackPage";
import { Registertopic } from "./pages/RegisterTopicPage/RegisterTopicPage";
import { Requests } from "./pages/RequestsPage/RequestsPage";
import { SubmitDocuments } from "./pages/SubmitDocumentsPage/SubmitDocumentsPage";
import { DownloadTemplate } from "./pages/DownloadTemplatePage/DownloadTemplatePage";
import { TopicViewPage } from "./pages/TopicViewPage/TopicViewPage";
import { SubmissionViewPage } from "./pages/SubmissionViewPage/SubmissionViewPage";
import { HomePage } from "./pages/HomePage/HomePage";
import { PanelMemberGroupPage } from "./pages/PanelMemberGroupPage/PanelMemberGroupPage";
import { PanelMemberGroupsPage } from "./pages/PanelMemberGroupsPage/PanelMemberGroupsPage";

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

				{auth && (
					<>
						<Route path="/profile" element={<ProfilePage />} />
						<Route path="/" element={<HomePage />} />
					</>
				)}

				{auth && auth.role === USER_ROLES.STUDENT && (
					<>
						<Route path="/" element={<StudentHomePage />} />
						<Route
							path="/create-group"
							element={<CreateGroups />}
						/>
						<Route
							path="/view-feedback"
							element={<ViewSupervisorFeedback />}
						/>
						<Route
							path="/register-topic"
							element={<Registertopic />}
						/>
						<Route path="/requests" element={<Requests />} />
						<Route
							path="/submit-documents"
							element={<SubmitDocuments />}
						/>
						<Route
							path="/download-templates"
							element={<DownloadTemplate />}
						/>
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
							<Route
								path="/topics/:id"
								element={<TopicViewPage />}
							/>
							<Route
								path="/submissions/:id"
								element={<SubmissionViewPage />}
							/>
						</>
					)}

				{auth && auth.role === USER_ROLES.PANEL_MEMBER && (
					<>
						<Route
							path="/groups"
							element={<PanelMemberGroupsPage />}
						/>
						<Route
							path="/groups/:id"
							element={<PanelMemberGroupPage />}
						/>
						<Route
							path="/submissions/:id"
							element={<SubmissionViewPage />}
						/>
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
