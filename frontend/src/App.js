import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { Home } from "./pages/StudentHomePage/StudentHomePage";
import { CreateGroups } from "./pages/CreateGroupPage/CreateGroupPage";
import { Registertopic } from "./pages/RegisterTopicPage/RegisterTopicPage";
import { ViewSupervisorFeedbackPage } from "./pages/ViewSupervisorFeedbackPage/ViewSupervisorFeedbackPage";
import { Requests } from "./pages/RequestsPage/RequestsPage";
import { SubmitDocumentsPage } from "./pages/SubmitDocumentsPage/SubmitDocumentsPage";
import { DownloadTemplatePage } from "./pages/DownloadTemplatePage/DownloadTemplatePage";
function App() {
  return (
    <>
      <Header />

      <Home />
      <CreateGroups />
      <Registertopic />
      <ViewSupervisorFeedbackPage isCoSupervisor={true} />
      <Requests />
      <SubmitDocumentsPage />
      <DownloadTemplatePage />
      <Footer />
    </>
  );
}

export default App;
