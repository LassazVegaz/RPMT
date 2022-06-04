import { Group } from "../models/group.model";

const getAssignedGroups = async (id) => {
	const groups = await Group.find({ panelMemberId: id }).populate("project");
	return groups;
};

const getGroup = async (id) => {
	const group = await Group.findById(id)
		.populate({
			path: "project",
			populate: {
				path: "submissions",
			},
		})
		.exec();

	return group;
};

export const panelMemberServices = {
	getAssignedGroups,
	getGroup,
};
