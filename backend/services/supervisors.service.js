import { Supervisor } from "../models/supervisor.model";

const createSupervisor = async (staffMember) => {
	const supervisor = new Supervisor({
		staffMemberId: staffMember.id,
		type: "supervisor",
	});
	await supervisor.save();
	return supervisor.toJSON();
};

const createCoSupervisor = async (staffMember) => {
	const supervisor = new Supervisor({
		staffMemberId: staffMember.id,
		type: "co-supervisor",
	});
	await supervisor.save();
	return supervisor.toJSON();
};

export const supervisorsService = {
	createSupervisor,
};
