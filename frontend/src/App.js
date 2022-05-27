import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { Home } from "./pages/StudentHomePage/StudentHomePage";
import { CreateGroups } from "./pages/CreateGroupPage/CreateGroupPage";
import { Registertopic } from "./pages/RegisterTopicPage/RegisterTopicPage";
import { ViewSupervisorFeedbackPage } from "./pages/ViewSupervisorFeedbackPage/ViewSupervisorFeedbackPage";
import { Requests } from "./pages/RequestsPage/RequestsPage";
import { SubmitDocumentsPage } from "./pages/SubmitDocumentsPage/SubmitDocumentsPage";
import { DownloadTemplatePage } from "./pages/DownloadTemplatePage/DownloadTemplatePage";
import { AdminHomePage } from "./pages/AdminHomePage/AdminHomePage";
import {AddPanelMemberPage} from "./pages/AddPanleMember/AddPanelMemberPage";
import {CreateMarkingScheme} from "./pages/CreateMarkingScheme/CreateMarkingScheme";
import {ViewProfilesPage} from "./pages/ViewProfilesPage/ViewProfilesPage";
import { UploadDocumentPage } from "./pages/UploadDocumentPage/UploadDocumentPage";
import { AllocatePanelMembersPage } from "./pages/AllocatePnaleMembersPage/AllocatePanelMembersPage";
import { ViewAddedPanelMembers } from "./pages/ViewAddedPanelMembers/ViewAddedPanelMembers";
import { GroupDetailsPage } from "./pages/GroupDetailsPage/GroupDetailsPage";
import { CreateSubmissionTypePage } from "./pages/CreateSubmissionTypePage/CreateSubmissionTypePage";
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
      <AdminHomePage/>
      <AddPanelMemberPage/>
      <CreateMarkingScheme/>
      <ViewProfilesPage/>
      <UploadDocumentPage/>
      <AllocatePanelMembersPage/>
      <ViewAddedPanelMembers/>
      <GroupDetailsPage/>
      <CreateSubmissionTypePage/>
      <Footer />
    </>
  );
}

export default App;
