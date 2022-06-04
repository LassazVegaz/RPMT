import { panelMemberHelpers } from "../helpers/panel-member.helper";
import { useApi } from "./api.hook";

export const usePanelMembers = () => {
	const { callApi } = useApi();

	const getAssignedGroups = async () => {
		try {
			return await callApi(
				async () => await panelMemberHelpers.getAssignedGroups(),
				{
					errorMessage: "Error fetching groups",
					showSuccessMessage: false,
				}
			);
		} catch (error) {
			return [];
		}
	};

	return {
		getAssignedGroups,
	};
};
