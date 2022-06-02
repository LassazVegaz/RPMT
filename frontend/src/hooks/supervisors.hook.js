import { useApi } from "./api.hook";
import { supervisorHelpers } from "../helpers/supervisors.helper";
import { useDispatch } from "react-redux";
import { authHelper } from "../helpers/auth.helper";
import { authActions } from "../redux/slices/auth.slice";

export const useSupervisors = () => {
	const { callApi } = useApi();
	const dispatch = useDispatch();

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

	return {
		getAllSupervisors,
		updateSupervisor,
	};
};
