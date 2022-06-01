import { SUPERVISOR_STATUS } from "../constants/project-supervisor-status.constant";
import { Project } from "../models/project.model";
import { Supervisor } from "../models/supervisor.model";

const superVisorsPopulateQueries = [
	{
		path: "staffMember",
		populate: {
			path: "user",
			select: {
				email: 1,
				role: 1,
				_id: 1,
			},
		},
	},
	"researchFields",
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
		.populate(superVisorsPopulateQueries[1]);
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

const _getProjects = async (supervisorId, status) => {
	return Project.find({
		$or: [
			{
				"supervisorId.id": supervisorId,
				"supervisorId.status": status,
			},
			{
				"coSupervisorId.id": supervisorId,
				"coSupervisorId.status": status,
			},
		],
	});
};

const getProjects = async (supervisorId, status = "all") => {
	if (!Boolean(status) || status === "all") {
		return {
			accepted: await _getProjects(
				supervisorId,
				SUPERVISOR_STATUS.accepted
			),
			pending: await _getProjects(
				supervisorId,
				SUPERVISOR_STATUS.pending
			),
		};
	} else return _getProjects(supervisorId, status);
};

const acceptProject = async (projectId) => {
	const project = await Project.findById(projectId);
	project.supervisorId.status = SUPERVISOR_STATUS.accepted;
	await project.save();
};

const rejectProject = async (projectId) => {
	const project = await Project.findById(projectId);
	(project.supervisorId.status = SUPERVISOR_STATUS.rejected),
		await project.save();
};

const getSupervisorByUserId = async (userId) => {
	const supervisor = await Supervisor.find()
		.populate(superVisorsPopulateQueries[0])
		.populate(superVisorsPopulateQueries[1])
		.findOne({
			"staffMember.userId": userId,
		});
	return supervisor?.toJSON();
};

export const supervisorsService = {
	createSupervisor,
	getSupervisor,
	getAllSupervisors,
	assignSupervisorToResearchField,
	deleteSupervisor,
	removeSupervisorFromResearchField,
	getProjects,
	acceptProject,
	rejectProject,
	getSupervisorByUserId,
};
