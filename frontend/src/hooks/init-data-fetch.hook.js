import { useApi } from "./api.hook";
import { researchFieldsHelpers } from "../helpers/research-fields.helper";
import { useDispatch } from "react-redux";
import { researchFieldsActions } from "../redux/slices/research-fields.slice";

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
				},
				{
					showSuccessMessage: false,
					errorMessage: "Loading initial data failed",
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
