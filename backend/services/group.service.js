import { Group } from "../models/group.model";

const createGroup = async (group) => {
	group = {
		name: group.name,
		projectId: group.projectId,
	};

	const _group = new Group(group);
	await _group.save();

	return getGroup(_group.id);
};

const getGroup = (id) => {
	return Group.findById(id).populate("project").populate("students");
};

export const groupsService = {
	createGroup,
	getGroup,
};
