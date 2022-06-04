import { USER_ROLES as ROLES } from "../../constants/user-roles.constants";

export const homeLinks = [
	{
		url: "/groups.jpg",
		title: "Create Groups",
		width: "30%",
		link: "/create-group",
		roles: [ROLES.STUDENT],
	},
	{
		url: "/feedback.jpg",
		title: "View Feedback",
		width: "30%",
		link: "/view-feedback",
		roles: [ROLES.STUDENT],
	},
	{
		url: "/register.jpg",
		title: "Register Topic",
		width: "30%",
		link: "/register-topic",
		roles: [ROLES.STUDENT],
	},
	{
		url: "/requests.webp",
		title: "Requests",
		width: "30%",
		link: "/requests",
		roles: [ROLES.STUDENT],
	},
	{
		url: "/submitdoc.jpg",
		title: "Submit Documents",
		width: "30%",
		link: "/submit-documents",
		roles: [ROLES.STUDENT],
	},
	{
		url: "/templatedownload.jpg",
		title: "Download Templates",
		width: "30%",
		link: "/download-templates",
		roles: [ROLES.STUDENT],
	},
	{
		url: "/register.jpg",
		title: "View Topics",
		width: "30%",
		link: "/topics",
		roles: [ROLES.CO_SUPERVISOR, ROLES.SUPERVISOR],
	},
	{
		url: "/submitdoc.jpg",
		title: "Document Submissions",
		width: "30%",
		link: "/submissions",
		roles: [ROLES.CO_SUPERVISOR, ROLES.SUPERVISOR],
	},
	{
		url: "/feedback.jpg",
		title: "Sweet Profile",
		width: "30%",
		link: "/profile",
		roles: [
			ROLES.STUDENT,
			ROLES.PANEL_MEMBER,
			ROLES.CO_SUPERVISOR,
			ROLES.SUPERVISOR,
		],
	},
	{
		url: "/groups.jpg",
		title: "View Groups",
		width: "30%",
		link: "/groups",
		roles: [ROLES.PANEL_MEMBER],
	},
];
