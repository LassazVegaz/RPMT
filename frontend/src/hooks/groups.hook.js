import { useApi } from "./api.hook";
import { groupsHelper } from "../helpers/groups.helper";

export const useGroups = () => {
	const { callApi } = useApi();

	const createGroup = async (group) => {
		try {
			await callApi(async () => {
				await groupsHelper.createGroup(group);
			});
			return true;
		} catch (error) {
			return false;
		}
	};

	const getGroup = async (id) => {
		try {
			return await callApi(
				async () => {
					return await groupsHelper.getGroup(id);
				},
				{
					errorMessage: "Error fetching group",
					showSuccessMessage: false,
				}
			);
		} catch (error) {
			return null;
		}
	};

	return {
		createGroup,
		getGroup,
	};
};
