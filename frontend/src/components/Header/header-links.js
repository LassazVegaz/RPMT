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
		name: "Document Submssions",
		link: "/document-submissions",
		roles: [USER_ROLES.SUPERVISOR, USER_ROLES.CO_SUPERVISOR],
	},
];
