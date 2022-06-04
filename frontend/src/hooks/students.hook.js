import { useApi } from "./api.hook";
import { studentsHelper } from "../helpers/students.helper";

export const useStudents = () => {
	const { callApi } = useApi();

	const getSupervisorFeedback = async () => {
		try {
			return await callApi(
				async () => {
					return await studentsHelper.getSupervisorFeedback();
				},
				{
					showSuccessMessage: false,
					errorMessage: "Getting supervisor feedback failed",
				}
			);
		} catch (error) {
			return [];
		}
	};

	return {
		getSupervisorFeedback,
	};
};
