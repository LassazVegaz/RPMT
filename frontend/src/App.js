import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { Home } from "./pages/StudentHomePage/StudentHomePage";
import { CreateGroups } from "./pages/CreateGroupPage/CreateGroupPage";
import { Registertopic } from "./pages/RegisterTopicPage/RegisterTopicPage";

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
