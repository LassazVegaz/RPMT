import { Typography } from "@mui/material";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

function App() {
	return (
		<>
			<Header />

			<Typography mt={30} mb={33} variant="h1">
				Large content
			</Typography>

			<Footer />
		</>
	);
}

export default App;
