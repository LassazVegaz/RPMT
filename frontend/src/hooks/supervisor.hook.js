import { useApi } from "./api.hook";
import { supervisorHelpers } from "../helpers/supervisors.helper";

export const useSupervisors = () => {
	const { callApi } = useApi();

	const createSupervisor = async (supervisor) => {
		try {
			await callApi(async () => {
				await supervisorHelpers.createSupervisor(supervisor);
			});
			return true;
		} catch (error) {
			return false;
		}
	};

	return {
		createSupervisor,
	};
};
