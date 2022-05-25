import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { Home } from "./pages/StudentHomePage/StudentHomePage";
import { CreateGroups } from "./pages/CreateGroupPage/CreateGroupPage";
import { Registertopic } from "./pages/RegisterTopicPage/RegisterTopicPage";
import { ViewSupervisorFeedbackPage } from "./pages/ViewSupervisorFeedbackPage/ViewSupervisorFeedbackPage";
function App() {
  return (
    <>
      <Header />

      <Home />
      <CreateGroups />
      <Registertopic />
      <ViewSupervisorFeedbackPage />
      <Footer />
    </>
  );
}

export default App;
