import { useDispatch } from "react-redux";
import { useApi } from "./api.hook";
import { authHelper } from "../helpers/auth.helper";
import { authActions } from "../redux/slices/auth.slice";

export const useAuth = () => {
	const { callApi } = useApi();
	const dispatch = useDispatch();

	const login = async (email, password) => {
		try {
			await callApi(
				async () => {
					await authHelper.login(email, password);
					const user = await authHelper.getLoggedInUser();
					dispatch(authActions.setLoggedUser(user));
				},
				{
					showErrorMessage: false,
					showSuccessMessage: false,
				}
			);
			return true;
		} catch (error) {
			return false;
		}
	};

	return {
		login,
	};
};
