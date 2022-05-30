import { ProjectSupervisor } from "../models/project--supervisor.model";
import { Supervisor } from "../models/supervisor.model";

const superVisorsPopulateQueries = [
	{
		path: "staffMember",
		populate: {
			path: "user",
		},
	},
	{
		path: "researchFields",
	},
];

const createSupervisor = async (staffMember) => {
	const supervisor = new Supervisor({
		staffMemberId: staffMember.id,
	});
	await supervisor.save();

	return getSupervisor(supervisor.id);
};

const getSupervisor = async (id) => {
	const supervisor = await Supervisor.findById(id).populate(
		superVisorsPopulateQueries
	);
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

	const supervisors = await Supervisor.populate(
		superVisorsPopulateQueries
	).find(where);
	return supervisors.map((supervisor) => supervisor.toJSON());
};

const assignSupervisorToResearchField = async (
	supervisorId,
	researchFieldId
) => {
	const supervisor = await Supervisor.findById(supervisorId);
	supervisor.researchFields.push(researchFieldId);
	await supervisor.save();

	return getSupervisor(supervisorId);
};

const getSupervisorProjects = async (supervisorId, pending) => {
	const projects = ProjectSupervisor.find({
		supervisorId,
		pending: Boolean(pending),
	})
		.populate("project")
		.select("project");

	return projects.map((project) => project.toJSON());
};

export const supervisorsService = {
	createSupervisor,
	getSupervisor,
	getAllSupervisors,
	assignSupervisorToResearchField,
	getSupervisorProjects,
};
