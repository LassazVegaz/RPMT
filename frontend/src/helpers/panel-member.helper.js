import endpoints from "../end-points.json";
import { axiosApp } from "./axios-app";

const createPanelMember = async (panelMember) => {
	const response = await axiosApp.post(
		endpoints.panelMembers.common,
		panelMember
	);
	return response.data;
};

const updatePanelMember = async (panelMember) => {
	const response = await axiosApp.put(
		endpoints.panelMembers.common,
		panelMember
	);
	return response.data;
};

const getAssignedGroups = async () => {
	const response = await axiosApp.get(endpoints.panelMembers.groups);
	return response.data;
};

export const panelMemberHelpers = {
	createPanelMember,
	updatePanelMember,
	getAssignedGroups,
};
