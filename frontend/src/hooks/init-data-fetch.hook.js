import { useDispatch } from "react-redux";

import { useApi } from "./api.hook";
import { researchFieldsHelpers } from "../helpers/research-fields.helper";
import { researchFieldsActions } from "../redux/slices/research-fields.slice";
import { authHelper } from "../helpers/auth.helper";
import { authActions } from "../redux/slices/auth.slice";

export const useInitFetching = () => {
	const { callApi } = useApi();
	const dispatch = useDispatch();

	const fetchInitData = async () => {
		try {
			await callApi(
				async () => {
					const researchFields =
						await researchFieldsHelpers.getResearchFields();
					dispatch(
						researchFieldsActions.setResearchFields(researchFields)
					);

					// check login
					const user = await authHelper.getLoggedInUser();
					if (user) dispatch(authActions.setLoggedUser(user));
					else dispatch(authActions.removeLoggedUser());
				},
				{
					showSuccessMessage: false,
					errorMessage: "Loading initial data failed",
					pageLoaderdarkMode: true,
				}
			);

			return true;
		} catch (error) {
			return false;
		}
	};

	return {
		fetchInitData,
	};
};
