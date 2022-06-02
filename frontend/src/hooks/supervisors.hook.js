import { useDispatch } from "react-redux";
import { useApi } from "./api.hook";
import { supervisorHelpers } from "../helpers/supervisors.helper";
import { authHelper } from "../helpers/auth.helper";
import { authActions } from "../redux/slices/auth.slice";

export const useSupervisors = () => {
	const { callApi } = useApi();
	const dispatch = useDispatch();

	const updateSupervisor = async (id, supervisor) => {
		try {
			await callApi(
				async () => {
					await supervisorHelpers.updateSupervisor(id, supervisor);
					const user = await authHelper.getLoggedInUser();
					dispatch(authActions.setLoggedUser(user));
				},
				{
					successMessage: "Supervisor updated successfully",
				}
			);
			return true;
		} catch (error) {
			return false;
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

	return {
		updateSupervisor,
		getProjects,
	};
};
