import { Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { SignupPage } from "./pages/SignupPage/SignupPage";

function App() {
	return (
		<>
			<Header />

			<Routes>
				<Route path="/" element={<SignupPage />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
