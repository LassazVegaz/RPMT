import { useApi } from "./api.hook";
import { supervisorHelpers } from "../helpers/supervisors.helper";
import { SUPERVISOR_RESPONSE } from "../constants/supervisor-response";

export const useSupervisors = () => {
	const { callApi } = useApi();

	const getAllSupervisors = async () => {
		try {
			return await callApi(
				async () => {
					return supervisorHelpers.getAllSupervisors();
				},
				{
					showSuccessMessage: false,
					errorMessage: "Getting supervisors failed",
				}
			);
		} catch (error) {
			return [];
		}
	};

	const getProjects = async (id, status = "all") => {
		try {
			return await callApi(
				async () => await supervisorHelpers.getProjects(id, status),
				{
					errorMessage: "Error fetching projects",
					showSuccessMessage: false,
				}
			);
		} catch (error) {
			return [];
		}
	};

	const responseProject = async (id, projectId, response) => {
		const successMessage =
			"Project was " +
			(response === SUPERVISOR_RESPONSE.ACCEPT ? "accepted" : "rejected");

		try {
			await callApi(
				async () => {
					await supervisorHelpers.responseProject(
						id,
						projectId,
						response
					);
				},
				{
					successMessage,
				}
			);
			return true;
		} catch (error) {
			return false;
		}
	};

	const rejectProject = (id, projectId) =>
		responseProject(id, projectId, SUPERVISOR_RESPONSE.REJECT);

	const acceptProject = (id, projectId) =>
		responseProject(id, projectId, SUPERVISOR_RESPONSE.ACCEPT);

	const getSubmission = async (submissionId) => {
		try {
			return await callApi(
				async () => await supervisorHelpers.getSubmission(submissionId),
				{
					errorMessage: "Error fetching submission",
					showSuccessMessage: false,
				}
			);
		} catch (error) {
			return null;
		}
	};

	const submitMarks = async (submissionId, marks) => {
		try {
			await callApi(
				async () => {
					await supervisorHelpers.submitMarks(submissionId, marks);
				},
				{
					successMessage: "Marks submitted successfully",
				}
			);
			return true;
		} catch (error) {
			return false;
		}
	};

	return {
		getAllSupervisors,
		getProjects,
		rejectProject,
		acceptProject,
		getSubmission,
		submitMarks,
	};
};
