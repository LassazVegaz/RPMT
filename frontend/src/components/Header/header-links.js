import { USER_ROLES } from "../../constants/user-roles.constants";

export const headerLinks = [
  {
    name: "Home",
    link: "/",
    roles: [
      USER_ROLES.ADMIN,
      USER_ROLES.CO_SUPERVISOR,
      USER_ROLES.SUPERVISOR,
      USER_ROLES.PANEL_MEMBER,
      USER_ROLES.STUDENT,
    ],
  },

  {
    name: "Topics",
    link: "/topics",
    roles: [USER_ROLES.SUPERVISOR, USER_ROLES.CO_SUPERVISOR],
  },
  {
    name: "Document-Submssions",
    link: "/document-submissions",
    roles: [USER_ROLES.SUPERVISOR, USER_ROLES.CO_SUPERVISOR],
  },
  {
    name: "Create-Groups",
    link: "/create-group",
    roles: [USER_ROLES.STUDENT],
  },

  {
    name: "View-Feedback",
    link: "/view-feedback",
    roles: [USER_ROLES.STUDENT],
  },
  {
    name: "Register-Topic",
    link: "/register-topic",
    roles: [USER_ROLES.STUDENT],
  },
  {
    name: "Requests",
    link: "/requests",
    roles: [USER_ROLES.STUDENT],
  },
  {
    name: "Submit-Documents",
    link: "/submit-documents",
    roles: [USER_ROLES.STUDENT],
  },
  {
    name: "Download-Templates",
    link: "/download-templates",
    roles: [USER_ROLES.STUDENT],
  },
];
