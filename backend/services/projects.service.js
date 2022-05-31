import { Project } from "../models/project.model";
import { supervisorsService } from "./supervisors.service";

const createProject = async (project) => {
	project = {
		status: "selecting-supervisor",
		topic: project.topic,
		researchFieldId: project.researchFieldId,
	};

	const newProject = new Project(project);
	await newProject.save();

	return getProject(newProject.id);
};

const getProject = async (id) => {
	return Project.findById(id)
		.populate("researchField")
		.populate("group")
		.populate("submissions");
};

const getProjects = () => {
	return Project.find()
		.populate("researchField")
		.populate("group")
		.populate("submissions");
};

const assignSupervisors = async ({
	projectId,
	supervisorId,
	coSupervisorId,
}) => {
	const project = await Project.findById(projectId);

	if (supervisorId || supervisorId === null)
		project.supervisorId = supervisorId;
	if (coSupervisorId || coSupervisorId === null)
		project.coSupervisorId = coSupervisorId;

	await project.save();

	return getProject(projectId);
};

const getSupervisors = async (projectId) => {
	const project = await Project.findById(projectId);

	const res = { supervisor: null, coSupervisor: null };

	if (project?.supervisorId)
		res.supervisor = await supervisorsService.getSupervisor(
			project.supervisorId
		);

	if (project?.coSupervisorId)
		res.coSupervisor = await supervisorsService.getSupervisor(
			project.coSupervisorId
		);

	return res;
};

export const projectsService = {
	createProject,
	getProject,
	getProjects,
	assignSupervisors,
	getSupervisors,
};
