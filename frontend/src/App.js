import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { SignInPage } from "./pages/SignInPage/SignInPage";

import { Home } from "./pages/Student/Home";
import { CreateGroups } from "./pages/Student/CreateGroups";
import { Registertopic } from "./pages/Student/Registertopic";

function App() {
  return (
    <>
      <Header />

      <SignInPage />
      <Home />
      <CreateGroups />
      <Registertopic />

      <Footer />
    </>
  );
}

export default App;
