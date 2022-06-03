import { useApi } from "./api.hook";
import { supervisorsHelpers } from "../helpers/project.helper";

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
			return await callApi(async () => {
				return supervisorsHelpers.getProject(id);
			});
		} catch (error) {
			return null;
		}
	};

	return {
		assignSupervisor,
		getProject,
	};
};
