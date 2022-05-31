import { Supervisor } from "../models/supervisor.model";

const superVisorsPopulateQueries = [
	{
		path: "staffMember",
		populate: {
			path: "user",
		},
	},
	"researchFields",
	"supervisingProjects",
	"coSupervisingProjects",
];

const createSupervisor = async (staffMember) => {
	const supervisor = new Supervisor({
		staffMemberId: staffMember.id,
	});
	await supervisor.save();

	return getSupervisor(supervisor.id);
};

const getSupervisor = async (id) => {
	const supervisor = await Supervisor.findById(id)
		.populate(superVisorsPopulateQueries[0])
		.populate(superVisorsPopulateQueries[1])
		.populate(superVisorsPopulateQueries[2])
		.populate(superVisorsPopulateQueries[3]);
	return supervisor?.toJSON();
};

const getAllSupervisors = async ({
	supervisorsOnly = false,
	coSupervisorsOnly = false,
}) => {
	let where = {};
	if (supervisorsOnly === true)
		where = {
			"staffMember.user.role": "supervisor",
		};
	else if (coSupervisorsOnly === true)
		where = {
			"staffMember.user.role": "co-supervisor",
		};

	const supervisors = await Supervisor.find()
		.populate(superVisorsPopulateQueries[0])
		.populate(superVisorsPopulateQueries[1])
		.populate(superVisorsPopulateQueries[2])
		.populate(superVisorsPopulateQueries[3])
		.find(where);
	return supervisors.map((supervisor) => supervisor.toJSON());
};

const assignSupervisorToResearchField = async (
	supervisorId,
	researchFieldId
) => {
	const supervisor = await Supervisor.findById(supervisorId);
	supervisor.researchFieldIds.push(researchFieldId);
	await supervisor.save();

	return getSupervisor(supervisorId);
};

const removeSupervisorFromResearchField = async (
	supervisorId,
	researchFieldId
) => {
	const supervisor = await Supervisor.findById(supervisorId);
	supervisor.researchFieldIds = supervisor.researchFieldIds.filter(
		(_researchFieldId) => _researchFieldId !== researchFieldId
	);
	await supervisor.save();

	return getSupervisor(supervisorId);
};

const deleteSupervisor = async (id) => {
	await Supervisor.findByIdAndDelete(id);
};

export const supervisorsService = {
	createSupervisor,
	getSupervisor,
	getAllSupervisors,
	assignSupervisorToResearchField,
	deleteSupervisor,
	removeSupervisorFromResearchField,
};
