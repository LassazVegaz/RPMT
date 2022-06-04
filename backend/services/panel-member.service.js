import { Group } from "../models/group.model";

const getAssignedGroups = async (id) => {
	const groups = await Group.find({ panelMemberId: id }).populate("project");
	return groups;
};

export const panelMemberServices = {
	getAssignedGroups,
};
