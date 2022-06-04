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
					showSuccessMessage: false,
					showErrorMessage: false,
				}
			);
		} catch (error) {
			return null;
		}
	};

	const submitMarks = async (submissionId, marks) => {
		try {
			await callApi(
				async () => {
					await submissionsHelper.submitMarks(submissionId, marks);
				},
				{
					successMessage: "Marks submitted successfully",
				}
			);
			return true;
		} catch (error) {
			return false;
		}
	};

	return {
		getSubmission,
		submitMarks,
	};
};
