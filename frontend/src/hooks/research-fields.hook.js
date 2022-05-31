import { useDispatch } from "react-redux";
import { researchFieldsHelpers } from "../helpers/research-fields.helper";
import { useApi } from "./api.hook";
import { researchFieldsActions } from "../redux/slices/research-fields.slice";

export const useResearchFields = () => {
	const { callApi } = useApi();
	const dispatch = useDispatch();

	const fetchResearchFields = async () => {
		try {
			await callApi(async () => {
				const rFields = await researchFieldsHelpers.getResearchFields();
				dispatch(researchFieldsActions.setResearchFields(rFields));
			});
			return true;
		} catch (error) {
			return false;
		}
	};

	return {
		fetchResearchFields,
	};
};
