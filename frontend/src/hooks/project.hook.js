import { useApi } from "./api.hook";
import { supervisorsHelpers } from "../helpers/project.helper";
import { SUBMISSION_TYPES } from "../constants/submission-types";

export const useProject = () => {
	const { callApi } = useApi();

	const assignSupervisor = async (projectId, coSupervisorId) => {
		try {
			await callApi(async () => {
				await supervisorsHelpers.assignSupervisor(
					projectId,
					coSupervisorId
				);
			});
			return true;
		} catch (error) {
			return false;
		}
	};

	const getProject = async (id) => {
		try {
			return await callApi(
				async () => {
					return supervisorsHelpers.getProject(id);
				},
				{
					errorMessage: "Error fetching project",
					showSuccessMessage: false,
				}
			);
		} catch (error) {
			return null;
		}
	};

	const createSubmission = async (submission) => {
		try {
			return await callApi(
				async () => {
					return supervisorsHelpers.createSubmission(submission);
				},
				{
					errorMessage: "Error creating submission",
				}
			);
		} catch (error) {
			return null;
		}
	};

	const createTopicDocSubmission = async (submission) =>
		createSubmission({
			...submission,
			submissionTypeName: SUBMISSION_TYPES.TOPIC_DOCUMENT,
		});

	return {
		assignSupervisor,
		getProject,
		createTopicDocSubmission,
	};
};
