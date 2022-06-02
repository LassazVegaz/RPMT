import { useApi } from "./api.hook";
import { supervisorHelpers } from "../helpers/supervisors.helper";

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

	return {
		getAllSupervisors,
	};
};
