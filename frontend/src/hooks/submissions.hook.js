import { submissionsHelper } from "../helpers/submissions.helper";
import { useApi } from "./api.hook";

export const useSubmissions = () => {
	const { callApi } = useApi();

	const getSubmission = async (submissionId) => {
		try {
			return await callApi(
				async () => {
					return await submissionsHelper.getSubmission(submissionId);
				},
				{
					errorMessage: "Error fetching submissions",
					showSuccessMessage: false,
				}
			);
		} catch (error) {
			return null;
		}
	};

	return {
		getSubmission,
	};
};
