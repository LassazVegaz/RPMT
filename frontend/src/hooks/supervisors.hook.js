import { useDispatch } from "react-redux";
import { useApi } from "./api.hook";
import { supervisorHelpers } from "../helpers/supervisors.helper";
import { authHelper } from "../helpers/auth.helper";
import { authActions } from "../redux/slices/auth.slice";

export const useSupervisors = () => {
	const { callApi } = useApi();
	const dispatch = useDispatch();

	const updateSupervisor = async (supervisor) => {
		try {
			await callApi(async () => {
				await supervisorHelpers.updateSupervisor(supervisor);
				const user = await authHelper.getLoggedInUser();
				dispatch(authActions.setLoggedUser(user));
			});
			return true;
		} catch (error) {
			return false;
		}
	};

	return {
		updateSupervisor,
	};
};
