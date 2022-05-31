import { Project } from "../models/project.model";

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

export const projectsService = {
	createProject,
	getProject,
	getProjects,
};
