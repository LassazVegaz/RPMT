import { Supervisor } from "../models/supervisor.model";

const createSupervisor = async (staffMember) => {
	const supervisor = new Supervisor({
		staffMemberId: staffMember.id,
	});
	await supervisor.save();

	return getSupervisor(supervisor.id);
};

const getSupervisor = async (id) => {
	const supervisor = await Supervisor.findById(id).populate({
		path: "staffMember",
		populate: {
			path: "user",
		},
	});
	return supervisor?.toJSON();
};

const getAllSupervisors = async () => {
	const supervisors = await Supervisor.find().populate({
		path: "staffMember",
		populate: {
			path: "user",
		},
	});
	return supervisors.map((supervisor) => supervisor.toJSON());
};

export const supervisorsService = {
	createSupervisor,
	getSupervisor,
	getAllSupervisors,
};
