import { useApi } from "./api.hook";
import { usersHelper } from "../helpers/users.helper";

export const useUsers = () => {
	const { callApi } = useApi();

	const isEmailAvailable = async (email) => {
		try {
			return await callApi(
				async () => await usersHelper.isEmailAvailable(email),
				{
					showSuccessMessage: false,
				}
			);
		} catch (error) {
			return false;
		}
	};

	return {
		isEmailAvailable,
	};
};
